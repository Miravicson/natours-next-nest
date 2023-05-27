import { ConfigType } from '@nestjs/config';
import { v2 } from 'cloudinary';
import { cloudinaryServiceConfig } from 'src/common/config';

import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (config: ConfigType<typeof cloudinaryServiceConfig>) => {
    return v2.config(config);
  },
  inject: [cloudinaryServiceConfig.KEY],
};
