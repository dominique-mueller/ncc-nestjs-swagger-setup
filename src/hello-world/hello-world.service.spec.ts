import { Test, TestingModule } from '@nestjs/testing';

import { HelloWorldService } from './hello-world.service';

/**
 * Hello World Service - Unit Test
 */
describe('Hello World Service', () => {
  let helloWorldService: HelloWorldService;

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      providers: [HelloWorldService],
    }).compile();

    helloWorldService = testingModule.get(HelloWorldService);
  });

  it('should instantiate', () => {
    expect(helloWorldService).toBeDefined();
  });

  it('should return "Hello World!"', () => {
    const hello: string = helloWorldService.getHello();

    expect(hello).toBe('Hello World!');
  });
});
