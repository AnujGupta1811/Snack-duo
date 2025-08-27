import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "217.21.95.1",             // use IP instead of srv679.hstgr.io
  user: "u856215767_snackduo",
  password: "Snackduo@700990",
  database: "u856215767_snackduo",
  port: 3306,
  ssl: { rejectUnauthorized: true }  // try with this ON
});

export default pool;
