import Stripe from 'stripe';

export const STRIPE = Symbol('STRIPE');

export interface StripeCreateSessionDto {
  successUrl: Stripe.Checkout.SessionCreateParams['success_url'];
  cancelUrl: Stripe.Checkout.SessionCreateParams['cancel_url'];
  customerEmail: Stripe.Checkout.SessionCreateParams['customer_email'];
  clientReferenceId: Stripe.Checkout.SessionCreateParams['client_reference_id'];
  lineItems?: Stripe.Checkout.SessionCreateParams['line_items'];
  paymentMethodTypes: Stripe.Checkout.SessionCreateParams['payment_method_types'];
}
