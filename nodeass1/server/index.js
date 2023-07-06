const http = require('http');

const App = http.createServer((reqest, response)=>{
console.log(reqest.url, reqest.method);
    if(reqest.url == '/' && reqest.method == 'GET' ){
        response.statusCode = 201;
        // response.write()
        response.end("<html><body><h2>What is Nodejs</h2> <p>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node</p><h2>Why we use nodejs</h2><p>Node. js is easily employed as a server-side proxy, where it can handle a large amount of simultaneous connections in a nonblocking manner. It's useful for proxying different services with varying response times, or collecting data from multiple source points.</p></body></html>")
    }
    else if(reqest.url == '/about' ){
        response.statusCode = 301;
        const metObj= {
            "name": "Andy",
            "school":"GETE",
            "Area":"hallmark"
        }

        const info = JSON.stringify(metObj)

        response.setHeader("content-type", "application/json;charset=UTF-8")
        response.write(info)
        response.end()
    }
    else{
        response.statusCode = 404;
        response.write('404 Page Not Found')
    }
})
App.listen(56, ()=>{
    console.log("Server is running on port 56....");
})