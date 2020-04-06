import { NestFactory } from '@nestjs/core';

import * as dotenv from 'dotenv';

dotenv.config({ path: './src/config/.env' });

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.DB_TYPE);
  await app.listen(3000);
}
bootstrap();
