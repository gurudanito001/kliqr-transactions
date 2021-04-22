const Pool = require("pg").Pool;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
    user: "postgres",
    password: "nwokocha95",
    database: "kliqr_users",
    host: "https://infinite-cove-82813.herokuapp.com/",
    port: "5432"
});

module.exports = pool