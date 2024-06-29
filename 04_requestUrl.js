//  npm i -g nodemon
// nodemon filename 运行文件 实时监听文件变化

// 1. 导入url 模块
const url = require("url");
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
//   解决跨域
  res.setHeader("Access-Control-Allow-Origin", "*");

  console.log(req.url);
  // 解析路径
  // 实例化URL对象
  let reqUrl = new URL(req.url, "http://localhost:9000");
  // let reqUrl = new URL( 'http://localhost:9000/?a=123&b=456')
  // console.log(reqUrl);
  console.log(reqUrl.pathname);
  // console.log(reqUrl.searchParams);
  // console.log(reqUrl.searchParams.get('a'));

  // 将路径转为对象 第二个参数传递true 表示将query 变为一个对象
  const result = url.parse(req.url, true);
  // console.log(result);
  console.log(result.pathname);
  // console.log(result.query.id,result.query.name)

//   根据不同请求方法 / 不同路径 返回不同的内容
  if (result.pathname === "/home" && req.method === 'POST') {
    res.end("/home POST 页面响应内容");
  }else if(result.pathname === '/home' && req.method === 'GET'){
    res.end('/home get ')
  }else if(result.pathname === '/' && req.method === 'GET'){
    res.end('/ get ')
  }else {
    res.end("Welcome 响应内容123  ");
  }
});
server.listen(9000, () => {
  console.log("server listening on 9000");
});

