import { BaseEntity } from "typeorm";
import { Building } from "./building.entity";
import { Floor } from "./floors.entity";
import { Room } from "./room.entity";
export declare class Location extends BaseEntity {
    id: string;
    pincode: string;
    address: string;
    country: string | null;
    building: Building;
    floor: Floor[];
    room: Room[];
}
