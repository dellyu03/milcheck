const userName = "User1";
//하루의 시간을 밀리세크로 나타냄
const oneDay = 24 * 60 * 60 * 1000;
const now = new Date ();

let goal1 = {
    name : "전역",
    startDate : "2023.02.14",
    endDate : "2024.08.13"
}

let goal2 = {
    name : "병장 진급",
    startDate : "2023.11.01",
    endDate : "2024.05.01"
}

/**알맞은 형식으로 받은 날짜 정보를 받아 [년, 월, 일, 요일] 리스트르 리턴하는 함수 */
function formatDate (input) {
    inputDate = new Date(input);
    year = inputDate.getFullYear();
    month = inputDate.getMonth();
    date = inputDate.getDate();
    day = inputDate.getDay();

    result = [year, month, date, day];
    return(result);
}

/**firstDate에서 secondDate까지 남은 일수를 리턴하는 함수 */
function calDiff(firstDate, secondDate) {
    var startDate =new Date(firstDate);
    var endDate = new Date (secondDate);
    
    var timeGap = endDate - startDate;
    var daydiff = Math.ceil(timeGap/oneDay);
    
    return (daydiff);
 }

 /**secondDate까지 얼마만큼 수행 했는지 퍼센티지로 리턴하는 함수 */
function calPercentage(firstDate, secondDate){
    var fullDay = calDiff(firstDate, secondDate);
    var doneday = calDiff(firstDate, now);
    var remainDay = calDiff(now,secondDate);
    
    var percentage = doneday/fullDay* 100;
    var percentage = percentage.toFixed(1);

    return(percentage);
    
}


 /**goal까지 전체 일수, 남은 일수, 지금까지 달성한 퍼센티지를 리스트로 리턴하는 함수 */
function goalToDay(goal) {
    var goalStart = goal.startDate;
    var goalEnd = goal.endDate;

    var fullDay = calDiff(goalStart, goalEnd);
    var remainDay = calDiff(now, goalEnd);
    var percentage = calPercentage(goalStart, goalEnd);
    

    result = [fullDay, remainDay, percentage]
    return (result);
}

//아래부터는 HTML 조작하는 코드
const domwelcome = document.getElementById("welcomeMsg")
const dompercentage = document.getElementById("percentage")
const domprogress = document.getElementById("percentage_progress");
const domgoalName = document.getElementById("goalName");
const domgoalDay = document.getElementById("goalDay");
const domuserName = document.getElementById("userName");
var selectedGoal = goal1;


/** welcome 메시지 작성 코드 */
function crWelcomeMsg (goal) {
    msg = `${userName}님 "${goal.name}"까지 ${goalToDay(goal)[1]}일 남았습니다!`
    return (msg);
}

domprogress.value = goalToDay(selectedGoal)[2]
domwelcome.innerHTML = crWelcomeMsg(selectedGoal);
dompercentage.innerHTML = `${goalToDay(selectedGoal)[2]}%`;
domgoalName.innerHTML = selectedGoal.name;
domgoalDay.innerHTML = selectedGoal.endDate;
domuserName.innerHTML = userName;


