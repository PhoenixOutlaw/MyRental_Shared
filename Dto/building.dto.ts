import { IsNotEmpty, IsOptional, Matches } from "class-validator";

export class Location_dto {
  @IsNotEmpty()
  pincode: string;

  @IsNotEmpty()
  address: string;

  @IsOptional()
  country: string;
}

export class CreateBuilding_dto {
  @IsOptional()
  description: string;

  @IsOptional()
  images: [];

  @IsNotEmpty()
  @Matches(/^AVAILABLE_FOR_RENTING|OCCUPIED|UNDER_CONSTRUCTION$/)
  status: "AVAILABLE_FOR_RENTING" | "OCCUPIED" | "UNDER_CONSTRUCTION";

  @IsNotEmpty()
  location: Location_dto;
}
