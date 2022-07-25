const express = require('express');
//var Connection = require('ssh2')
//solve cors issue
const cors = require("cors");

const app = express();

/* var c = new Connection();
c.connect({
  host: '150.136.7.153',
  port: 22,
  username: 'epsolb',
  privateKey: 'b'
});*/

app.use(cors());
const port = 5000;
const Pool = require('pg').Pool;
  //Enter here your Postres database details
const pool = new Pool({
    user: 'epsol2',
    host: 'localhost',
    database: 'epsol_mediciones',
    password: '2',
    dialect: 'postgres',
    port: 5432
});

  //Database connection and also please create postgres database first
pool.connect((err, client, release) => {
    if (err) {
        return console.error(
            'Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error(
                'Error executing query', err.stack)
        }
        console.log("Connected to Database !")
    })
})

app.get('/acometida_unix_try', (req, res, next) => {
    console.log("TEST DATA :");
    pool.query('Select * from acometida_unix_try')
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})

app.listen(port, () => {
  console.log(`Error, app is running on port ${port}.`);
});
