import * as http from 'http';
// import * as url from 'url';
// import * as fs from 'fs';

const hostname = '127.0.0.1';
const port = 8080;

const GETExample = {
  options: {
    host: 'www.w3resource.com',
    path: '/php/function-reference/srand-example.php'
  },
  callback: function (response: http.IncomingMessage) {
    let str = '';
    // chunk of data has been recieved and  append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });
    // the whole response has been recieved, now print it out here  
    response.on('end', function () {
      console.log(str);
    });
  }
};


const createServerCallback = function (req: http.IncomingMessage, res: http.ServerResponse) {
  let html = buildHTML(req);
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  http.request(GETExample.options, GETExample.callback).end();
  res.end(html);
};

let server = http.createServer(createServerCallback);

server.listen(port, hostname);

function buildHTML(req: http.IncomingMessage) {
  let header = '';
  let body = '<h1>Node.js Tutorial</h1><p>We are learning http module</><p></p>';
  return '<!DOCTYPE html>'
    + '<html><header>' + header + '</header><body>' + body + '</body></html><br>';
}

let uhtml = '<html><head><title>Post Example</title></head>' + '<body>' + '<p>Input your name and Address</p>' + '<form method="post">' + 'Name : <input name="name" size=20><br>' + 'Address : <input name="address" size=50><br>' + '<input type="submit">' + '</form>' + '</body></html>';
http.createServer(function (req, res) {
  let body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    console.log('POSTed: ' + body);
    res.writeHead(200); res.end(uhtml);
  });
}).listen(8081);

console.log("Server is listeningsdfs");
