// creat web server
// 1. load http module
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var comments = [];

// 2. create server
http.createServer(function(request, response){
    var url_parts = url.parse(request.url);
    if(url_parts.pathname == '/comment'){
        if(request.method == 'POST'){
            var body = '';
            request.on('data', function(chunk){
                body += chunk;
            });
            request.on('end', function(){
                var post = qs.parse(body);
                comments.push(post.comment);
                response.end('success');
            });
        }
        else{
            var all = '';
            comments.forEach(function(comment){
                all += comment + '<br>';
            });
            response.end(all);
        }
    }
    else if(url_parts.pathname == '/'){
        fs.readFile('./index.html', function(error, data){
            response.end(data);
        });
    }
    else{
        response.end('404');
    }
}).listen(3000);

console.log('Server running at http://