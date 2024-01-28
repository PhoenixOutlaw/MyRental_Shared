import { IsEmail, Length } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  DeleteDateColumn,
  BaseEntity,
} from "typeorm";
import { PaymentInfo } from "./payment.entity";

@Entity()
export class Tenent extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column({ unique: true, nullable: true })
  @IsEmail()
  email: string | null;

  @Column({ unique: true })
  @Length(10, 10)
  phoneNumber: string;

  @Column({ unique: true })
  aadharNumber: string;

  @Column("simple-json", { nullable: true })
  tenentDocs: [] | null;

  @Column({ default: 0 })
  tenetScore: number;

  @OneToMany(() => PaymentInfo, (paymentInfo) => paymentInfo.paidBy)
  paymentHistories: PaymentInfo[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
