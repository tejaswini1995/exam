var http=require('http');
var controller=function process_request(req,resp)
			
			{
	resp.writeHead(200,{'Content-Type':'text/html'});
	
var customers=[
{id:1,name:"John",city:"Mumbai"},
	{id:2,name:"Jack",city:"Pune"},
		{id:3,name:"Bela",city:"Banglore"},
			{id:4,name:"Amy",city:"Chennai"}
			];
			resp.end(JSON.stringify(customers));
			};
			
var server=http.createServer(process_request);
server.listen(3000);
console.log("server is listening at port 3000");