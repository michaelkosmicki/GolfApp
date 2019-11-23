//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// WIP make data into objects then pass through to ejs
// var tiger = {
//   name: "Tiger Woods",
//   points: 9
// };
// var ricky = {
//   name: "Ricky Fowler",
//   points: 9
// };
// var phil = {
//   name: "Phil Mickelson",
//   points: 9
// };
// var bum = {
//   name: "Random Bum",
//   points: 1
// };
// var golfers = [tiger, ricky, phil, bum];
// var golfersName =  Object.values(golfers);
// var golfersPoints = [];

var golfers = ["Tiger Woods", "Ricky Fowler","Phil Mickelson"];
var golfer = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
//   for (const key of golfersName) {
//   console.log(key);
// }
  res.render("list", {golfers: golfers ,golfer: golfer});
});
app.post("/", function(req, res){
  if (req.body.newitem == "") {
    res.redirect("/");
  }
  else {
  golfer.push(req.body.newitem);
  res.redirect("/");
}
});
// Home Route






// app.post("/", function(req, res){
//     var num1 = Number(req.body.num1);
//     var num2 = Number(req.body.num2);
//     console.log(num1 + num2);
// });



app.listen(3000, function(){
  console.log("Server started on port 3000");
});
