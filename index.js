const express = require('express'); //bringing the entire express library

const app = express();//create first API - these two lines are to build it

//need to set it up to listen to make requests and respond to requests
//give it a request to handle because right now it can't handle any requests at the moment

app.get('/', (request,response) => { 
    response.send('My first express API....works!');
})// always gives two parameters, a request and a response - to check go to http://localhost:3000/ 
    // must say listening on port 3000 to know if it works

app.listen(3000, () => console.log('Listening on port 3000...')); //to have our express app to listen, we need to pick a port to have listen
                // also takes an optional callback function
                // 3000 is very commonly used for may express API


