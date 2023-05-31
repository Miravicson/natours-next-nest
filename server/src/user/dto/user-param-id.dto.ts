import { IsMongoId, IsNotEmpty, IsOptional, Validate, ValidateBy, ValidateIf } from 'class-validator';
import { UserIdExists } from 'src/common/validation-rules/user-id-exists.rule';

export class UserParamIdDto {
  @IsMongoId()
  @ValidateIf((o) => !Boolean(o.userId))
  @Validate(UserIdExists)
  @IsNotEmpty()
  @IsOptional()
  id: string;

  @IsMongoId()
  @ValidateIf((o) => !Boolean(o.id))
  @Validate(UserIdExists)
  @IsNotEmpty()
  @IsOptional()
  userId: string;
}
