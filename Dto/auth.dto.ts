import { IsNotEmpty, Length, Matches } from "class-validator";

export class Mpin_dto {
  @IsNotEmpty()
  @Matches(new RegExp(/^[0-9]{6}$/))
  mpin: string;
}

export class CreateUser_dto {
  name: string;

  @IsNotEmpty()
  @Matches(new RegExp(/^[2-9]{1}[0-9]{11}$/))
  aadharNumber: string;

  @IsNotEmpty()
  @Matches(new RegExp(/^[0-9]{10}$/))
  phoneNumber: string;
}
