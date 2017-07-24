google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Средний рейтинг', 'С'],
        ['Average rating',     25],
        ['Your rating', 31],
    ]);

    var options = {
            title: 'Progress',
        pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
    drawChart2();
}

function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Средний рейтинг', 'С'],
        ['Lust',     6],
        ['Wrath', 5],
        ['Envy', 3],
        ['Pride', 4],
        ['Sloth', 4],
        ['Greed', 3],
        ['Gluttony', 6]
    ]);

    var options = {
        title: "Today's sins" ,
        pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
    chart.draw(data, options);
}