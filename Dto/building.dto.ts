import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Matches,
  MinLength,
} from "class-validator";

export class Location {
  @IsNotEmpty()
  pincode: string;

  @IsNotEmpty()
  address: string;

  @IsOptional()
  country: string;
}
export class Mpin_dto {
  @IsNotEmpty()
  @MinLength(6)
  mpin: string;
}

export class CreateBuilding_dto {
  @IsOptional()
  description: string;

  @IsOptional()
  images: [];

  @IsNotEmpty()
  status: "AVAILABLE_FOR_RENTING" | "OCCUPIED" | "UNDER_CONSTRUCTION";

  @IsNotEmpty()
  location: Location;
}
