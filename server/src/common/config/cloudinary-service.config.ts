import { registerAs } from '@nestjs/config';
import { IsString } from 'class-validator';

import { validate } from './env.validation';

class CloudinaryServiceConfig {
  @IsString()
  api_key: string;

  @IsString()
  api_secret: string;

  @IsString()
  cloud_name: string;

  @IsString()
  assetFolder: string;
}

const config = () => {
  const values: CloudinaryServiceConfig = {
    api_key: process.env['CLOUDINARY_API_KEY']!,
    api_secret: process.env['CLOUDINARY_API_SECRET']!,
    cloud_name: process.env['CLOUDINARY_CLOUD_NAME']!,
    assetFolder: process.env['CLOUDINARY_ASSET_FOLDER']!,
  };

  return validate({ ...values }, CloudinaryServiceConfig);
};

export const cloudinaryServiceConfig = registerAs('cloudinaryServiceConfig', config);
