const http = require('http');

var options = {
    hostname: 'httpbin.org',
    port: 80,
    headers: {
        'Content-Type': 'charset=utf-8'
    }
};

get(options, '/ip', function(res){
    var serverData = '';
    res.on('data', function (chunk) {
      serverData += chunk;
    });
    res.on('end', function () {
      console.log(serverData.toString('utf-8'));
    });
});

post(options, '/post', function(res){
    res.on('data', function (chunk) {
        console.log(JSON.parse(chunk.toString('utf-8')));
    });
},
{ // post할 객체
    foo: 'bar'
});

function get(options, path='/', callback){
    // options 세팅
    options.path = path; options.method = 'GET';

    req = http.get(options, function(res){
        res.setEncoding('utf-8');
        callback(res);
    });

}

function post(options, path='/', callback, data){
    // options 세팅
    options.path = path; options.method = 'POST'; options.headers['Content-Length'] = JSON.stringify(data).length;

    req = http.request(options, function(res){
        res.setEncoding('utf-8');
        callback(res);
    });

    req.write(JSON.stringify(data));
    req.end();
}