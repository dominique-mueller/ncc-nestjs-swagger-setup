import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { HelloWorldModule } from './hello-world.module';

/**
 * Hello World Feature - End to end test
 */
describe('Hello World Feature (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HelloWorldModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /api/hello-world', () => {
    return request(app.getHttpServer())
      .get('/api/hello-world')
      .expect(200)
      .expect({
        message: 'Hello World!',
      });
  });
});
