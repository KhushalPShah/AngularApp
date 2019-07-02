const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
var db;
var collection;

mongo.connect(url, (err, client) => {
  if (err) {
    throw err;
  }
  console.log("Database Created!");
  db = client.db("usersApp");
  collection = db.collection('users');
})

app.get("/", (req, res) => {
  res.send("Hello world!");
  res.end();
})

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(cors());                //Using the CORS module.
app.use(bodyParser.json());     //Using Body Parser.



app.post("/addUser", (req, res) => {
  collection.insertOne(req.body, (err, result) => {
    if (err) {
      res.send({
        msg: "Error in User registration",
        type: "fail",
      })
      res.end();
      throw err;
    }
    console.log(result);
    res.send({
      msg: "user registered",
      type: "success",
      result: result,
    })
    res.end();
  })
})

app.post("/getUserByEmail", (req,res) => {
  collection.findOne({
    email : req.body.email.toString(),
  }, (err, result) => {
    if (err) {
      res.send({
        msg: "Error in User registration",
        type: "fail",
      })
      res.end();
      throw err;
    }
    res.send({
      msg : "User found",
      type : "success",
      result : result,
    })
    res.end();
  })
})

app.post("/deleteUser", (req, res) => {
  console.log(req.body.email)
  collection.deleteOne({
    email: req.body.email.toString(),
  }, (err, obj) => {
    if (err) {
      res.send({
        msg: "Error in User registration",
        type: "fail",
      })
      res.end()
      throw err;
    }
    console.log("User Deleted!");
    res.send({
      msg: "user Deleted",
      type: "success",
    })
    res.end();
  })
})

app.get("/getAllUsers", (req, res) => {
  collection.find({}).toArray((err, result) => {
    if (err) {
      res.send({
        msg: "Error in Fetching users",
        type: "fail",
      })
      res.end();
      throw err
    }
    console.log(result);
    res.send({
      msg: "users found",
      type: "success",
      result: result,
    })
    res.end();
  })
})

app.listen(port, () => {
  console.log("Server running at port : ", port);
})