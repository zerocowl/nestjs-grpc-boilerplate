import { registerAs } from '@nestjs/config';

export default registerAs(
  'app',
  (): Record<string, any> => ({
    name: process.env.APP_NAME || 'app',
    env: process.env.APP_ENV || 'development',
    http: {
      host: process.env.APP_HOST || 'localhost',
      port: Number.parseInt(process.env.APP_PORT) || 3000,
    },
    debug: process.env.APP_DEBUG === 'true' || false,
  }),
);
