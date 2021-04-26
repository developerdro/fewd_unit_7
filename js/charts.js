//Prints Month, Day, Weekday, Hour ex: Apr 07, 7 AM
//0 or empty = current hour
//param1 = hours back from current hour 
function monthDayHour(param1) {
    const date = new Date();
    let hour = date.getHours() - param1;
    date.setHours(hour);
    const format = new Intl.DateTimeFormat('default', {
        month: 'short',
        day: '2-digit',
        hour: 'numeric',
    });
    return format.format(date);
}


//Prints Weekday, Month, Day, Year ex: Thur, Mar 18, 2021
//0 or empty = current month 
//param1 = months back from current month
function weekdayMonthDayYear(param1) {
    const date = new Date();
    let day = date.getDate() - param1;
    date.setDate(day);
    const format = new Intl.DateTimeFormat('default', {
        weekday:'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    });
    return format.format(date);
}


//Prints Narrow Weekday ex: Monday = M 
//0 or empty = current day
//param1 = days back from current day
function narrowWeekday(param1) {
    const date = new Date();
    let day = date.getDate() - param1;
    date.setDate(day);
    const format = new Intl.DateTimeFormat('default', {
        weekday: 'narrow',
    })
    return format.format(date);
}


//Prints Month then Year ex: Apr 2021
//0 or empty = current month 
//param1 = months back from current month
function monthYear(param1) {
    const date = new Date();
    let month = date.getMonth() - param1;
    date.setMonth(month);
    const format = new Intl.DateTimeFormat('default', {
        month: 'short',
        year: 'numeric',
    });
    return format.format(date);
}


//Chart Configuration 
const chartOptions = {
    legend: {display: false,}, 
    maintainAspectRatio: false,
    responsive: true,
};


//Hourly Chart
const trafficHourly = document.getElementById('trafficHourly');
const hourlyVisitors = [1951, 1226, 1414, 2501, 895, 432, 517, 735, 1441, 1265, 964, 483,];
const hourlyTraffic = [ monthDayHour(22), monthDayHour(20), monthDayHour(18), monthDayHour(16), monthDayHour(14), monthDayHour(12), monthDayHour(10), monthDayHour(8), monthDayHour(6), monthDayHour(4), monthDayHour(2), monthDayHour(0),];
const hourlyChart = new Chart(trafficHourly, {
    type: 'line',
    data: {
        labels: hourlyTraffic,
        datasets: [{
            label: 'Hourly Traffic', 
            data: hourlyVisitors,
            backgroundColor: "rgba(0, 152, 119, 0.2)", 
            borderColor: "rgba(0, 152, 119, 1)",
            borderWidth: 1,
            fill: true,
            lineTension: 0.3,
        }]
    },
    options: chartOptions, 
});


//Daily Chart
const trafficDaily = document.getElementById('trafficDaily');
const dailyVisitors = [12612, 14109, 14436, 11425, 9331, 8299, 10401,];
const dailyTraffic = [ weekdayMonthDayYear(6), weekdayMonthDayYear(5), weekdayMonthDayYear(4), weekdayMonthDayYear(3), weekdayMonthDayYear(2), weekdayMonthDayYear(1), weekdayMonthDayYear(0),];
const dailyChart = new Chart(trafficDaily, {
    type: 'line',
    data: {
        labels: dailyTraffic,
        datasets: [{
            label: 'Daily Traffic', 
            data: dailyVisitors,
            backgroundColor: "rgba(0, 152, 119, 0.2)", 
            borderColor: "rgba(0, 152, 119, 1)",
            borderWidth: 1,
            fill: true,
            lineTension: 0.3,
        }]
    },
    options: chartOptions,
});

//Weekly Chart
const trafficWeekly = document.getElementById('trafficWeekly');
const weeklyVisitors = [26157, 31633, 32714, 34511, 28514, 28275, 29997, 33576,];
const weeklyTraffic = [ weekdayMonthDayYear(49), weekdayMonthDayYear(42), weekdayMonthDayYear(35), weekdayMonthDayYear(28), weekdayMonthDayYear(21), weekdayMonthDayYear(14), weekdayMonthDayYear(7), weekdayMonthDayYear(0),];
const weeklyChart = new Chart(trafficWeekly, {
    type: 'line',
    data: {
        labels: weeklyTraffic,
        datasets: [{
            label: 'Weekly Traffic', 
            data: weeklyVisitors,
            backgroundColor: "rgba(0, 152, 119, 0.2)", 
            borderColor: "rgba(0, 152, 119, 1)",
            borderWidth: 1,
            fill: true,
            lineTension: 0.3,
        }]
    },
    options: chartOptions,
});


//Monthly Chart 
const trafficMonthly = document.getElementById('trafficMonthly');
const monthlyVisitors = [188299, 214609, 218411, 208959, 198604, 196525, 177562, 189029, 222789, 222283, 189820, 205775,];
const monthlyTraffic = [ monthYear(11), monthYear(10), monthYear(9), monthYear(8), monthYear(7), monthYear(6), monthYear(5), monthYear(4), monthYear(3), monthYear(2), monthYear(1), monthYear(0), ];
const monthlyChart = new Chart(trafficMonthly, {
    type: 'line',
    data: {
        labels: monthlyTraffic,
        datasets: [{
            label: 'Monthly Traffic', 
            data: monthlyVisitors,
            backgroundColor: "rgba(0, 152, 119, 0.2)", 
            borderColor: "rgba(0, 152, 119, 1)",
            borderWidth: 1,
            fill: true,
            lineTension: 0.3,
        }]
    },
    options: chartOptions, 
});


//Daily Bar Chart
const dailyBarChart = document.getElementById('dailyBarChart');
const dailyTrafficBarChart = [ narrowWeekday(6), narrowWeekday(5), narrowWeekday(4), narrowWeekday(3), narrowWeekday(2), narrowWeekday(1), narrowWeekday(0),]
const dailyChartBarChart = new Chart(dailyBarChart, {
    type: 'bar',
    data: {
        labels: dailyTrafficBarChart,
        datasets: [{
            label: 'Daily Traffic', 
            data: dailyVisitors,
            backgroundColor: "rgba(0, 152, 119, 1)", 
            borderColor: "rgba(0, 152, 119, 1)",
            borderWidth: 1,
            fill: true,
            lineTension: 0.3,
        }]
    },
    options: { 
        legend: {
            display: false,
        },
        maintainAspectRatio: true,
        responsive: true,
    }, 
});


//Mobile Users Chart 
const traffictest = document.getElementById('dailyMobileUsers');
const testVisitors = [188299, 214609, 218411, 208959, 198604, 196525, 177562, 189029, 222789, 222283, 189820, 205775,];
const testTraffic = [ monthYear(11), monthYear(10), monthYear(9), monthYear(8), monthYear(7), monthYear(6), monthYear(5), monthYear(4), monthYear(3), monthYear(2), monthYear(1), monthYear(0), ];
const testChart = new Chart(traffictest, {
    type: 'doughnut',
    data: {
        labels: ['Desktop', 'Tablet', 'Phones'],
        datasets: [{
            label: 'Mobile Users', 
            data: [2080, 1040, 7281],
            backgroundColor: [
                'rgb(29, 161, 242)',
                "rgb(0, 152, 119)", 
                'rgb(106, 13, 173)',
                ], 
            borderColor: [
                'rgb(29, 161, 242)',
                "rgb(0, 152, 119)", 
                'rgb(106, 13, 173)',
              ],

        }]
    },
    options: { 
        legend: {
            position: 'right',
        },
        maintainAspectRatio: true,
        responsive: true,
    }, 
});


//Main Chart Menu 
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        });
        tabs.forEach(tab => {
            tab.classList.remove('active')
        });
        target.classList.add('active');
        tab.classList.add('active');
    })
});