import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bull';

import { User } from '../db/mongoose-schemas/user/user.schema';
import { MailJobNames } from './constants';

@Injectable()
export class MailService {
  constructor(
    @InjectQueue('MAIL_QUEUE')
    private mailQueue: Queue,
  ) {}

  private readonly logger = new Logger(this.constructor.name);

  async sendWelcomeEmail(options: { user: User }): Promise<boolean> {
    try {
      await this.mailQueue.add(MailJobNames.WELCOME_EMAIL, options);
      return true;
    } catch (error) {
      this.logger.error(`Error sending welcome email`, error);
      return false;
    }
  }

  async sendConfirmationEmail(options: { user: User; token: string }): Promise<boolean> {
    try {
      await this.mailQueue.add(MailJobNames.CONFIRM_EMAIL, options);
      return true;
    } catch (error) {
      this.logger.error(`Error sending confirmation email to [${options.user.email}]`, error);
      return false;
    }
  }

  async sendPasswordResetToken(options: { user: User; token: string }): Promise<boolean> {
    try {
      this.logger.verbose(`Queuing up job to send reset password email for [${options.user.email}]`);
      await this.mailQueue.add(MailJobNames.RESET_PASSWORD, options);
      return true;
    } catch (error) {
      this.logger.error(`Error sending password reset token to [${options.user.email}] email`, error);
      return false;
    }
  }

  async sendResetPasswordSuccessEmail(options: { user: User }): Promise<boolean> {
    try {
      await this.mailQueue.add(MailJobNames.RESET_PASSWORD_SUCCESS, options);
      return true;
    } catch (error) {
      this.logger.error(`Error sending password reset success email to [${options.user.email}] email`, error);
      return false;
    }
  }
  async sendPasswordChangedEmail(options: { user: User }): Promise<boolean> {
    try {
      await this.mailQueue.add(MailJobNames.PASSWORD_CHANGE_SUCCESS, options);
      return true;
    } catch (error) {
      this.logger.error(`Error sending password change success email to [${options.user.email}] email`, error);
      return false;
    }
  }
}
