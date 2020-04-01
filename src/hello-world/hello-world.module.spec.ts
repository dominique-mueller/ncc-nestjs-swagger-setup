import { Test, TestingModule } from '@nestjs/testing';

import { HelloWorldModule } from './hello-world.module';

/**
 * Hello World Module - Unit Test
 */
describe('Hello World Module', () => {
  let helloWorldModule: HelloWorldModule;

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      imports: [HelloWorldModule],
    }).compile();

    helloWorldModule = testingModule.get(HelloWorldModule);
  });

  it('should instantiate', () => {
    expect(helloWorldModule).toBeDefined();
  });
});
