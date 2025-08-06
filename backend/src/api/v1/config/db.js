const { Pool } = require('pg');

const pool = new Pool({
    host: 'postgres',
    user: 'myuser',
    password: 'mypassword',
    database: 'dating_app',
    port: 5432,
});

module.exports = pool;