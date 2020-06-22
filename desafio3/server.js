const express = require('express')
const nunjucks = require('nunjucks')

const server  = express()
const information = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false
})

server.get("/", function (req, res) {
    return res.render("index")
})
server.get("/courses", function (req, res) {
    return res.render("courses", {items:information})
})
server.get("/about", function (req, res) {
    return res.render("about")
})
server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(8080, function (){
    console.log("server is running")
})