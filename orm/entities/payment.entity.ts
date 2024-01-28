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

/**
 * For now we will only deal with payment mode "cash".
 * In future we may introduce other payment modes like "UPI", "BANK_TRANSFER" etc.
 */
export enum PAYMENT_MODE {
  cash = "CASH",
};

export enum PAYMENT_STATUS {
  inProgress = "IN_PROGRESS",
  paid = "PAID",
  failed = "FAILED"
}

@Entity()
export class PaymentInfo extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: PAYMENT_MODE.cash })
  mode: PAYMENT_MODE;

  @Column({ default: PAYMENT_STATUS.inProgress })
  status: PAYMENT_STATUS;

  @Column()
  amount: number;

  @Column({ default: "INR" })
  currency: "INR" | "USD";

  @ManyToOne(() => Tenent, (tenant) => tenant.paymentHistories, {
    nullable: false,
  })
  paidBy: Tenent;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Building, (building) => building.rentInfo, {
    nullable: true,
  })
  building: Building | null;

  @ManyToOne(() => Floor, (floor) => floor.rentInfo, { nullable: true })
  floor: Floor | null;

  @ManyToOne(() => Room, (room) => room.rentInfo, { nullable: true })
  room: Room | null;
}
