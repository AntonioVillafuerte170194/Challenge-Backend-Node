import dotenv from "dotenv";
dotenv.config();

export const config = {
  // port: process.env.API_PORT || "3001",
  dbUser: process.env.DB_USER || "postgres",
  dbPassword: process.env.DB_PASSWORD || "guni",
  dbHost: process.env.DB_HOST || {
    host: "localhost",
    dialect: "postgres",
    port: "5433",
  },
  PrivateKey: process.env.PRIVATE_KEY || "123",
};
