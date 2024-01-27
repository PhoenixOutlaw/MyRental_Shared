import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from "dotenv";
import path from "path";

if (process.env.NODE_ENV === "test") {
  const filePath = path.join(__dirname, "../../../.env.test");
  console.log("Loading .env.test configuration from ", filePath);
  dotenv.config({ path: filePath });
} else {
  console.log(`Loading .env configuration`);
  dotenv.config();
}

const basePath = __dirname + "/../";
const dataSource: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: false,
  // migrationsRun: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: [basePath + "orm/entities/*.entity{.ts,.js}"],
  migrations: [basePath + "orm/migrations/*{.ts,.js}"],
};
export default dataSource;
