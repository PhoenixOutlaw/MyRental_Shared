import { MigrationInterface, QueryRunner } from "typeorm";
export declare class FullName1703244756469 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
