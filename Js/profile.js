
$(document).ready(function(){
    $(".side_menu .open").click(function(){

        $(this).toggleClass("test");
        if($(this).hasClass("test")){
            $(".side_menu").animate({
                left:0 ,
               
            },1000);
        
        $("body").animate({
            paddingLeft:"200px",
        });
    }else{
        $(".side_menu").animate({
            left:"-200px",
        },1000);
        $("body").animate({
            paddingLeft:"0px",
        });
    }

       
    });



    // $(".side_menu .Close").click(function(){
        
    //     $(".side_menu").animate({
    //         left: -200,
    //     },1000);
    // });

    $(".background_color").on("input",function(){
        $("body").css("background",$(this).val());
    });
    $(".range_text").on("input", function(){
        $("body").css("font-size",$(this).val() + "px");
    });
})

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
            text: "Division of Products Sold in 2nd Quarter"             
        },
        axisY:{
            interval: 10,
            suffix: "%"
        },
        toolTip:{
            shared: true
        },
        data:[{
            type: "stackedBar100",
            toolTipContent: "{label}<br><b>{name}:</b> {y} (#percent%)",
            showInLegend: true, 
            name: "April",
            dataPoints: [
                { y: 600, label: "Water Filter" },
                { y: 400, label: "Modern Chair" },
                { y: 120, label: "VOIP Phone" },
                { y: 250, label: "Microwave" },
                { y: 120, label: "Water Filter" },
                { y: 374, label: "Expresso Machine" },
                { y: 350, label: "Lobby Chair" }
            ]
            },
            {
                type: "stackedBar100",
                toolTipContent: "<b>{name}:</b> {y} (#percent%)",
                showInLegend: true, 
                name: "May",
                dataPoints: [
                    { y: 400, label: "Water Filter" },
                    { y: 500, label: "Modern Chair" },
                    { y: 220, label: "VOIP Phone" },
                    { y: 350, label: "Microwave" },
                    { y: 220, label: "Water Filter" },
                    { y: 474, label: "Expresso Machine" },
                    { y: 450, label: "Lobby Chair" }
                ]
            }, 
            {
                type: "stackedBar100",
                toolTipContent: "<b>{name}:</b> {y} (#percent%)",
                showInLegend: true, 
                name: "June",
                dataPoints: [
                    { y: 300, label: "Water Filter" },
                    { y: 610, label: "Modern Chair" },
                    { y: 215, label: "VOIP Phone" },
                    { y: 221, label: "Microwave" },
                    { y: 75, label: "Water Filter" },
                    { y: 310, label: "Expresso Machine" },
                    { y: 340, label: "Lobby Chair" }
                ]
        }]
    });



    var chart2 = new CanvasJS.Chart("chart2", {
        animationEnabled: true,
        title: {
            text: "Hourly Average CPU Utilization"
        },
        axisX: {
            title: "Time"
        },
        axisY: {
            title: "Percentage",
            suffix: "%",
            includeZero: true
        },
        data: [{
            type: "line",
            name: "CPU Utilization",
            connectNullData: true,
            //nullDataLineDashType: "solid",
            xValueType: "dateTime",
            xValueFormatString: "DD MMM hh:mm TT",
            yValueFormatString: "#,##0.##\"%\"",
            dataPoints: [
                { x: 1501048673000, y: 35.939 },
                { x: 1501052273000, y: 40.896 },
                { x: 1501055873000, y: 56.625 },
                { x: 1501059473000, y: 26.003 },
                { x: 1501063073000, y: 20.376 },
                { x: 1501066673000, y: 19.774 },
                { x: 1501070273000, y: 23.508 },
                { x: 1501073873000, y: 18.577 },
                { x: 1501077473000, y: 15.918 },
                { x: 1501081073000, y: null }, // Null Data
                { x: 1501084673000, y: 10.314 },
                { x: 1501088273000, y: 10.574 },
                { x: 1501091873000, y: 14.422 },
                { x: 1501095473000, y: 18.576 },
                { x: 1501099073000, y: 22.342 },
                { x: 1501102673000, y: 22.836 },
                { x: 1501106273000, y: 23.220 },
                { x: 1501109873000, y: 23.594 },
                { x: 1501113473000, y: 24.596 },
                { x: 1501117073000, y: 31.947 },
                { x: 1501120673000, y: 31.142 }
            ]
        }]
    });
    var chart3 = new CanvasJS.Chart("chart3", {
        animationEnabled: true,
        title:{
            text: "Stock Price of BMW - August"
        },
        axisX:{
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Closing Price (in USD)",
            valueFormatString: "$##0.00",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function(e) {
                    return "$" + CanvasJS.formatNumber(e.value, "##0.00");
                }
            }
        },
        data: [{
            type: "area",
            xValueFormatString: "DD MMM",
            yValueFormatString: "$##0.00",
            dataPoints: [
                { x: new Date(2016, 07, 01), y: 76.727997 },
                { x: new Date(2016, 07, 02), y: 75.459999 },
                { x: new Date(2016, 07, 03), y: 76.011002 },
                { x: new Date(2016, 07, 04), y: 75.751999 },
                { x: new Date(2016, 07, 05), y: 77.500000 },
                { x: new Date(2016, 07, 08), y: 77.436996 },
                { x: new Date(2016, 07, 09), y: 79.650002 },
                { x: new Date(2016, 07, 10), y: 79.750999 },
                { x: new Date(2016, 07, 11), y: 80.169998 },
                { x: new Date(2016, 07, 12), y: 79.570000 },
                { x: new Date(2016, 07, 15), y: 80.699997 },
                { x: new Date(2016, 07, 16), y: 79.686996 },
                { x: new Date(2016, 07, 17), y: 78.996002 },
                { x: new Date(2016, 07, 18), y: 78.899002 },
                { x: new Date(2016, 07, 19), y: 77.127998 },
                { x: new Date(2016, 07, 22), y: 76.759003 },
                { x: new Date(2016, 07, 23), y: 77.480003 },
                { x: new Date(2016, 07, 24), y: 77.623001 },
                { x: new Date(2016, 07, 25), y: 76.408997 },
                { x: new Date(2016, 07, 26), y: 76.041000 },
                { x: new Date(2016, 07, 29), y: 76.778999 },
                { x: new Date(2016, 07, 30), y: 78.654999 },
                { x: new Date(2016, 07, 31), y: 77.667000 }
            ]
        }]
     });
    var chart4 = new CanvasJS.Chart("chart4", {
                exportEnabled: true,
                animationEnabled: true,
                theme: "light2",
                title:{
                    text: "Temperature Variation - Ladakh vs Chandigarh"
                },
                axisX: {
                    title: "April 2017",
                    valueFormatString: "DD MMM"
                },
                axisY: {
                    suffix: " °C"
                },     
                toolTip: {
                    shared: true
                },
                legend: {
                    cursor: "pointer",
                    horizontalAlign: "right",
                    itemclick: toggleDataSeries
                },
                data: [{
                    type: "rangeArea",
                    showInLegend: true,
                    name: "Ladakh",
                    markerSize: 0,
                    yValueFormatString: "#0.## °C",
                    dataPoints: [
                        { x: new Date(2017, 03, 01), y: [05, 21] },
                        { x: new Date(2017, 03, 02), y: [07, 15] },
                        { x: new Date(2017, 03, 03), y: [07, 18] },
                        { x: new Date(2017, 03, 04), y: [09, 16] },
                        { x: new Date(2017, 03, 05), y: [10, 17] },
                        { x: new Date(2017, 03, 06), y: [08, 13] },
                        { x: new Date(2017, 03, 07), y: [06, 10] },
                        { x: new Date(2017, 03, 08), y: [06, 15] },
                        { x: new Date(2017, 03, 09), y: [06, 20] },
                        { x: new Date(2017, 03, 10), y: [05, 21] },
                        { x: new Date(2017, 03, 11), y: [06, 21] },
                        { x: new Date(2017, 03, 12), y: [07, 14] },
                        { x: new Date(2017, 03, 13), y: [07, 17] },
                        { x: new Date(2017, 03, 14), y: [05, 20] },
                        { x: new Date(2017, 03, 15), y: [07, 18] },
                        { x: new Date(2017, 03, 16), y: [07, 15] },
                        { x: new Date(2017, 03, 17), y: [08, 15] },
                        { x: new Date(2017, 03, 18), y: [07, 13] },
                        { x: new Date(2017, 03, 19), y: [07, 13] },
                        { x: new Date(2017, 03, 20), y: [07, 18] },
                        { x: new Date(2017, 03, 21), y: [06, 20] },
                        { x: new Date(2017, 03, 22), y: [09, 23] },
                        { x: new Date(2017, 03, 23), y: [09, 24] },
                        { x: new Date(2017, 03, 24), y: [08, 23] },
                        { x: new Date(2017, 03, 25), y: [12, 24] },
                        { x: new Date(2017, 03, 26), y: [10, 21] },
                        { x: new Date(2017, 03, 27), y: [07, 24] },
                        { x: new Date(2017, 03, 28), y: [10, 27] },
                        { x: new Date(2017, 03, 29), y: [10, 26] },
                        { x: new Date(2017, 03, 30), y: [12, 27] } 
                    ]
                },
                {
                    type: "rangeArea",
                    showInLegend: true,
                    name: "Chandigarh",
                    markerSize: 0,
                    yValueFormatString: "#0.## °C",
                    dataPoints: [
                        { x: new Date(2017, 03, 01), y: [15, 31] },
                        { x: new Date(2017, 03, 02), y: [16, 30] },
                        { x: new Date(2017, 03, 03), y: [14, 30] },
                        { x: new Date(2017, 03, 04), y: [15, 30] },
                        { x: new Date(2017, 03, 05), y: [17, 33] },
                        { x: new Date(2017, 03, 06), y: [19, 35] },
                        { x: new Date(2017, 03, 07), y: [20, 30] },
                        { x: new Date(2017, 03, 08), y: [15, 31] },
                        { x: new Date(2017, 03, 09), y: [16, 32] },
                        { x: new Date(2017, 03, 10), y: [16, 33] },
                        { x: new Date(2017, 03, 11), y: [16, 35] },
                        { x: new Date(2017, 03, 12), y: [17, 36] },
                        { x: new Date(2017, 03, 13), y: [20, 32] },
                        { x: new Date(2017, 03, 14), y: [17, 35] },
                        { x: new Date(2017, 03, 15), y: [18, 36] },
                        { x: new Date(2017, 03, 16), y: [20, 34] },
                        { x: new Date(2017, 03, 17), y: [17, 30] },
                        { x: new Date(2017, 03, 18), y: [19, 29] },
                        { x: new Date(2017, 03, 19), y: [16, 32] },
                        { x: new Date(2017, 03, 20), y: [17, 33] },
                        { x: new Date(2017, 03, 21), y: [16, 35] },
                        { x: new Date(2017, 03, 22), y: [19, 36] },
                        { x: new Date(2017, 03, 23), y: [20, 36] },
                        { x: new Date(2017, 03, 24), y: [21, 37] },
                        { x: new Date(2017, 03, 25), y: [21, 38] },
                        { x: new Date(2017, 03, 26), y: [21, 39] },
                        { x: new Date(2017, 03, 27), y: [22, 39] },
                        { x: new Date(2017, 03, 28), y: [22, 39] },
                        { x: new Date(2017, 03, 29), y: [22, 41] },
                        { x: new Date(2017, 03, 30), y: [23, 42] }
                    ]
                }]
            });
            


           


    chart.render();
    chart2.render();
    chart3.render();
     chart4.render();
    
    
}

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
    }

       
    
