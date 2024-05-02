const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/ToDoRoute");
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


mongoose
.connect('mongodb+srv://sravya:sravya@cluster0.ertgbsr.mongodb.net/?retryWrites=true&w=majority')
.then(()=>app.listen(5001))
.then(()=>
console.log("Connected to Database and Listening to Database 5001")
)
.catch((err)=>console.log(err));

