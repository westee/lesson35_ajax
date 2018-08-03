#!/usr/bin/env node

var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url
  var queryString = ''
  if (pathWithQuery.indexOf('?') >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'))
  }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method
  console.log(path)
  /******** 从这里开始看，上面不要看 ************/

  console.log('方方说：含查询字符串的路径为\n' + pathWithQuery)

  if (path == '/') {
    response.statusCode = 200
    let string = fs.readFileSync("./index.html", 'utf-8')
    response.setHeader('content-Type', 'text/html;charset=utf-8')
    response.write(string)
    response.end()
  } else if (path == '/main.js') {
    response.statusCode = 200
    let string = fs.readFileSync('./main.js', 'utf-8')
    response.setHeader('content-Type', 'text/javascript;charset=utf-8')
    response.write(string)
    response.end()
  } else if (path === '/xxx') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(`
    {
      "note":{
      "to":"小姑",
      "from":"东东",
      "heading":"打招呼",
      "body":"你好"
      }
    }
    `)
    response.end();
  }
  else{
   response.statusCode = 400;
   response.setHeader('Content-Type', 'text/xml;charset=utf-8')
   response.write('旭东正在赶往车祸现场')
   response.end()
   }








  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)