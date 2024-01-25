import { BaseEntity } from "typeorm";
import { User } from "./user.entity";
import { Floor } from "./floors.entity";
import { Location } from "./location.entity";
import { RentInfo } from "./rent.entity";
export declare class Building extends BaseEntity {
    id: string;
    description: string | null;
    images: [];
    status: "AVAILABLE_FOR_RENTING" | "OCCUPIED" | "UNDER_CONSTRUCTION";
    createdAt: Date;
    updatedAt: Date;
    user: User;
    rentInfo: RentInfo[];
    floors: Floor[];
    location: Location;
}
