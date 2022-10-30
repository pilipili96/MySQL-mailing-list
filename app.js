const { faker } = require('@faker-js/faker'); 
const mysql = require('mysql');
const express = require('express');
const app = express();
app.set("view engine", "ejs")
const port1 = 3000;

const connection = mysql.createConnection({
    host : 'localhost',
    user :'root',
    database : 'join_us',
    password: "password",
    port:'3306'
});

app.get("/", (req, res) => {
    const q = "SELECT COUNT(*) AS count FROM users";
    connection.query(q, function (error, results) {
        if (error) throw error;
        const count = results[0].count;
        res.render('home', {count: count})
    });
});

app.get("/joke", (req, res) => {
    res.send("Very funny joke here")
})

app.get("/random_number",(req, res) => {
    const random = Math.floor(Math.random() * 100 + 1 );
    res.send(`Your lucky number is ${random}`)
})




app.listen(port1, () => console.log("App is listening on port " + port1));





// let q = 'SELECT COUNT(*) AS total FROM users' ;

// connection.query(q, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results[0].total)

//     console.log(results[0].time);
//     console.log(results[0].date.toString());
//     console.log(results[0].now.toString());
//   });

// let person = {
//   email:faker.internet.email(),
//   created_at: faker.date.past()
// };

// connection.query('INSERT INTO users SET ?', person, (err, result) => {
//   if (err) throw err;
//   console.log(result)
// })

// const data = [];
// for(let i = 0; i < 500; i++){
//     data.push([
//         faker.internet.email(),
//         faker.date.past()
//     ]);
// }
 
 
// const q = 'INSERT INTO users (email, created_at) VALUES ?';
 
// connection.query(q, [data], function(err, result) {
//   console.log(err);
//   console.log(result);
// });
