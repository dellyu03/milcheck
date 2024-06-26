const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//static 파일안에 든 정적 파일을 가져오는 코드
app.use('/', express.static('public'));

//test 라우터 public 파일 가져오는 코드
app.use('/test', express.static('public'));




//HTML은 잘 전달 되지만 CSS는 전달이 안됨 static 정적파일 끌어오는 걸로 해결 됨
app.get('/', function(req, res){
  const filePath = path.join(__dirname, '/HTML/calendar.html')
  res.sendFile(filePath);
});

//test 라우터
app.get('/test', function(req, res){
  const filePath = path.join(__dirname, '/HTML/calendar.html')
  res.sendFile(filePath);
});

//notification 라우터
app.get('/notifications', function(req, res){
  const filePath = path.join(__dirname, '/HTML/notifications.html')
  res.sendFile(filePath);
});

//메세지 라우터
app.get('/message', function(req, res){
  const filePath = path.join(__dirname, '/HTML/msg.html')
  res.sendFile(filePath);
});


//task 라우터
app.get('/tasks', function(req, res){
  const filePath = path.join(__dirname, '/HTML/tasks.html')
  res.sendFile(filePath);
});


