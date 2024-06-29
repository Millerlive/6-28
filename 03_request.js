// 获取请求的信息

const http = require('http');
const server = http.createServer((req, res) => {
    // 获取请求方法
    // 常用的请求方法 ： get 主要用于获取数据  post主要用于新增数据
    console.log(req.method);
    // 获取请求的url 只包含url路径和搜索字符串
    console.log(req.url);
    // console.log(req.httpVersion);
    // console.log(req.headers);

    // 获取请求体
    let reqBody = ''
    // 绑定data事件
    req.on('data', chunk=>{
        // console.log('chunk', chunk.toString());
        reqBody += chunk
    })
    // 绑定end事件  当数据读取完成后触发
    req.on('end',()=>{
        console.log('reqBody',reqBody);
    })

    res.end('Welcome')
})
server.listen(8080,()=>{
    console.log('Listening on port 8080');
})