const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.listen(PORT);

console.log("app is listening on... " + PORT);

 app.get("/", (req, res) =>{
        res.sendFile(path.join(__dirname, "./index.html"));
 });
 app.get("/hello", (req, res) =>{
        res.json({
            message:"Yo"
        });
 });
 app.get('/r', (req, res)=>{
        res.json({
            Something: "New"
        });
 });
 app.get("/run/new", (req, res)=>{
        res.json([{
            Another:"One",
            second:"One"
        }]);
 });