import { AppConfig } from './interfaces/app-config.interface';

export default function (): AppConfig {
  const { DATABASE_URL, AUTH_SECRET } = process.env;

  if (!DATABASE_URL || !AUTH_SECRET) {
    throw new Error('Missing environment variables');
  }

  return {
    dataBaseUrl: DATABASE_URL,
    accessSecret: AUTH_SECRET,
  };
}
