# 사용 방법
options 변수를 수정해 홈페이지 주소와 포트를 설정한다.<br>

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
            console.log(chunk.toString('utf-8')); // 받은 데이터
        });
    },
    { // post할 객체
        foo: 'bar'
    });

    del_(options, '/del', function(res){
        res.on('data', function (chunk) {
            console.log(chunk.toString('utf-8')); // 받은 데이터
        });
    },
    { // delete할 객체
        foo: 'bar'
    });
이렇게 사용하면 된다.