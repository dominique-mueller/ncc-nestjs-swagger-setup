import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

/**
 * Bootstrap the backend application
 */
async function bootstrap(): Promise<void> {

  // Create application
  const app: INestApplication = await NestFactory.create( AppModule );

  // Start application
  await app.listen( 3000 );

}

// Run!!
bootstrap();
