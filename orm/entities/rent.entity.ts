import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Building } from "./building.entity";
import { Floor } from "./floors.entity";
import { Room } from "./room.entity";
import { Tenent } from "./tenents.entity";

@Entity()
export class RentInfo extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: "MONTHLY" })
  frequency: "MONTHLY" | "QUATERLY" | "YEARLY";

  @Column({ default: "CASH" })
  paymentMode: "CASH" | "ONLINE";

  @Column({ default: "INR" })
  currency: "INR" | "USD";

  @Column()
  rent: number;

  @Column()
  contractDocs: string;

  @Column({ nullable: true })
  contractEndDate: Date | null;

  @Column({ default: true })
  activeStatus: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Tenent, (tenent) => tenent.rentHistory)
  tenent: Tenent;

  @ManyToOne(() => Building, (building) => building.rentInfo, {nullable: true})
  building: Building | null;

  @ManyToOne(() => Floor, (floor) => floor.rentInfo, { nullable: true })
  floor: Floor | null;
  
  @ManyToOne(() => Room, (room) => room.rentInfo, { nullable: true })
  room: Room | null;
}
