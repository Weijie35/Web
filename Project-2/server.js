
const fs = require('fs');
let rawdata = fs.readFileSync('users.json');
let users = JSON.parse(rawdata);
const http = require('http');
const querystring = require('querystring');
const url = require('url');
const port = 3000;
let username;
let password;
const server = http.createServer();

server.on("request", request_handler);
function request_handler(req, res) {
    console.log(`Now Request from ${req.socket.remoteAddress} for ${req.url}`);
    if(req.url === "/"){
        let user_input_body = "";

        req.on('data', function(chunk) {
            user_input_body += chunk;
        });
        req.on('end', function() {
            let user_input = querystring.parse(user_input_body);
            let flag = false;
            console.log(user_input);
            username = user_input.username;
            password = user_input.password;
            for(let user of users){
                if(username == user.name || password == user.password){
                    flag = true;
                    username = user.name;
                    password = user.password;
                }
            }
            if(flag){
                res.writeHead(200, {'Content-Type': "text/html"});
                res.write("success");
                res.end();
            }
            else{
                res.writeHead(403, "Forbidden", {"Content-Type": "text/html"});
                res.write("wrong username or password");
                res.end();
            }
        });
    }
    else if(req.url.endsWith("/registration.html")){
        let user_input_body = "";

        req.on('data', function(chunk) {
            user_input_body += chunk;
        });
        req.on('end', function() {
            let user_input = querystring.parse(user_input_body);
            console.log(user_input);
            users.push({"username": `${user_input.username}`,"password":`${user_input.password}`});
            let data = JSON.stringify(users);
            fs.writeFile('users.json', data, (err) => {
                if (err)
                  console.log(err);
                else {
                  console.log("Success\n");
                }
            });
            res.writeHead(200, {'Content-Type': "text/html"});
            res.write("success");
            res.end();
        });
    }
    else if(req.url.endsWith('/user.html')){
        res.end(username + "\n" + password);
    }
    else{
        res.writeHead(404, "NOt Found", {"Content-Type": "text/html"});
        res.write("<h1>404 Not Found </h1>");
        res.end();
    }
}

server.on("listening", listen_handler)
function listen_handler(){
    console.log(`Now Listening on Port ${port}`);
}
server.listen(port);

