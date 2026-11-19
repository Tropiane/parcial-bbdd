import { Pool } from "pg";
import ENV from "../config/env";


const pool = new Pool({
    user: ENV.POSTGRES_USER,
    host: ENV.POSTGRES_HOST,
    database: ENV.POSTGRES_DB,
    password: ENV.POSTGRES_PASSWORD,
    port: parseInt(ENV.POSTGRES_PORT)
})

export default pool;