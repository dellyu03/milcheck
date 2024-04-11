const userName = "유승환";
const dday = new Date('2024-08-13');
const fullday = 547;

const oneDay = 24 * 60 * 60 * 1000;
const goal = "전역";
const statusDate = document.getElementById("pointDay");
const welcomeMsg = document.getElementById("welcomeMsg");
const statusPercentage = document.getElementById("percentage");
const statusProgress = document.getElementById("percentage_progress");


var left = calDDay (dday);
var goalDateList = dateFormat(dday);
const doneday = 547-left;
var goalPercentage = doneday/fullday * 100;

var welcomeString = `${userName}님! ${goal}까지 ${left}일 남았습니다!`
var goalDate = `${goalDateList[0]}.${goalDateList[1]}.${goalDateList[2]}`

console.log (goalPercentage)



/** Date 데이터를 [년, 월, 일, 요일]로 리턴 */
function dateFormat(date) {
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var formatdate = date.getDate();
    var day = date.getDay();

    //요일을 문자로 나타냄
    const weekday = ["일", "월", "화", "수", "목", "금", "토"]
    var newdate = weekday[day];

    dateList = [year, month, formatdate, newdate]
    return (dateList)
}

/** 현재 시간에서 D-Day까지 남은 일수를 계산 */
function calDDay(dday) {
   const now = new Date();
   var timeGap = dday - now;
   var remainTime = Math.ceil(timeGap/oneDay);
   return (remainTime);
}


//웰컴 메시지를 출력
welcomeMsg.innerHTML = welcomeString

//목표일을 스테이터스바에 표시
statusDate.innerHTML = goalDate


