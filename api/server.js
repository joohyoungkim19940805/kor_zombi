const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 80;
const {Pool} = require('pg');

const dbConfig = {  
  user : 'kor_zombi_rds',
  host : 'kor-zombi-rds-3.cylfrmmsl7kc.ap-northeast-2.rds.amazonaws.com',
  database : 'kor_zombi_database',
  password : 'rlawngud1',
  port : 5432
}
const pool = new Pool(dbConfig);

async function run (queryString, callBack){
  pool.connect((err, client, done)=>{
    if(err){
      console.error('Error connecting to pg server' + err.stack);
    }
    else{
      console.log('start<<<<<<');
      client.query(queryString,(err,res)=>{
        let result;
        if(err){
          console.error('Error executing query on pg db' + err.stack);
          result = err
        }else{
          console.log('results query :' + res.rows.length);
          result = res.rows
        }
        client.release();
        callBack(result);
      });
    }
  });
}

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/menu', (req,res) =>{
  console.log('checkr<<<><');
  run('select * from main_menu order by menu_idx asc', (e)=>{console.log(e);res.json(e);});
});

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});
app.post('/api/remove', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.splice(user,1);
  res.json("user remove");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});