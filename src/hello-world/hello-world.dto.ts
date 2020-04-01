import { ApiModelProperty } from "@nestjs/swagger";

/**
 * Hello World DTO
 */
export class HelloWorldDTO {
  @ApiModelProperty({
    description: "Hello world message"
  })
  message: string;
}
