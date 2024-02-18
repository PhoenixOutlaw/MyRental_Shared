import * as JWT from "jsonwebtoken";
import { HttpStatus } from "@nestjs/common";
import { RpcError } from "./customRcpException";

export const jwtToken = {
  create: function (payload: any) {
    let data = payload;
    if (typeof payload === "object") data = { ...payload };
    return JWT.sign(data, process.env.JWT_SECRET_KEY);
  },
  data: function (jwtToken: string): any {
    return JWT.decode(jwtToken);
  },
  verify: function (jwtToken: string) {
    return JWT.verify(jwtToken, process.env.JWT_SECRET_KEY);
  },
  verifyOrThrow: function<T>(jwtToken: string): T {
    try {
      return JWT.verify(jwtToken, process.env.JWT_SECRET_KEY) as T;
    } catch (err) {
      throw new RpcError("Invalid JWT Token", HttpStatus.FORBIDDEN);
    }
  }
};
