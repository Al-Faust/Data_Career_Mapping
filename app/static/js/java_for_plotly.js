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
                {target: 'y', func: 'count'}
            ]
        }]
    }
    var data2 = [trace2];

    var layout2 = {
        title: "Number of Jobs per State",
        xaxis: { title: "State" },
        // yaxis: { title: 'Number of Jobs' }
    };



Plotly.newPlot("plot", data, layout);
Plotly.newPlot("plott", data2, layout2);
})
