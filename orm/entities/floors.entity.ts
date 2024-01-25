import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Building } from "./building.entity";
import { User } from "./user.entity";
import { Room } from "./room.entity";
import { Location } from "./location.entity";
import { RentInfo } from "./rent.entity";

@Entity()
export class Floor extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable:true})
    description: string | null;

    @Column("simple-json",{nullable:true})
    images: [] | null;

    @Column({default:"AVAILABLE_FOR_RENTING"})
    status: "AVAILABLE_FOR_RENTING" | "OCCUPIED" | "UNDER_CONSTRUCTION"

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => RentInfo, (rentInfo) => rentInfo.floor)
    rentInfo: RentInfo[];

    @OneToMany(()=>Room , (rooms)=>rooms.floor)
    rooms: Room[]

    @ManyToOne(()=>User,(user)=>user.individualFloor,{nullable:true, onDelete:"CASCADE"})
    user: User | null
    
    @ManyToOne(()=>Building , (building)=>building.floors,{nullable:true, onDelete:"CASCADE"})
    building: Building | null

    @ManyToOne(() => Location, (location) => location.floor,{nullable:true})
    location:Location | null;

}