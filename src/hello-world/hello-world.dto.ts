import { ApiProperty } from '@nestjs/swagger';

/**
 * Hello World DTO
 */
export class HelloWorldDTO {
  @ApiProperty({
    description: 'Hello world message',
  })
  message: string;
}
