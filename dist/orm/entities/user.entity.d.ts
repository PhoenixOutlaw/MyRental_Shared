import { BaseEntity } from "typeorm";
import { Building } from "./building.entity";
import { Floor } from "./floors.entity";
import { Room } from "./room.entity";
export declare class User extends BaseEntity {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    aadharNumber: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    buildings: Building[];
    individualFloor: Floor[];
    individualRoom: Room[];
}
