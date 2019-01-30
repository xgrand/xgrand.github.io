google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawUsers);
google.charts.setOnLoadCallback(drawPieGender);
google.charts.setOnLoadCallback(drawPieAge);
google.charts.setOnLoadCallback(drawLine);
google.charts.setOnLoadCallback(drawBasic);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Месяц', 'Оборот', 'Транзакции'],
        ['Июнь',  2000000, 250033],
        ['Июль',  320000, 212033],
        ['Август',  3315612, 641433],
        ['Сентябрь',  913545, 353631],
        ['Октябрь',  1356762, 123334]
    ]);

    var options = {
        vAxis: {title: 'Транзакции'},
        hAxis: {title: 'Месяцы'},
        seriesType: 'bars',
        series: {1: {type: 'line', lineWidth: 3}},
        width: 600,
        height: 400,
        pointSize: 10,
        legend: 'none'
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart1'));
    chart.draw(data, options);
}


function drawUsers() {

    var data = google.visualization.arrayToDataTable([
        ['Месяц', 'Пользователи', 'Уникальные пользователи'],
        ['Июнь',  2000000, 250033],
        ['Июль',  320000, 212033],
        ['Август',  3315612, 641433],
        ['Сентябрь',  913545, 353631],
        ['Октябрь',  1356762, 123334]
    ]);

    var options = {
        vAxis: {title: 'Пользователи'},
        hAxis: {title: 'Месяцы'},
        seriesType: 'bars',
        bar: { groupWidth: '75%' },
        width: 600,
        height: 400,
        pointSize: 10,
        legend: 'none',
        isStacked: true
    };

    var chart = new google.visualization.ComboChart(document.getElementById('users'));
    chart.draw(data, options);
}

function drawPieGender() {
    var data = google.visualization.arrayToDataTable([
        ['Пол', 'Количество пользователей'],
        ['М',     11341],
        ['Ж',      13562]
    ]);

    var options = {
        pieHole: 0.4,
        width: '100%',
        height: 400,
        legend: 'none',
        chartArea: {width: 400, height: 300}
    };

    var chart = new google.visualization.PieChart(document.getElementById('gender'));
    chart.draw(data, options);
}

function drawPieAge() {
    var data = google.visualization.arrayToDataTable([
        ['Пол', 'Количество пользователей'],
        ['18-20',     113411],
        ['23-25',      135562],
        ['25-30',     145341],
        ['30-35',      136562],
        ['40-45',      13562],
        ['45-50',      6562]
    ]);

    var options = {
        chart: {
            title: 'Показатели среднего чека',
            subtitle: 'За расчетный период'
        },
        pieHole: 0.4,
        width: '100%',
        height: 400,
        legend: 'none',
        chartArea: {width: 400, height: 300}
    };

    var chart = new google.visualization.PieChart(document.getElementById('age'));
    chart.draw(data, options);
}


function drawLine() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'День');
    data.addColumn('number', 'Абсолютный средний чек');
    data.addColumn('number', 'Медиана');

    data.addRows([
        [1,  37.8, 80.8],
        [2,  30.9, 69.5],
        [3,  25.4,   57],
        [4,  11.7, 18.8],
        [5,  11.9, 17.6],
        [6,   8.8, 13.6],
        [7,   7.6, 12.3],
        [8,  12.3, 14.2],
        [9,  16.9, 19.9],
        [10, 12.8, 16.9],
        [11,  5.3,  7.9],
        [12,  6.6,  8.4],
        [13,  4.8,  6.3],
        [14,  4.2,  6.2]
    ]);

    var options = {
        chart: {
            title: 'Показатели среднего чека',
            subtitle: 'За расчетный период'
        },
        width: 600,
        height: 400,
        explorer: {axis: 'horizontal'}
    };

    var chart = new google.charts.Line(document.getElementById('linechart'));
    chart.draw(data, google.charts.Line.convertOptions(options));
}

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Заведение', '% посещений', { role: 'annotation' }],
        ['DodoPizza', 30, 'DodoPizza'],
        ['Rumi', 25, 'Rumi'],
        ['Yuframe Burger', 20, "Yuframe Burger"],
        ['Angel-in-us', 20, "Angel-in-us"],
        ['Другие', 5, "Другие"]
    ]);

    var options = {
        explorer: {
            actions: ['dragToPan', 'rightClickToReset']
        },
        height: 400,
        width: 600,
        legend: "none"
    };

    var chart = new google.visualization.BarChart(document.getElementById('others'));

    chart.draw(data, options);
}