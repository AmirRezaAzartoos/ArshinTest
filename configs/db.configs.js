import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === "production" });
const dbConfig = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
};

export default dbConfig;
