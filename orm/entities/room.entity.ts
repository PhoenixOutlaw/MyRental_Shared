import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Floor } from "./floors.entity";
import { Location } from "./location.entity";
import { RentInfo } from "./rent.entity";

@Entity()
export class Room extends BaseEntity{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: "ROOM" })
  type: "HALL" | "FLAT" | "ROOM" | "SHOP";

  @Column({ nullable: true })
  description: string | null;

  @Column("simple-json", { nullable: true })
  images: [] | null;

  @Column({ default: "AVAILABLE_FOR_RENTING" })
  status: "AVAILABLE_FOR_RENTING" | "OCCUPIED" | "UNDER_CONSTRUCTION";

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => RentInfo, (rentInfo) => rentInfo.room)
  rentInfo: RentInfo[];

  @ManyToOne(() => User, (user) => user.individualRoom, {
    nullable: true,
    onDelete: "CASCADE",
  })
  user: User | null;

  @ManyToOne(() => Floor, (floor) => floor.rooms, {
    nullable: true,
    onDelete: "CASCADE",
  })
  floor: Floor | null;

  @ManyToOne(() => Location, (location) => location.room, { nullable: true })
  location: Location | null;
}
