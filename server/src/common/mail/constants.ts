import { readdirSync } from 'node:fs';

import path from 'path';

export enum MailJobNames {
  WELCOME_EMAIL = 'welcome-email',
  CONFIRM_EMAIL = 'confirm-email',
  RESET_PASSWORD = 'reset-password',
  RESET_PASSWORD_SUCCESS = 'reset-password-success',
  PASSWORD_CHANGE_SUCCESS = 'password-change-success',
}

const verifyEmailTemplatesExists = () => {
  const templateDirs = path.join(__dirname, 'templates');
  const templates = readdirSync(templateDirs);
  for (const templateName of Object.values(MailJobNames)) {
    const fullTemplateName = `${templateName}.pug`;
    if (!templates.includes(fullTemplateName)) {
      throw new Error(
        `You have referenced a template name ${templateName} that does not have a corresponding file in the templates directory.\nPlease create a file with name ${fullTemplateName} in the directory ${templateDirs} to resolve this error`,
      );
    }
  }
};

verifyEmailTemplatesExists();
