import { HttpStatus } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";

export class RpcError extends RpcException {
  constructor(message: string, statusCode: HttpStatus, errorMeta?: object) {
    super({ message, statusCode, ...errorMeta });
  }
}
