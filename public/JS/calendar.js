const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

// //현재 달의 날짜를 구하는 함수
// function getCurDay () {
//     var curDay = new Date();
//     return curDay;
// };


//현재 달의 마지막날이 몇일인지구하는 함수
function getLastDate (year, mon) {
    date = new Date(`${year} ${mon}`);
    date.setDate(0);
    lastDay = date.getDate();
    return lastDay;
};

//1일이 몇요일지 구하는 함수
function getFirstDay (year, mon) {
    day = new Date (`${year} ${mon}`)
    day.setDate(1);
    dayFirst = day.getDay()
    result = weekDays[dayFirst]
    return result;
}

//달력 제목에 접근해서 날짜로 변환하는 함수
function getCalendarTitle() {
    const calendarTitle = document.getElementById("calendar__title");
    
    //split strings by space
    data = calendarTitle.innerText;
    data = data.split(' ');
    
    return data;
}

function init() {
    calendarTitle = getCalendarTitle()
    mon = calendarTitle[0]
    year = calendarTitle[1]
    firstDay = getFirstDay(year, mon)
    lastDate = getLastDate(year, mon)
    result = {"first-day" : firstDay, "last-date" : lastDate}
    return result; 
}


console.log(init())          