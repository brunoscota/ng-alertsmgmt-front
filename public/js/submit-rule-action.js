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
            success: function () {
                alert("Rule inserted Successfully!!")
            },
            error: function (e) {
                alert("Error!")
                console.log("ERROR: ", formData);
            }
        });

        // Reset FormData after Posting
        resetData();
    }

    function resetData() {
        $("#btn-geo-reset").trigger(click);
        // $("#input-geo-service").val(""),
        // $("#input-geo-host").val(""),
        // $("#select-geo-component option:selected").val("Choose..."),
        // $("#select-geo-priority option:selected").val("Choose..."),
        // $("#select-geo-environment option:selected").val("Choose..."),
        // $("#select-geo-datacenter option:selected").val("Choose...")
    }

    // Validation Function.
    function validation(formData) {
        if (formData.host.toString() === "" 
        || formData.service.toString() === "" 
        || formData.component.toString() === "" 
        || formData.priority.toString() === "" 
        || formData.environment.toString() === "" 
        || formData.url.toString() === "" 
        || formData.datacenter.toString() === ""
        || formData.datacenter.toString() === "Choose..."
        || formData.environment.toString() === "Choose..."
        || formData.priority.toString() === "Choose..."
        || formData.component.toString() === "Choose...") {
            alert("Please fill all required fields...!!!!!!");
            return false;
        } else {
            return true;
        }
    }


});