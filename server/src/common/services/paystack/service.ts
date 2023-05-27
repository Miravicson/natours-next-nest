import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { AxiosError } from 'axios';
import { catchError, lastValueFrom } from 'rxjs';
import { paystackServiceConfig } from 'src/common/config';

import {
  IPayStackAccountNumberResolveSuccess,
  IPaystackInitializeTransactionSuccess,
  PAY_STACK_BANK_LIST,
  PayStackCacheKeyEnum,
  PaystackSuccessResponse,
  PayStackUrlEnum,
} from './constants';

@Injectable()
export class PayStackService implements OnModuleInit {
  private logger = new Logger(this.constructor.name);

  constructor(
    private readonly http: HttpService,
    @Inject(paystackServiceConfig.KEY) private readonly config: ConfigType<typeof paystackServiceConfig>,
  ) {}

  findAllBankList() {
    return PAY_STACK_BANK_LIST.map(({ name, slug, code }) => ({
      name,
      slug,
      code,
    }));
  }

  findBankByBankCode(bankCode: string) {
    return PAY_STACK_BANK_LIST.find((value) => value.code === bankCode);
  }

  async validateBankAccount(accountNumber: string, bankCode: string) {
    const cacheKey = this.buildKey(PayStackCacheKeyEnum.ResolveBankUrl, {
      bankCode,
      accountNumber,
    });

    try {
      const { data } = await lastValueFrom(
        this.http
          .get<IPayStackAccountNumberResolveSuccess>(PayStackUrlEnum.ResolveBankUrl, {
            params: {
              account_number: accountNumber,
              bank_code: bankCode,
            },
          })
          .pipe((res) => {
            return res;
          })
          .pipe(
            catchError((error: AxiosError) => {
              throw error;
            }),
          ),
      );
      this.logger.verbose(`CACHE MISS: for ${cacheKey}`);
      return { response: data.data };
    } catch (error) {
      this.logger.error(`Error happened`, (error as Error).stack);
      return { error: error };
    }
  }

  async verifyTransaction(paymentResponse: PaystackSuccessResponse) {
    try {
      const { data } = await lastValueFrom(
        this.http
          .get<IPayStackAccountNumberResolveSuccess>(
            PayStackUrlEnum.VerifyTransactionUrl.replace(':reference', paymentResponse.reference),
          )
          .pipe((res) => {
            return res;
          })
          .pipe(
            catchError((error: AxiosError) => {
              throw error;
            }),
          ),
      );
      this.logger.verbose(`Verify Response ${JSON.stringify(data, null, 2)}`);

      return data;
    } catch (error) {
      this.logger.error(`Error happened`, (error as Error).stack);
    }
  }

  createTransactionReference() {
    return `DOT-${Date.now().toString()}`;
  }

  async initializeTransaction() {
    try {
      const { data } = await lastValueFrom(
        this.http.post<IPaystackInitializeTransactionSuccess>(PayStackUrlEnum.InitializeTransactionUrl, {
          email: 'victorughonu@gmail.com',
          amount: '20000',
          reference: this.createTransactionReference(),
          callback_url: 'http://localhost:3000/payment/verify-payment',
        }),
      );
      return data.data.authorization_url;
    } catch (error) {
      this.logger.error(`Error happened`, (error as Error).stack);
    }
  }

  onModuleInit() {
    const paystackBaseUrl = this.config.baseUrl;
    const paystackSecretKey = this.config.secretKey;

    this.http.axiosRef.interceptors.request.use(
      function (config) {
        config.baseURL = paystackBaseUrl;
        const token = paystackSecretKey;
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );
  }

  buildKey(prefix: string, input: any) {
    return `${prefix}${JSON.stringify(input)}`;
  }
}
