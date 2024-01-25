import { BaseEntity } from "typeorm";
import { Building } from "./building.entity";
import { User } from "./user.entity";
import { Room } from "./room.entity";
import { Location } from "./location.entity";
import { RentInfo } from "./rent.entity";
export declare class Floor extends BaseEntity {
    id: string;
    description: string | null;
    images: [] | null;
    status: "AVAILABLE_FOR_RENTING" | "OCCUPIED" | "UNDER_CONSTRUCTION";
    createdAt: Date;
    updatedAt: Date;
    rentInfo: RentInfo[];
    rooms: Room[];
    user: User | null;
    building: Building | null;
    location: Location | null;
}
