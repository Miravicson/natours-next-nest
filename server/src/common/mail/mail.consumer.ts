import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { Job } from 'bull';
import { EnvironmentVariables } from 'src/common/config/env.validation';

import { User } from '../db/mongoose-schemas/user/user.schema';
import { MailJobNames } from './constants';

@Processor('MAIL_QUEUE')
export class MailConsumer {
  private logger = new Logger(this.constructor.name);

  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {}

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug(`Processing job ${job.id} of type ${job.name}.`);
  }

  @OnQueueCompleted()
  onComplete(job: Job, result: any) {
    this.logger.verbose(`Completed job: ${job.id}`);
    this.logger.debug(result);
  }

  @OnQueueFailed()
  onError(job: Job<any>, error: any) {
    this.logger.error(`Failed job ${job.id} of type ${job.name}: ${error.message}`, error.stack);
  }

  @Process(MailJobNames.WELCOME_EMAIL)
  async sendWelcomeEmail(job: Job<{ user: User }>) {
    // handle logic for sending welcome email

    const { user } = job.data;

    const template = `./${MailJobNames.WELCOME_EMAIL}`;
    const context = { firstName: user.name.split(' ')[0] };
    const subject = 'Welcome to Maimoire; where your memories are kept verdant.';
    const to = user.email;

    const emailData = {
      template,
      context,
      subject,
      to,
    };

    this.logger.verbose(`Sending welcome email`);

    try {
      const result = await this.mailerService.sendMail(emailData);
      return result;
    } catch (error: any) {
      this.logger.error(`Failed to send welcome email `, error.stack);
      throw error;
    }
  }

  @Process(MailJobNames.CONFIRM_EMAIL)
  async sendConfirmEmail(job: Job<{ user: User; token: string }>) {
    const { user, token: confirmEmailToken } = job.data;

    const confirmEmailUrl = new URL(
      this.configService.get<string>('CLIENT_EMAIL_CONFIRM_URL', { infer: true })!,
      this.configService.get<string>('CLIENT_BASE_URL', { infer: true }),
    );
    confirmEmailUrl.searchParams.append('token', confirmEmailToken);
    const template = `./${MailJobNames.CONFIRM_EMAIL}`;
    const context = {
      firstName: user.name.split(' ')[0],
      url: confirmEmailUrl.href,
    };
    const subject = 'Please confirm your email address';
    const to = user.email;

    const emailData = {
      template,
      context,
      subject,
      to,
    };

    this.logger.verbose(`Sending confirmation email`);

    try {
      const result = await this.mailerService.sendMail(emailData);
      return result;
    } catch (error: any) {
      this.logger.error(`Failed to send confirmation email `, error.stack);
      throw error;
    }
  }

  @Process(MailJobNames.RESET_PASSWORD)
  async sendResetPasswordEmail(job: Job<{ user: User; token: string }>) {
    const { user, token: resetPasswordToken } = job.data;

    const resetPasswordUrl = new URL(
      this.configService.get<string>('CLIENT_RESET_PASSWORD_URL', { infer: true })!,
      this.configService.get<string>('CLIENT_BASE_URL', { infer: true }),
    );

    resetPasswordUrl.searchParams.append('token', resetPasswordToken);

    const template = `./${MailJobNames.RESET_PASSWORD}`;
    const context = {
      firstName: user.name.split(' ')[0],
      url: resetPasswordUrl.href,
    };
    const subject = 'Reset your password';
    const to = user.email;

    const emailData = {
      template,
      context,
      subject,
      to,
    };

    this.logger.verbose(`Sending reset password email`);

    try {
      const result = await this.mailerService.sendMail(emailData);
      this.logger.log('Reset password email sent successfully');
      return result;
    } catch (error: any) {
      this.logger.error(`Failed to send reset password email `, error.stack);
      throw error;
    }
  }

  @Process(MailJobNames.RESET_PASSWORD_SUCCESS)
  async sendResetPasswordSuccessEmail(job: Job<{ user: User }>) {
    const { user } = job.data;

    const template = `./${MailJobNames.RESET_PASSWORD_SUCCESS}`;
    const context = {
      firstName: user.name.split(' ')[0],
    };
    const subject = 'Your password has been reset';
    const to = user.email;

    const emailData = {
      template,
      context,
      subject,
      to,
    };

    this.logger.verbose(`Sending reset password success email`);

    try {
      const result = await this.mailerService.sendMail(emailData);
      return result;
    } catch (error: any) {
      this.logger.error(`Failed to send reset password success email `, error.stack);
      throw error;
    }
  }

  @Process(MailJobNames.PASSWORD_CHANGE_SUCCESS)
  async sendPasswordChangedEmail(job: Job<{ user: User }>) {
    const { user } = job.data;

    const template = `./${MailJobNames.PASSWORD_CHANGE_SUCCESS}`;
    const context = {
      firstName: user.name.split(' ')[0],
    };
    const subject = 'You changed your password recently';
    const to = user.email;

    const emailData = {
      template,
      context,
      subject,
      to,
    };

    this.logger.verbose(`Sending password change success email`);

    try {
      const result = await this.mailerService.sendMail(emailData);
      return result;
    } catch (error: any) {
      this.logger.error(`Failed to send reset password success email `, error.stack);
      throw error;
    }
  }
}
