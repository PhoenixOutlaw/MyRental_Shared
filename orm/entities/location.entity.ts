import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Building } from "./building.entity";
import { Floor } from "./floors.entity";
import { Room } from "./room.entity";

@Entity()
export class Location extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  pincode: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  country: string | null;

  @OneToOne(() => Building, (building) => building.location, {
    cascade: true,
  })
  building: Building;

  @OneToMany(() => Floor, (floor) => floor.location, { onDelete: "CASCADE" })
  floor: Floor[];

  @OneToMany(() => Room, (room) => room.location, { onDelete: "CASCADE" })
  room: Room[];
}
