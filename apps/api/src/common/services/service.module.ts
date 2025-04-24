import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';

import { DbModule } from '../db/db.module';
import { CloudinaryProvider } from './cloudinary/provider';
import { CloudinaryService } from './cloudinary/service';
import { PayStackService } from './paystack/service';
import { StripeProvider } from './stripe/provider';
import { StripeService } from './stripe/service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => {
        const httpModuleConfig: AxiosRequestConfig = {
          timeout: 10000,
          maxRedirects: 5,
        };
        return httpModuleConfig;
      },
    }),

    DbModule,
  ],
  providers: [PayStackService, CloudinaryService, CloudinaryProvider, StripeProvider, StripeService],
  exports: [PayStackService, CloudinaryService, CloudinaryProvider, StripeProvider, StripeService],
})
export class ExternalServiceModule {}
