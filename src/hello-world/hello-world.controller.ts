import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { HelloWorldService } from './hello-world.service';
import { HelloWorldDTO } from './hello-world.dto';

/**
 * Hello World Controller
 */
@ApiTags('API')
@Controller('/api')
export class HelloWorldController {
  /**
   * Constructor
   *
   * @param helloWorldService Hello World Service
   */
  constructor(private readonly helloWorldService: HelloWorldService) {}

  /**
   * Get "Hello World"
   */
  @ApiOperation({
    summary: 'Get a hello world message',
  })
  @ApiOkResponse({
    description: 'Hello world message',
    type: HelloWorldDTO,
  })
  @Get('/hello-world')
  getHello(): HelloWorldDTO {
    return {
      message: this.helloWorldService.getHello(),
    };
  }
}
