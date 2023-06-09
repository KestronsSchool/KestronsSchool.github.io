const express=require("express");
const path=require("path");
const fs=require("fs");
const site=new express();
site.use(express.static(path.join(__dirname + '/static')));
site.listen(8000,()=>{
    console.log("Website running");
});
var pages=["index","about","contact-me"];
site.get("/about",(req,res)=>{
    var d=fs.readFileSync("./static/about.html","utf-8");
    res.send(d);
});
site.get("/contact-me",(req,res)=>{
    var d=fs.readFileSync("./static/contact-me.html","utf-8");
    res.send(d);
});
site.get("/*",(req,res)=>{
    res.send("404 Not Found!<br><a href='/'>Home</href>");
});