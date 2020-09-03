//First we need to require a service library name as http.
const http=require("http");
//then we use the service to create a server. 
//The create server always calls whenever our server is get trigerred.
//There is always a request by  client and then we need to send the response to the client.
const server=http.createServer(
    function(req,res)
    {
        console.log(`User Visited the Url :- ${req.url}`);
        res.end("Hello User");
    }
);

console.log("We are listening to port: http://localhost:3000");

//We are always listening to this port , you can give anything in that but strictly follow the networking port rules.

server.listen(3000);

//Simply write node nodeServer.js in the terminal and try to open this port in a browser.
//favicon.ico is the default part any browser will try to find in the server.