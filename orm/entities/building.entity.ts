import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  BaseEntity,
  JoinColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Floor } from "./floors.entity";
import { Location } from "./location.entity";
import { RentInfo } from "./rent.entity";

@Entity()
export class Building extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  description: string | null;

  @Column("simple-json", { nullable: true })
  images: [];

  @Column({ default: "AVAILABLE_FOR_RENTING" })
  status: "AVAILABLE_FOR_RENTING" | "OCCUPIED" | "UNDER_CONSTRUCTION";

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.buildings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;

  @OneToMany(() => RentInfo, (rentInfo) => rentInfo.building)
  rentInfo: RentInfo[];

  @OneToMany(() => Floor, (floor) => floor.building)
  floors: Floor[];

  @OneToOne(() => Location, (location) => location.building, {
    cascade: true,
  })
  location: Location;
}
