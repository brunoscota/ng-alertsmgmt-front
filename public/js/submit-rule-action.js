$(document).ready(function() {
    // Submit form with tag function.
    // $("#btn_tag").click(function() {
    // var name = $("#name").val();
    // var email = $("#email").val();
    // if (validation()) // Calling validation function.
    // {
    // $("form").submit(); // Form submission.
    // alert(" Name : " + name + " n Email : " + email + " n Tag : formnn Form Submitted Successfully......");
    // }
    // });    
    // // Submit form with Event Handler function.
    // $("#btn_event").click(function() {
    // var name = $("#name").val();
    // var email = $("#email").val();
    // if (validation()) // Calling validation function.
    // {
    // $("#form_id").submit(function() {
    // alert('Form is submitting....');
    // //or Do Something...
    // return true;
    // });
    // $("#form_id").submit(); // Form Submission
    // alert(" Name : " + name + " n Email : " + email + "nn Form Submitted Successfully......");
    // }
    // });
    // Submit form with class function.
    // $("#btn_class").click(function() {
    // var name = $("#name").val();
    // var email = $("#email").val();
    // if (validation()) // Calling validation function.
    // {
    // $(".form_class").submit(); // Form Submission.
    // alert(" Name : " + name + " n Email : " + email + " n Form class : " + $(".form_class").attr('class') + "nn Form is Submitted Successfully......");
    // }
    // });    
    // // Submit form with name function.
    // $("#btn-geo-send").click(function() {
    // var service = $("#input-geo-host").val();
    // var host = $("#input-geo-service").val();
    // var url = $("#input-geo-url").val();
    // if (validation()) // Calling validation function.
    // {
    // $("form[name='form_name']").submit(); // Form Submission
    // alert(" Name : " + name + " n Email : " + email + " n Form name : " + $("form[name='form_name']").attr('name') + "nn Form Submitted Successfully......");
    // }
    // });


    $("#btn-geo-send").click(function (e){
        var service = $("#input-geo-host").val();
        var host = $("#input-geo-service").val();
        var component = $("#select-geo-component option:selected").val();
        var priority = $("#select-geo-priority option:selected").val();
        e.preventDefault();
        $.ajax({
            type: "GET",
            // async: false,
            // url:"page1.php",
            // dataType: 'json',
            // cache: false,
            success: function (result) {
                    //$("#myCont").html(result);
                    alert(service+" "+host+" "+component+" "+priority);
                    $("#btn-geo-send").submit();
            },
            error: function () {
                alert("Server error. Could not possible retrieve the data: "+e.val());
            }
        });
    });



    // // Submit form with id function.
    // $("#btn-geo-send").click(function() {
    //     var service = $("#input-geo-host").val();
    //     var host = $("#input-geo-service").val();
    //     if (validation()) {

    //     }
    //     $("#geoModal").submit(); // Form submission.
    //     alert(" service : " + service + " n host : " + host + " n Form id : " + $("#geoModal").attr('id') + "nn Form Submitted Successfully......");
    //     console.log(service+' '+host);        
    // });
    
    // Name and Email validation Function.
    function validation() {
    var host = $("#input-geo-host").val();
    var service = $("input-geo-service").val();
    if (host === '' || service === '') {
    alert("Please fill all fields...!!!!!!");
    return false;
    } else if (!(url).match(urlReg)) {
    alert("Invalid Email...!!!!!!");
    return false;
    } else {
    return true;
    }
    }
    });