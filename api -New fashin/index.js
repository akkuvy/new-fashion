var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var db = require("./config/connection");
const userRoute = require("./routes/user");
const collection = require("./config/collection");

var app = express();

//database setup
db.connect((err) => {
  if (err) console.log("Connection error" + err);
  else console.log("Database connected");
});


     


//middlewares

//Body-Parser to JSON
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    optionSuccessStatus: 200,
  })
);
// Router setup middlewares
app.options("http://localhost:3000", cors());
app.use("/", userRoute);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// server setup
app.listen(3002, () => {
   
});

