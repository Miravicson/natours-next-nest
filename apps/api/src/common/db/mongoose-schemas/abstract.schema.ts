import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema({
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = ret._id.toString();
      return ret;
    },
  },
  toObject: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = ret._id.toString();
      return ret;
    },
  },
})
export class AbstractDocument {
  @Prop({
    type: SchemaTypes.ObjectId,
    default: function () {
      return new Types.ObjectId();
    },
  })
  _id: Types.ObjectId;
}
