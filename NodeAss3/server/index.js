const express = require('express');

const App = express();

const middleware = (req, res, next)=>{
    console.log("midleware 1");
    // res.send("mh")
    next()
}
const middleware2 = (req, res, next)=>{
    console.log("midleware 1");
    next()
}
App.use(middleware)

App.get('/api/main/', (req, res)=>{
    res.send("<h1>Express Js</h1> <p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.<p> <h2>Why Express Js</h2> <ul><li>Express was created to make APIs and web applications with ease,</li><li>It saves a lot of coding time almost by half and still makes web and </li><li>mobile applications are efficient.</li><li>Another reason for using express is that it is written in javascript as javascript is an easy language even if you don't have a previous</li></ul>")
})

App.get('/api/about/', (req, res)=>{
    res.send("<h1>All About informaiton comming on this page</h1> ")
})

App.get('/api/login/', (req, res)=>{
    res.send("<h1>This is Login page</h1> ")
})
App.get('/api/home/',middleware2 , (req, res)=>{
    console.log("m2");
    res.send("<h1>Express Js</h1> <p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.<p> <h2>Why Express Js</h2> <ul><li>Express was created to make APIs and web applications with ease,</li><li>It saves a lot of coding time almost by half and still makes web and </li><li>mobile applications are efficient.</li><li>Another reason for using express is that it is written in javascript as javascript is an easy language even if you don't have a previous</li></ul>")
})
App.get('/api/signup/',middleware2 , (req, res)=>{
    console.log("m2");
    res.send("<h1>This is SignUp Page</h1>")
})
App.listen(190,()=>{
    console.log("Server is running on Port 190");
})



