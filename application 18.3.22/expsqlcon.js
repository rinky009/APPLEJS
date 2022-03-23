const sql = require('mssql');

const sqlConfig = {
    user: 'root',
    password: 'root',
    database: 'SHIKHA1',
    server: 'USER',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

 const getPool = async () => {
 let pool = await sql.connect(sqlConfig);
  return pool;
}

sql.on('error', err => {
    // ... error handler
});

exports.getPool = getPool;