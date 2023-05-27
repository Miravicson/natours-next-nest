import { ConfigType } from '@nestjs/config';
import { stripeServiceConfig } from 'src/common/config';
import Stripe from 'stripe';

import { STRIPE } from './constants';

export const StripeProvider = {
  provide: STRIPE,
  useFactory: (config: ConfigType<typeof stripeServiceConfig>) => {
    return new Stripe(config.secretKey, {
      apiVersion: '2022-11-15',
    });
  },
  inject: [stripeServiceConfig.KEY],
};
