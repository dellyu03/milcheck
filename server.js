const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//static 파일안에 든 정적 파일을 가져오는 코드
app.use('/', express.static('public'));


//HTML은 잘 전달 되지만 CSS는 전달이 안됨
app.get('/', function(req, res){
  const filePath = path.join(__dirname, '/HTML/index.html')
  res.sendFile(filePath);
});


