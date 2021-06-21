const http = require('http');

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<head><link rel="stylesheet" href="#"></head>');
    res.write('<h1>Hookem Horns</h1>');
    res.write('<h3>"The Eyes of Texas Are Upon you!"</h3>')
    res.end();
});
server.listen(3000, 'localhost', ()=>{
    console.log("Listening requests on port 3000")
});