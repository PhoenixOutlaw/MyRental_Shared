import * as JWT from "jsonwebtoken";

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
};
