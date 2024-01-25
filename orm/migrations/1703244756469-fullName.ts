import { MigrationInterface, QueryRunner } from "typeorm";

export class FullName1703244756469 implements MigrationInterface {
    name = 'FullName1703244756469'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "fullName" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fullName"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "firstName" character varying NOT NULL`);
    }

}
