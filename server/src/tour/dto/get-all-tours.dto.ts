import { GetAllResourceDto } from 'src/common/dto/get-all-resource.dto';

export class GetAllToursDto extends GetAllResourceDto {
  duration: string;
}
