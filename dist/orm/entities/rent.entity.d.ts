import { BaseEntity } from "typeorm";
import { Building } from "./building.entity";
import { Floor } from "./floors.entity";
import { Room } from "./room.entity";
import { Tenent } from "./tenents.entity";
export declare class RentInfo extends BaseEntity {
    id: string;
    frequency: "MONTHLY" | "QUATERLY" | "YEARLY";
    paymentMode: "CASH" | "ONLINE";
    currency: "INR" | "USD";
    rent: number;
    contractDocs: string;
    contractEndDate: Date | null;
    activeStatus: boolean;
    createdAt: Date;
    tenent: Tenent;
    building: Building | null;
    floor: Floor | null;
    room: Room | null;
}
