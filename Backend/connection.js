// connection.js
import mysql from "mysql2/promise";

// Create MySQL connection pool
const pool = mysql.createPool({
  host: "srv679.hstgr.io",        // your host
  user: "u856215767_snackduo",    // your DB user
  password: "Snackduo@700990",    // your DB password
  database: "u856215767_snackduo" // your DB name
});

export default pool;
