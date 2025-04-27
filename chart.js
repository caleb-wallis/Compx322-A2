/**
 * Name: Caleb Wallis
 * Student ID: 1637640
 * 
 * Handles creating and displaying line charts for one or two commodity data series using Chart.js.
 * Includes functionality to clear and reset charts.
 */


// Global chart variable
var myChart;

// Commodity data holders
var commodity1 = { name: "", interval: "", values: [], dates: [] };
var commodity2 = { name: "", interval: "", values: [], dates: [] };

// Resets commodity data
function resetCommodities() {
    commodity1 = { name: "", interval: "", values: [], dates: [] };
    commodity2 = { name: "", interval: "", values: [], dates: [] };
}

// Extracts data into a commodity object
function getData(details, commodity) {
    commodity.name = details.name;
    commodity.interval = details.interval;
    commodity.values = [];
    commodity.dates = [];
    details.data.forEach(item => {
        commodity.values.push(item.value);
        commodity.dates.push(item.date);
    });
}

// Displays a single line chart
function showChart(details) {
    if (myChart) myChart.destroy();
    getData(details, commodity1);

    const chartData = {
        labels: commodity1.dates,
        datasets: [{
            label: details.name + " - " + details.interval,
            data: commodity1.values,
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
            fill: false
        }]
    };

    const config = {
        type: "line",
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    };

    myChart = new Chart(document.getElementById('myChart'), config);
}

// Displays a two-line chart if valid
function showMultiChart(details) {
    if (!commodity1.values.length || commodity2.values.length || details.name === commodity1.name) {
        return;
    }

    if (myChart) myChart.destroy();
    getData(details, commodity2);

    const chartData = {
        labels: commodity1.dates,
        datasets: [
            {
                label: commodity1.name + " - " + commodity1.interval,
                data: commodity1.values,
                borderColor: "rgb(255, 99, 132)",
                borderWidth: 2,
                fill: false
            },
            {
                label: commodity2.name + " - " + commodity2.interval,
                data: commodity2.values,
                borderColor: "rgb(0, 99, 132)",
                borderWidth: 2,
                fill: false
            }
        ]
    };

    const config = {
        type: "line",
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    };

    myChart = new Chart(document.getElementById('myChart'), config);
}

// Clears the graph and resets data
function clearGraph() {
    if (myChart) {
        myChart.destroy();
        resetCommodities();
    }
}