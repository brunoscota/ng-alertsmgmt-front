$(document).ready(function () {

    // START SUBMIT GEO INSERT FORM
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
        if (geoSendValidation(formData) && geoURLValidation(formData)){
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
            success: function (result) {
                if (result[1]){
                    alert("Rule inserted Successfully!!");
                }else{
                    alert("!!! Attention: Rule Already Exists. Nothing to do here. !!!");
                }                
            },
            error: function (e) {
                alert("Error!")
                console.log("ERROR: Could not connect to database or post the data ", e);
            }
        });

        // Reset FormData after Posting
        resetData("#btn-geo-reset");
    }

    // Validation Function.
    function geoSendValidation(formData) {
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

    function geoURLValidation(formData){
        var urlReg = /((http(s)?(\:\/\/))+(www\.)?([\w\-\.\/])*(\.[a-zA-Z]{2,3}\/?))[^\s\b\n|]*[^.,;:\?\!\@\^\$ -]/g;
        if(!urlReg.test(formData.url.toString())){
            alert("URL must be typed correctly!!!!!! Exemple: https://wiki.neogrid.com");
            return false;
        }else{
            return true;
        }
    }
    // END SUBMIT GEO INSERT FORM

    // START SUBMIT GEO REMOVE FORM

    $("#btn-geo-remove").click(function (event) {
        // PREPARE FORM DATA
        var formData = {
            service: $("#input-geo-service-remove").val(),
            host: $("#input-geo-host-remove").val(),
        }
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        if (geoRemoveValidation(formData)) {
            geoRemove(formData);
        }
    });

    function geoRemove(formData) {
        // DO POST
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: window.location + "/destroydata",
            data: JSON.stringify(formData),
            dataType: 'json',
            statusCode: {
				200: function(res) {
					alert(JSON.parse(res.responseText).status);
                },
                404: function(res) {
					alert(JSON.parse(res.responseText).status);
                },
                500: function(res) {
					alert(JSON.parse(res.responseText).status);
                },                 
            },
        });

        // Reset FormData after Posting
        resetData("#btn-geo-remove-reset");
    }


    function geoRemoveValidation(formData) {
        if (formData.host.toString() === "" 
        || formData.service.toString() === "") {
            alert("Please fill all required fields...!!!!!!");
            return false;
        } else {
            return true;
        }        
    }
    // END SUBMIT GEO REMOVE FORM

    //GENERAL FUNCTIONS

    function resetData(reset_btn) {
        $(reset_btn).click();
    }
});