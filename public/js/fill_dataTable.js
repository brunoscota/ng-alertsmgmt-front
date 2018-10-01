$(document).ready(function () {

    $.getJSON('/catalog/getdata', (data) => {
        // var items = [];
        // $.each( data, function( key, val ) {
        //     items.push(key + "'>" + val + "</li>" );
        //   });
        $('#geoTable').DataTable({
            data: data,
            columns: [{
                    title: "Host",
                    data: "host"
                },
                {
                    title: "Service",
                    data: "service"
                },
                {
                    title: "Component",
                    data: "component"
                },
                {
                    title: "Priority",
                    data: "priority"
                },
                {
                    title: "Environment",
                    data: "environment"
                },
                {
                    title: "DataCenter",
                    data: "datacenter"
                },
                {
                    title: "URL",
                    data: "url"
                }
            ]
        });
    })
});