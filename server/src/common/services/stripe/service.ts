import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { stripeServiceConfig } from 'src/common/config';
import Stripe from 'stripe';

import { STRIPE, StripeCreateSessionDto } from './constants';

@Injectable()
export class StripeService {
  private logger = new Logger(this.constructor.name);

  constructor(
    @Inject(STRIPE) private readonly stripe: Stripe,
    private readonly http: HttpService,
    @Inject(stripeServiceConfig.KEY) private readonly config: ConfigType<typeof stripeServiceConfig>,
  ) {}

  public async createCheckoutSession(sessionDto: StripeCreateSessionDto) {
    this.logger.log(`${this.createCheckoutSession.name}:`);
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: sessionDto.paymentMethodTypes,
      success_url: sessionDto.successUrl,
      cancel_url: sessionDto.cancelUrl,
      customer_email: sessionDto.customerEmail,
      client_reference_id: sessionDto.clientReferenceId,
      line_items: sessionDto.lineItems,
    });
    return session;
  }
}
