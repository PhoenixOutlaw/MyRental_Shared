import { RmqContext } from "@nestjs/microservices";

export function getCtxHeader(ctx: RmqContext, header: string): any {
  const {
    properties: { headers },
  } = ctx.getMessage();
  const res = headers[header];
  return res;
}
