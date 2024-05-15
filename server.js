const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//static 파일안에 든 정적 파일을 가져오는 코드
app.use('/', express.static('JS'),express.static('public'));


//HTML은 잘 전달 되지만 CSS는 전달이 안됨 static 정적파일 끌어오는 걸로 해결 됨
app.get('/', function(req, res){
  const filePath = path.join(__dirname, '/HTML/index.html')
  res.sendFile(filePath);
});

//test 라우터
app.get('/test', function(req, res){
  const filePath = path.join(__dirname, '/HTML/calendar.html')
  res.sendFile(filePath);
});


