// http :超文本传输协议 (Hypertext Transfer Protocol)
/* 
    http://localhost:3000
    http:协议
    localhost / 127.0.0.1   : 域名 / IP
    3000  : 端口号

    请求报文：
        请求行：请求方法 请求路径 http版本
        请求头：键值对   https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers 查看请求体的含义
        请求体：（一般get很少有请求体）
    响应报文：
        响应行：http版本  响应状态码  状态码描述  200   OK
        响应头：键值对
        响应体：响应内容

        https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/ 查看状态码


*/
// 创建一个http 服务
// 1. 导入nodejs内置的http模块
const http = require("http");
// 2. 创建一个服务对象
const server = http.createServer((request, response) => {
  // 当服务器收到请求时执行
  console.log("http.createServer");
  // response.end(响应内容)  结束响应
  // 通过  response.setHeader() 设置响应头   设置响应内容的编码格式  将字符集设置为utf-8
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  // response.setHeader('aaa',123)
  // response.write() 可以多次调用的
  // 当response.write() 配合 response.end()使用时 response.end()中不写内容
  response.write("write");
  response.write("write");
  response.write("write");
  response.end();
  // 每个请求都必须执行response.end() 并且只能执行一次
  // response.end('response 响应内容')
});
// 3. 监听端口，启动服务
const PORT = 9000
server.listen(PORT, () => {
  // 服务启动成功时执行
  console.log("server listening");
});


// 当服务启动后，每次更新代码，要重新启动才生效
// ctrl + c 结束运行
// node filename
// http默认端口 80 ，http 常用的端口号有3000  8080 8090 9000