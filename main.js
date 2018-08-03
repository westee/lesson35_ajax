window.jQuery = function (nodeOrSelector) {

}
window.jQuery.ajax = function ({url,method, body, successFn, failFn, headers}) {
  //析构复制的用法,直接在传参这解构
  // let url;
  // if(arguments.length === 1){
  //   url = option.url
  // }else if(arguments.length === 2){
  //   url = arguments[0];
  //   option = arguments[1];
  // }

  // let body = option.body;
  // let method = option.method;
  // let failFn = option.failFn;
  // let successFn = option.successFn;
  // let headers = option.headers;
  //以上五行可以用es6的语法改写成--- 析构赋值
  //let {method, body, successFn, failFn, headers} = option

  let request = new XMLHttpRequest();
  request.open(method, url)
  for(let key in headers){
    let value = headers[key];
    request.setRequestHeader(key,value);          //必须放在send和open之间
  }

  // request.setRequestHeader('wang', '18');
  // request.setRequestHeader('setRequestHeader', 'between open and send');
  // request.setRequestHeader('content-type', "x-www-form-urlencoded");

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log('请求完毕')

      if (request.status >= 200 && request.status <= 300) {
        successFn.call(undefined, request.responseText); //回调 callback     
        // console.log(request.getAllResponseHeaders())
        // console.log(request.getResponseHeader('Content-Type'))
        // console.log('请求成功')
        // console.log(request.responseText)
        // console.log(typeof request.responseText)
        // let string = request.responseText
        // let object = JSON.parse(string)
        // console.log('object.note')
        // console.log(object.note)
        // console.log(object.from)

        //下面是获得内容
        // let parser = new DOMParser();
        // let xmlDoc = parser.parseFromString(request.responseText,'text/xml')
        // let title = xmlDoc.getElementsByTagName('heading')[0].textContent
        // console.log(title)
        //分隔
        // console.log(typeof object)
        // console.log('object')
        // console.log(object)
      } else if (request.status >= 400) {
        failFn.call(undefined, request)
      }
    }
  }
  request.send()
  // request.send('send可以用来设置请求体哦(第四部分),get方法时则不能查看这一部分')
}
window.$ = window.jQuery;
myButton.addEventListener('click', (e) => {
  console.log(1)
  $.ajax({
      url: '/xxx',
      method: 'post',
      headers: {
        'content-type':"application/x-www-form-urlencoded",
        'dong':'18'
      },
      successFn: (x) => {
        console.log(x)
      },
      failFn: (x) => {
        console.log(x)   //函数具有的方法
        console.log(x.status)   
        console.log(x.response)
      }
  })
})
// XMLHttpRequest.setRequestHeader() 是设置HTTP请求头部的方法。此方法必须在  open() 方法和 send()   之间调用。如果多次对同一个请求头赋值，只会生成一个合并了多个值的请求头。

//如果没有设置 Accept 属性，则此发送出send() 的值为此属性的默认值*/ * 。