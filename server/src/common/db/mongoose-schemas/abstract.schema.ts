import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema()
export class AbstractDocument {
  @Prop({
    type: SchemaTypes.ObjectId,
    default: function () {
      return new Types.ObjectId();
    },
    alias: 'id',
  })
  _id: Types.ObjectId;
}
