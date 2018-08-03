myButton.addEventListener('click',(e)=>{
  $.ajax({
    url:'/xxx',
    method:'get'
  }).then(
    (responseText)=>{console.log(responseText);
    return '成功'
  },
    (request)=>{console.log('error');return '已经处理'}
  ).then(
    (responseText)=>{console.log(responseText)},
    (request)=>{console.log('error2')}
  )
})