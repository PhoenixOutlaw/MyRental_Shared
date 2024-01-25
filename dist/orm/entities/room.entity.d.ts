import { BaseEntity } from "typeorm";
import { User } from "./user.entity";
import { Floor } from "./floors.entity";
import { Location } from "./location.entity";
import { RentInfo } from "./rent.entity";
export declare class Room extends BaseEntity {
    id: string;
    type: "HALL" | "FLAT" | "ROOM" | "SHOP";
    description: string | null;
    images: [] | null;
    status: "AVAILABLE_FOR_RENTING" | "OCCUPIED" | "UNDER_CONSTRUCTION";
    createdAt: Date;
    updatedAt: Date;
    rentInfo: RentInfo[];
    user: User | null;
    floor: Floor | null;
    location: Location | null;
}
