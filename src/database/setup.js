require('dotenv').config()
const fs = require('fs');
const db = require('./connect');

const sql = fs.readFileSync('./database/setup.sql').toString();

db.query(sql)
    .then(data => {
        db.end();
        console.log('Set-up complete.')
    })
    .catch(err => console.log(err));