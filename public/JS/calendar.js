//현재 달의 날짜를 구하는 함수
function getCurDay () {
    var curDay = new Date();
    return curDay;
};

//

//현재 달의 마지막날이 몇일인지 구하는 함수
function getLastDay (year, mon) {
    date = new Date(`${year} ${mon}`);
    date.setDate(0);
    lastDay = date.getDate();
    return lastDay;
};

//전달과 다음달을 구하는 함수
function getNearMon () {
    new Date
}


//달력 생성 함수
function createCalendar() {

}

//달력 제목에 접근해서 날짜로 변화하는 함수
function getCalendarTitle() {
    const calendarTitle = document.getElementById("calendar__title");
    
    //split strings by space
    data = calendarTitle.innerText;
    data = data.split(' ');
    
    return data;
}

console.log(getLastDay(2024, 05))