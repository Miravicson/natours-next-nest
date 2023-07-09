import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';
import { UploadApiErrorResponse, UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import {
  CloudinaryImage,
  CloudinaryImageDocument,
  CloudinaryImageModel,
} from 'src/common/db/mongoose-schemas/images.schema';
import { convertBufferToStream } from 'src/common/lib/buffer-to-stream';
import { createCustomImageTransformer } from 'src/common/lib/image-processor';

import { cloudinaryServiceConfig } from '@/common/config';

import { CLOUDINARY } from './constants';

export type EntityImageConfig = {
  entity?: string;
  entityId?: string;
  role?: string;
};

const IMAGE_DELETE_THRESHOLD = 100;
const everDayAtElevenOClockPM = '0 0 23 * * *';

@Injectable()
export class CloudinaryService {
  private readonly logger = new Logger(this.constructor.name);
  constructor(
    @InjectModel(CloudinaryImage.name)
    private cloudinaryImageModel: CloudinaryImageModel,
    @Inject(cloudinaryServiceConfig.KEY) private readonly config: ConfigType<typeof cloudinaryServiceConfig>,
  ) {}

  async saveResult(result: UploadApiResponse, options: EntityImageConfig) {
    this.logger.verbose('Creating a cloudinary image document for uploaded file');
    const payload: Partial<Omit<CloudinaryImage, '_id'>> = {
      entity: options.entity,
      entityId: options.entityId,
      height: result.height,
      width: result.width,
      publicId: result.public_id,
      secureUrl: result.secure_url,
      url: result.url,
      type: result.type,
      name: result.original_filename,
      role: options.role,
    };

    await this.cloudinaryImageModel.create(payload);
  }

  async deleteImage(options: EntityImageConfig) {
    this.logger.verbose('Delete image function was called ❌');
    this.logger.verbose(`Here is the entity you passed in ${options} 🛠️`);
    await this.cloudinaryImageModel.findOneAndUpdate(
      {
        entityId: options.entityId,
      },
      { isDeleted: true },
    );
  }

  async uploadImage(
    file: Express.Multer.File,
    options: EntityImageConfig,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    this.logger.verbose(`About uploading image to cloudinary.`);

    return new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream(
        {
          folder: this.config.assetFolder,
        },
        (error, result) => {
          if (error) {
            return reject(error);
          }
          this.saveResult(result!, options);
          resolve(result!);
        },
      );

      convertBufferToStream(file.buffer).pipe(createCustomImageTransformer()).pipe(upload);
    });
  }

  async actualDeleteImages() {
    this.logger.verbose('About to actually delete the images');
    const docs = (await this.cloudinaryImageModel
      .find({ isDeleted: true })
      .select('publicId')
      .lean()
      .exec()) as unknown as CloudinaryImageDocument[];
    const deletedImagesPublicId = docs.map(({ publicId }) => publicId);
    await cloudinary.api.delete_resources(deletedImagesPublicId);

    await this.cloudinaryImageModel.deleteMany({ isDeleted: true });
  }

  @Cron(everDayAtElevenOClockPM)
  async deleteMarkedImagesFromCloud() {
    this.logger.debug('About deleting images marked as delete from cloudinary');

    const count = await this.cloudinaryImageModel.countDocuments({
      isDeleted: true,
    });

    this.logger.verbose(`The number of images marked to be deleted is: ${count}`);

    if (count > IMAGE_DELETE_THRESHOLD) {
      await this.actualDeleteImages();
    }
  }
}
