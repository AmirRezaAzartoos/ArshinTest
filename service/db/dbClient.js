import pkg from "pg";
const { Pool } = pkg;
import dbConfig from "../../configs/db.configs.js";
const pool = new Pool(dbConfig);

export default pool;
