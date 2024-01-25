import { BaseEntity } from "typeorm";
import { RentInfo } from "./rent.entity";
export declare class Tenent extends BaseEntity {
    id: string;
    fullName: string;
    email: string | null;
    phoneNumber: string;
    aadharNumber: string;
    tenentDocs: [] | null;
    tenetScore: number;
    rentHistory: RentInfo[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
