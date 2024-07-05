import { MigrationInterface, QueryRunner } from "typeorm";

export class Initialization1720169875175 implements MigrationInterface {
    name = 'Initialization1720169875175'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "location" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "pincode" character varying NOT NULL, "address" character varying NOT NULL, "country" character varying, "buildingId" uuid, CONSTRAINT "REL_9d3c879ab8834dc2d6c46bb366" UNIQUE ("buildingId"), CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rent_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "frequency" character varying NOT NULL DEFAULT 'MONTHLY', "currency" character varying NOT NULL DEFAULT 'INR', "rent" integer NOT NULL, "contractDocs" character varying NOT NULL, "contractEndDate" TIMESTAMP, "activeStatus" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "buildingId" uuid, "floorId" uuid, "roomId" uuid, CONSTRAINT "PK_49d4909ea148230d24bcf7f7ea3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL DEFAULT 'ROOM', "description" character varying, "images" text, "status" character varying NOT NULL DEFAULT 'AVAILABLE_FOR_RENTING', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "floorId" uuid, "locationId" uuid, CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "floor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying, "images" text, "status" character varying NOT NULL DEFAULT 'AVAILABLE_FOR_RENTING', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "buildingId" uuid, "locationId" uuid, CONSTRAINT "PK_16a0823530c5b0dd226b8a96ee1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "mpin" character varying, "fullName" character varying NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "aadharNumber" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_f2578043e491921209f5dadd080" UNIQUE ("phoneNumber"), CONSTRAINT "UQ_033283e36ada00cac588d340667" UNIQUE ("aadharNumber"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "building" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying, "images" text, "status" character varying NOT NULL DEFAULT 'AVAILABLE_FOR_RENTING', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_bbfaf6c11f141a22d2ab105ee5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "mode" character varying NOT NULL DEFAULT 'CASH', "status" character varying NOT NULL DEFAULT 'IN_PROGRESS', "amount" integer NOT NULL, "currency" character varying NOT NULL DEFAULT 'INR', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "paidById" uuid NOT NULL, "buildingId" uuid, "floorId" uuid, "roomId" uuid, CONSTRAINT "PK_b2ba4f3b3f40c6a37e54fb8b252" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tenent" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying NOT NULL, "email" character varying, "phoneNumber" character varying NOT NULL, "aadharNumber" character varying NOT NULL, "tenentDocs" text, "tenetScore" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_aafe6ae5e5149eccc2357b4eedd" UNIQUE ("email"), CONSTRAINT "UQ_ea369c2862bf710d1b21f6d616f" UNIQUE ("phoneNumber"), CONSTRAINT "UQ_b390d566d2540bb009c84d18467" UNIQUE ("aadharNumber"), CONSTRAINT "PK_f3c71163a185b87988b9f9d83ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "location" ADD CONSTRAINT "FK_9d3c879ab8834dc2d6c46bb3665" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rent_info" ADD CONSTRAINT "FK_72bf983d03d649acd562e4c8320" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rent_info" ADD CONSTRAINT "FK_9bdfc5ad6f05641f81b4f82c3e3" FOREIGN KEY ("floorId") REFERENCES "floor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rent_info" ADD CONSTRAINT "FK_65d80bd646da1adb09567936a6f" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_0468c843ad48d3455e48d40ddd4" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_10cf3e2165977f1e547d5c25512" FOREIGN KEY ("floorId") REFERENCES "floor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_7443454f937091459ed1d0b0990" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "floor" ADD CONSTRAINT "FK_56b63e7a3bce5129e42f4ab2e75" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "floor" ADD CONSTRAINT "FK_4808c82b763a5b2829d73f6cc7f" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "floor" ADD CONSTRAINT "FK_aaec2bb758a1f6b435050d59551" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "building" ADD CONSTRAINT "FK_a7d81d120aee0696b75d3a9ee06" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "payment_info" ADD CONSTRAINT "FK_fe5ce9b99a9577f164574b834d7" FOREIGN KEY ("paidById") REFERENCES "tenent"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment_info" ADD CONSTRAINT "FK_76bafc15721e596b1b984d21c87" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment_info" ADD CONSTRAINT "FK_51f27d7e964e095d9b75d12e735" FOREIGN KEY ("floorId") REFERENCES "floor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment_info" ADD CONSTRAINT "FK_3a32d7db7b3f8e87972c91083a3" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment_info" DROP CONSTRAINT "FK_3a32d7db7b3f8e87972c91083a3"`);
        await queryRunner.query(`ALTER TABLE "payment_info" DROP CONSTRAINT "FK_51f27d7e964e095d9b75d12e735"`);
        await queryRunner.query(`ALTER TABLE "payment_info" DROP CONSTRAINT "FK_76bafc15721e596b1b984d21c87"`);
        await queryRunner.query(`ALTER TABLE "payment_info" DROP CONSTRAINT "FK_fe5ce9b99a9577f164574b834d7"`);
        await queryRunner.query(`ALTER TABLE "building" DROP CONSTRAINT "FK_a7d81d120aee0696b75d3a9ee06"`);
        await queryRunner.query(`ALTER TABLE "floor" DROP CONSTRAINT "FK_aaec2bb758a1f6b435050d59551"`);
        await queryRunner.query(`ALTER TABLE "floor" DROP CONSTRAINT "FK_4808c82b763a5b2829d73f6cc7f"`);
        await queryRunner.query(`ALTER TABLE "floor" DROP CONSTRAINT "FK_56b63e7a3bce5129e42f4ab2e75"`);
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_7443454f937091459ed1d0b0990"`);
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_10cf3e2165977f1e547d5c25512"`);
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_0468c843ad48d3455e48d40ddd4"`);
        await queryRunner.query(`ALTER TABLE "rent_info" DROP CONSTRAINT "FK_65d80bd646da1adb09567936a6f"`);
        await queryRunner.query(`ALTER TABLE "rent_info" DROP CONSTRAINT "FK_9bdfc5ad6f05641f81b4f82c3e3"`);
        await queryRunner.query(`ALTER TABLE "rent_info" DROP CONSTRAINT "FK_72bf983d03d649acd562e4c8320"`);
        await queryRunner.query(`ALTER TABLE "location" DROP CONSTRAINT "FK_9d3c879ab8834dc2d6c46bb3665"`);
        await queryRunner.query(`DROP TABLE "tenent"`);
        await queryRunner.query(`DROP TABLE "payment_info"`);
        await queryRunner.query(`DROP TABLE "building"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "floor"`);
        await queryRunner.query(`DROP TABLE "room"`);
        await queryRunner.query(`DROP TABLE "rent_info"`);
        await queryRunner.query(`DROP TABLE "location"`);
    }

}
