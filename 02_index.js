// 访问9000端口 响应index页面

// 1.导入http 模块
const http = require('http')
const fs = require('fs')
// 2.创建web服务
const server = http.createServer((req, res) => {
    console.log('create server');
    // 将index.html 响应到页面上
    // const html = fs.readFileSync('./index.html')
    const html = fs.readFileSync('./index.html', 'utf8');
    console.log(html);
    // res.end('<h1>Welcome http server</h1>')
    res.end(html)  // 可以接收字符串和buffer
})
// 3.监听端口启动服务
server.listen(9000,()=>{
    console.log('Starting');
})