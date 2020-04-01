import { Module } from '@nestjs/common';

import { HelloWorldModule } from './hello-world/hello-world.module';

/**
 * App Module
 */
@Module( {
  imports: [
    HelloWorldModule
  ]
} )
export class AppModule { }
