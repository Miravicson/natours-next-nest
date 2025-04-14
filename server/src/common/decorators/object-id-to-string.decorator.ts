import { applyDecorators } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer"
import { Types } from "mongoose";


export const ObjectIdToString = () => {
  return applyDecorators(
    ApiProperty({type: String, name: 'id'}),
    Transform(({value}: {value: Types.ObjectId}) => {
      if (!value) {
        return null;
      }

      return value.toJSON()
    })
  )
}