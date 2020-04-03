import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';

dotenv.config({ path: './src/config/.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.DB_TYPE);
  await app.listen(3000);
}
bootstrap();
