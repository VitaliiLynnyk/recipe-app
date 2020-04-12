import { NestFactory } from '@nestjs/core';

import * as dotenv from 'dotenv';

dotenv.config({ path: './src/config/.env' });

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
