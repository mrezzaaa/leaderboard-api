// main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RateLimiterInterceptor } from './rate-limitter/rate-limitter.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new RateLimiterInterceptor());
  await app.listen(3000);
}
bootstrap();
