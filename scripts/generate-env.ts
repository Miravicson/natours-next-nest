import { randomBytes } from 'crypto';
import fs from 'fs/promises';

const envMap = {
  TZ: 'UTC',
  PUBLIC_URL: '',
  PUBLIC_SERVER_URL: '',
  PUBLIC_GOOGLE_CLIENT_ID: '',
  SECRET_KEY: '',
  JWT_SECRET: ''
};

const main = async () => {
  // URLs
  // If running in a Gitpod environment, auto generated the URLs
  if (process.env.GITPOD_WORKSPACE_URL) {
    const baseUrl = new URL(process.env.GITPOD_WORKSPACE_URL!).host;

    envMap['PUBLIC_SERVER_URL'] = `https://3100-${baseUrl}`;
    envMap['PUBLIC_URL'] = `https://3000-${baseUrl}`;
  }
  // Otherwise, fallback to localhost
  else {
    envMap['PUBLIC_SERVER_URL'] = 'https://localhost:3100';
    envMap['PUBLIC_URL'] = 'https://localhost:3000';
  }

  // Secret Key
  envMap['SECRET_KEY'] = randomBytes(20).toString('hex');
  envMap['JWT_SECRET'] = randomBytes(40).toString('hex');

  const envFile = Object.entries(envMap)
    .reduce((acc, [key, value]) => {
      acc.push(`${key}=${value}`);

      return acc;
    }, [] as string[])
    .join('\n');

  await fs.writeFile('.env', envFile);
};

main();
