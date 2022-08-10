import { Sequelize } from "sequelize";
// import { config } from "../lib/config.js";

export const sequelize = new Sequelize(
  "postgres",
  "postgres",
  "guni",
  {
    host: "localhost",
    dialect: "postgres",
    port: "5433",
  }
  // `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}`,
  // {
  //   logging: false,
  //   native: false,
  // }
);
