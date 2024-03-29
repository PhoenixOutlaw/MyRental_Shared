import { RmqContext, RmqRecordBuilder } from "@nestjs/microservices";

export function getCtxHeader(ctx: RmqContext, header: string): any {
  const {
    properties: { headers },
  } = ctx.getMessage();
  const res = headers[header];
  return res;
}

export function createRecord(data: any, headers: any) {
  return new RmqRecordBuilder(data)
    .setOptions({
      headers,
    })
    .build();
}
