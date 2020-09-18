Plotly.d3.csv("Output/all_jobs.csv", function (error, rows) {
    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; })
    }

    var trace = {
        x: unpack(rows, 'Job_Title'),
        y: unpack(rows, 'Company_Name'),
        type: "scatter",
        orientation: 'h',
        marker: {
            size: unpack(rows, 'Job_Title'),
            sizemode: 'area',
            sizeref: 2000
        },

        transforms: [{
            type: 'groupby',
            groups: unpack(rows, 'Company_Name')
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
        marker: {
            size: unpack(rows, 'Job_Title'),
            sizemode: 'area',
            sizeref: 2000
        },
        transforms: [{
            type: 'groupby',
            groups: unpack(rows, 'State')
        }, {
            type: 'aggregate',
            groups: unpack(rows, 'State'),
            aggregations: [
                { target: 'y', func: 'count' }
            ]
        }]
    }
    var data2 = [trace2];

    var layout2 = {
        title: "Number of Jobs per State",
        xaxis: { title: "State" },
        // yaxis: { title: 'Number of Jobs' }
    };
    var trace3 = {
        x: unpack(rows, 'Industry'),
        y: unpack(rows, 'Job_Title'),
        mode: 'markers',
        type: 'scatter',
        // orientation: 'h',
        marker: {
            color: 'rgb(142, 124, 195)',
            size: 12,
            // size: unpack(rows, 'Industry'),
            sizemode: 'area',
            sizeref: 2000
        },
        transforms: [{
            type: 'groupby',
            groups: unpack(rows, 'Industry'),
        }, {
            type: 'aggregate',
            groups: unpack(rows, 'Industry'),
            aggregations: [
                { target: 'x', func: 'count' }
            ]
        }]
    }
    var data3 = [trace3];

    var layout3 = {
        title: "The Industries",
        xaxis: { title: 'Industries' },
    };


    Plotly.newPlot("plot", data, layout);
    Plotly.newPlot("plott", data2, layout2);
    Plotly.newPlot("plot3", data3, layout3);
})
