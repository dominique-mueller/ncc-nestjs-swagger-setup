import { Injectable } from '@nestjs/common';

/**
 * Hello World Service
 */
@Injectable()
export class HelloWorldService {
  /**
   * Get "Hello World"
   *
   * @returns Hello World
   */
  public getHello(): string {
    return 'Hello World!';
  }
}
