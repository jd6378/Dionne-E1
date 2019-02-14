var http = require('http');
var server = http.createServer(requestHandler); 
server.listen(process.env.PORT, process.env.IP, startHandler);

function startHandler()
{
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
}

function calcDistance(query)
{
    
}

function calcCost(query)
{
    
}

function requestHandler(req, res)
{
    var url = require('url');
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    if (query['cmd'] == 'calcDistance')
        res.write(JSON.stringify(calcDistance(query)));
    if (query['cmd'] == 'calcCost')
        res.write((JSON.stringify(calcCost(query))))
    
    res.end();
}