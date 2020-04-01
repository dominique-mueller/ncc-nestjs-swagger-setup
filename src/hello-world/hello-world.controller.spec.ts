import { Test, TestingModule } from '@nestjs/testing';

import { HelloWorldController } from './hello-world.controller';
import { HelloWorldService } from './hello-world.service';

/**
 * Hello World Controller - Unit Test
 */
describe( 'Hello World Controller', () => {

  let helloWorldController: HelloWorldController;
  let helloWorldService: HelloWorldService;

  beforeEach( async () => {

    const testingModule: TestingModule = await Test
      .createTestingModule( {
        controllers: [
          HelloWorldController
        ],
        providers: [
          {
            provide: HelloWorldService,
            useValue: {
              getHello: () => { }
            }
          }
        ],
      } )
      .compile();

    helloWorldController = testingModule.get( HelloWorldController );
    helloWorldService = testingModule.get( HelloWorldService );

  } );

  it( 'should instantiate', () => {

    expect( helloWorldController ).toBeDefined();

  } );

  it( 'should return "Hello World!"', () => {

    spyOn( helloWorldService, 'getHello' ).and.returnValue( 'Hello World!' );

    const hello: string = helloWorldController.getHello();

    expect( hello ).toEqual( {
      message: 'Hello World!'
    } );

  } );

} );
