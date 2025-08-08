import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "myuser",
  password: "mypassword",
  database: "dating_app",
  port: 1110,
});

export default pool;
