import sql from "mssql";

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  // port: Number(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false, // false for local dev; true for Azure/production
    trustServerCertificate: true, // true for dev/local
  },
};

let pool;

export async function getConnection() {
  try {
    if (!pool) {
      pool = await sql.connect(config);
    }
    return pool;
  } catch (err) {
    console.error("DB Connection Failed:", err);
    throw err;
  }
}
