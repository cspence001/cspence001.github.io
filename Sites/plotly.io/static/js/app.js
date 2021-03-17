//read in .json
function buildPlot(sampleId) {
    d3.json("samples.json").then((data) =>{

        var samples = data.samples;
        //console.log(samples); 
        //filter sample id 
        var sample_ids= samples.filter(key=> key.id == sampleId);
        //console.log(sample_ids);
        var results = sample_ids[0];
        //console.log(results);

        //bacteria sample value
        var sample_values = results.sample_values;
        //console.log(sample_values);
        // bacteria sample id #
        var otu_ids = results.otu_ids;
        //console.log(otu_ids);
        // bacteria name 
        var otu_labels = results.otu_labels;
        //console.log(otu_labels);

        //bar
        yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

        var bar_chart = [
            {
                y: yticks,
                x: sample_values.slice(0, 10).reverse(),
                text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h"
            }
        ];

        var bar_layout = {
            title: "Top 10 OTU's",
            xaxis: {title: "OTU Sample Value"},
            yaxis: {title: "OTU ID"},
            margin: {t:30, l:100}
        };

        Plotly.newPlot("bar", bar_chart, bar_layout);

        //bubble
        var bubble_data = [
            {
                x: otu_ids,
                y: sample_values, 
                text: otu_labels,
                mode: "markers",
                marker: {
                    color: otu_ids, 
                    size: sample_values,
                }
            }
        ]
        var bubble_layout = {
            xaxis: {title: "OTU ID"},
            //https://plotly.com/javascript/hover-text-and-formatting/
            hovermode: "closest",
        };
        Plotly.newPlot("bubble", bubble_data, bubble_layout);

        //metadata info
        var metadata = data.metadata;
        var metaFilter = metadata.filter(meta => meta.id ==sampleId)
        var metaResults = metaFilter[0];
        var metadata_info = d3.select("#sample-metadata");
        //refresh upon selection
        metadata_info.html("");
        //entries for each key, value pair of chosen id //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        Object.entries(metaResults).forEach(([keys, value]) =>{
            metadata_info.append("h6").text(`${keys.toUpperCase()} : ${value}`);


        //gauge chart //
        var gauge_data = [
            {
                domain: {
                    x: [0,1],
                    y: [0,1]
                },
                value: metaResults.wfreq,
                title: {text: "Belly Button Washing Frequency"},
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    // text: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9'],
                    axis: {range: [0, 9]},
                    steps: [
                        {range: [0,1], color: "#F8F3EC"},
                        {range: [1,2], color: "#EAEBE0"},
                        {range: [2,3], color: "#DBE4D3"},
                        {range: [3,4], color: "#CDDCC7"},
                        {range: [4,5], color: "#BED4BA"},
                        {range: [5,6], color: "#B0CCAE"},
                        {range: [6,7], color: "#A1C5A1"},
                        {range: [7,8], color: "#93BD95"},
                        {range: [8,9], color: "#84B588"},
                        ]}
            }
        ];
        var gauge_layout = {
            width:600,
            height: 500,
            margin: { t: 0, b: 0}
        };
        Plotly.newPlot("gauge", gauge_data, gauge_layout);

    });
});
};

// (alt) function for metadata 
// function buildMetadata(metaId) {
//     d3.json("samples.json").then((data) => {
//     var metadata = data.metadata;
//     var metaFilter = metadata.filter(meta => meta.id ==metaId)
//     var metaResults = metaFilter[0];
//     var metadata_info = d3.select("#sample-metadata");
//     metadata_info.html("");
//     Object.entries(metaResults).forEach(([keys, value]) =>{
//         metadata_info.append("h6").text(`${keys} : ${value}`);
//         });
//     });
// }

function optionChanged(id) {
    buildPlot(id);
    // buildMetadata(id);
}

function init() {
    var dropdown = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
        console.log(data)
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value", name);
        });
        buildPlot(data.names[0]);

    });
}
init();