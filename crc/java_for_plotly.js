Plotly.d3.csv("all_jobs.csv", function (error, rows) {
    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; })
    }

    var trace = {
        x: unpack(rows, 'Job_Title'),
        y: unpack(rows, 'Company_Name'),
        type: "bar",
        orientation: 'h',
        transforms: [{
            type: 'groupby',
            groups: 'Company_Name'
        }]

    }

    var data = [trace];

    var layout = {
        title: "Number of Positions by Companies (Top 20)",
        xaxis: { title: "Count" },
        yaxis: { title: "Companies" }
    };

    var trace2 = {
        x: unpack(rows, 'State'),
        y: unpack(rows, 'Job_Title'),
        type: 'bar',
        transforms: [{
            type: 'groupby',
            groups: 'State'
        }]
    }
    var data2 = [trace2];

    var layout2 = {
        title: "Number of Jobs per State",
        xaxis: { title: "State" },
        yaxis: { title: 'Number of Jobs' }
    };



Plotly.newPlot("plot", data, layout);
Plotly.newPlot("plott", data2, layout2);
})

// var subject = ['Moe', 'Larry', 'Curly', 'Moe', 'Larry', 'Curly', 'Moe', 'Larry', 'Curly', 'Moe', 'Larry', 'Curly']
// var score = [1, 6, 2, 8, 2, 9, 4, 5, 1, 5, 2, 8]

// var data = [{
//     type: 'bar',
//     x: subject,
//     y: score,
//     mode: 'markers',
//     transforms: [{
//         type: 'groupby',
//         groups: subject,
//         styles: [
//             { target: 'Moe', value: { marker: { color: 'blue' } } },
//             { target: 'Larry', value: { marker: { color: 'red' } } },
//             { target: 'Curly', value: { marker: { color: 'black' } } }
//         ]
//     }]
// }]
