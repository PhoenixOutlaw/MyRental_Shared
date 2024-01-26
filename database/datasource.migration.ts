import path from "path";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

if (process.env.NODE_ENV === "test") {
  const filePath = path.join(__dirname, "../../../.env.test");
  console.log("Loading .env.test configuration from ", filePath);
  dotenv.config({ path: filePath });
} else {
  console.log(`Loading .env configuration`);
  dotenv.config();
}

const basePath = __dirname + "../../src/MyRental_Shared/";
export const migration_datasource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: [basePath + "orm/entities/*.entity{.ts,.js}"],
  migrations: [basePath + "orm/migrations/*{.ts,.js}"],
  migrationsTableName: "migrations",
});
