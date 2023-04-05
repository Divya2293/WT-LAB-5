const http= require('http');
url=require('url');
http.createServer((req,res)=>{
    console.log(req.url);
    var q=url.parse(req.url,true).query;
    console.log(q);
    console.log(q.r);
    
    var a = Number(q.r);
   
    var area = 3.14*a*a;
    res.write("Area of the Circle is "+area);
    res.end();

}).listen(3000);

