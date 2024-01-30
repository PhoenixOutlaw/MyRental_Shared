import { IsNotEmpty, IsOptional, Matches } from "class-validator";

enum buildingStatus {
  "AVAILABLE_FOR_RENTING",
  "OCCUPIED",
  "UNDER_CONSTRUCTION",
}
export class Location_dto {
  @IsNotEmpty()
  pincode: string;

  @IsNotEmpty()
  address: string;

  @IsOptional()
  country: string;
}
export class updateLocation_dto {
  @IsOptional()
  @IsNotEmpty()
  pincode: string;

  @IsOptional()
  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsNotEmpty()
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
export class updateBuilding_dto {
  @IsOptional()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsNotEmpty()
  images: [];

  @IsOptional()
  @IsNotEmpty()
  @Matches(/^AVAILABLE_FOR_RENTING|OCCUPIED|UNDER_CONSTRUCTION$/)
  status: buildingStatus;

  @IsNotEmpty()
  location: Location_dto;
}
