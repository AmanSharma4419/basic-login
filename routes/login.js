// requring the express
var express = require("express");

//extracting the routes
var router = express.Router();

//requring the schema model
var User = require("../model/model")

// handling the request of rendring the form
 router.get("/",(req ,res) => {
     res.render("login");
 })

 //handling the post route of login
 router.post("/",(req,res) => {
     User.create(req.body,(err,loggedIn) =>{
         if(err) console.log(err)
         res.send(loggedIn)
     })
 })
// Exporing the module of route
module.exports = router;