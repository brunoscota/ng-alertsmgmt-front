// var dataSet = [
//     ["3PAR_SP2", "CHECK_DISK_FAILURE", "GEO", "Blocante", "Produção", "BR DC Equinix SP2", "https://www.safaribooksonline.com/videos/node-js-in-motion/10000MNLV201720/10000MNLV201720-EvansU4M5"],
//     ["3PAR_SP2", "3PAR_POWER_SUPPLY", "GEO", "Blocante", "Produção", "BR DC Equinix SP2", "https://www.safaribooksonline.com/videos/node-js-in-motion/10000MNLV201720/10000MNLV201720-EvansU4M5"],
//     ["CACATUA", "LOAD_AVERAGE", "GEO", "Blocante", "Produção", "BR DC Equinix SP2", "https://www.safaribooksonline.com/videos/node-js-in-motion/10000MNLV201720/10000MNLV201720-EvansU4M5"],
//     ["CONNECTIONS", "VPN_RJ2", "GEO", "Blocante", "Alta", "BR DC Equinix SP2", "https://www.safaribooksonline.com/videos/node-js-in-motion/10000MNLV201720/10000MNLV201720-EvansU4M5"]
// ];


$(document).ready(function () {


    $.getJSON('/catalog/getdata', (data) => {
        console.log(data);

        $('#example').DataTable({
            data: data,
            columns: [{
                    title: "Host"
                },
                {
                    title: "Service"
                },
                {
                    title: "Component"
                },
                {
                    title: "Priority"
                },
                {
                    title: "Environment"
                },
                {
                    title: "DataCenter"
                },
                {
                    title: "URL"
                }                     
            ]
        });
    });

    // getData();
    
    // function getData(){
    //     $.ajax({
    //         type: "GET",
    //         contentType: "application/json",
    //         url: window.location + "/getdata",
    //         data: JSON.stringify(result),
    //         dataType: 'json',
    //         success: function (result) {
            //     let dataSet = result;
            //     $('#example').DataTable({
            //         data: dataSet,
            //         columns: [{
            //                 title: "Host"
            //             },
            //             {
            //                 title: "Service"
            //             },
            //             {
            //                 title: "Component"
            //             },
            //             {
            //                 title: "Priority"
            //             },
            //             {
            //                 title: "Environment"
            //             },
            //             {
            //                 title: "DataCenter"
            //             },
            //             {
            //                 title: "URL"
            //             }                     
            //         ]
            //     });
            // },
    //         error: function (e) {
    //             alert("Error!")
    //             console.log("ERROR: ", e);
    //         }
    //     })
    // }
});