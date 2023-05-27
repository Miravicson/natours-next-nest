import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

import { AbstractDocument } from './abstract.schema';

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'cloudinary_images',
})
export class CloudinaryImage extends AbstractDocument {
  @Prop({ type: String })
  entityId: string;

  @Prop({ type: String })
  entity: string;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String, required: true })
  secureUrl: string;

  @Prop({ type: String })
  url: string;

  @Prop({ type: String, required: true })
  publicId: string;

  @Prop({ type: String, required: true })
  type: string;

  @Prop({ type: Number, required: true })
  height: number;

  @Prop({ type: Number, required: true })
  width: number;

  @Prop({ type: String, default: false })
  isDeleted: boolean;

  @Prop({ type: String })
  role: string;
}

export const CloudinaryImageSchema = SchemaFactory.createForClass(CloudinaryImage);

export type CloudinaryImageDocument = HydratedDocument<CloudinaryImage>;

export type CloudinaryImageModel = Model<CloudinaryImageDocument>;
