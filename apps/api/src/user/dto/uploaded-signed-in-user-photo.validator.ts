import { HttpStatus, ParseFilePipeBuilder } from '@nestjs/common';

const oneMB = 1000000;

export const updateSignedInUserPhotoValidator = new ParseFilePipeBuilder()
  .addFileTypeValidator({
    fileType: new RegExp('jpeg|png|jpg'),
  })
  .addMaxSizeValidator({ maxSize: 10 * oneMB })
  .build({
    fileIsRequired: false,
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  });
