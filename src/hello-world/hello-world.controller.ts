import { Controller, Get } from '@nestjs/common';
import { HelloWorldService } from './hello-world.service';

/**
 * Hello World Controller
 */
@Controller('/api')
export class HelloWorldController {

  /**
   * Constructor
   *
   * @param helloWorldService Hello World Service
   */
  constructor(
    private readonly helloWorldService: HelloWorldService
  ) { }

  /**
   * Get "Hello World"
   */
  @Get('/hello-world')
  getHello(): any {
    return {
      message: this.helloWorldService.getHello()
    };
  }

}
