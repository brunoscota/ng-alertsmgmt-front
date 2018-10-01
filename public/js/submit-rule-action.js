$(document).ready(function () {

    // SUBMIT FORM
    $("#btn-geo-send").click(function (event) {
        // PREPARE FORM DATA
        var formData = {
            service: $("#input-geo-service").val(),
            host: $("#input-geo-host").val(),
            url: $("#input-geo-url").val(),
            component: $("#select-geo-component option:selected").val(),
            environment: $("#select-geo-environment option:selected").val(),
            priority: $("#select-geo-priority option:selected").val(),
            datacenter: $("#select-geo-datacenter option:selected").val()
        }
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        if (validation(formData)) {
            geoPost(formData);
        }
    });

    function geoPost(formData) {

        // DO POST
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: window.location + "/insertdata",
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (data) {
                // $("#postResultDiv").html("<p>" +
                //     "Post Successfully! <br>" +
                //     "--->" + JSON.stringify(data) + "</p>");
            },
            error: function (e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }
        });

        // Reset FormData after Posting
        resetData();
    }

    function resetData() {
        $("#input-geo-service").val(""),
            $("#input-geo-host").val(""),
            $("#select-geo-component option:selected").val(""),
            $("#select-geo-priority option:selected").val("")
    }

    // Name and Email validation Function.
    function validation(formData) {
        if (formData.host.toString() === "" || formData.service.toString() === "") {
            alert("Please fill all required fields...!!!!!!" + formData.host.toString() + " " + formData.service.toString());
            return false;
        } else {
            return true;
        }
    }




})




// $("#btn-geo-send").click(function (e) {

//     e.preventDefault();
//     $.ajax({
//         type: "GET",
//         //data: JSON.stringify(data),
//         //contentType: 'application/json',
//         //url: 'http://localhost:3000/catalog/insertdata',
//         success: function (result) {
//             alert(service + " " + host + " " + component + " " + priority);
//             $("#btn-geo-send").submit();
//         },
//         error: function () {
//             alert("Server error. Could not possible retrieve the data: " + e.val());
//         }
//     });
// });