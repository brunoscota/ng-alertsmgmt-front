'use strict';

$(function () {

	$("#btn-login-submit").click(function (event) {
		// PREPARE FORM DATA
		var formData = {
			username: $("#username").val(),
			password: $("#password").val(),
		}
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		if(document.getElementById("updatecheck1").checked){
			doLogin(formData)
		}else{
			alert("You must agree with terms and conditions.")
		}
	});

	function doLogin(formData) {
		// DO POST
		$.ajax({
			type: "POST",
			contentType: "application/json",
			url: window.location + "/",
			data: JSON.stringify(formData),
			dataType: 'json',
			statusCode: {
				200: function(res) {
					window.location.href = "/"
				},
				500: function(res){
					alert( "An error occurred while contacting the AD. Please try again later.");
				},
				401: function(res){
					alert( "Your account is not allowed to log in.");
				}
				
			  }
		}).done(function () {
			console.log("http request succeeded");
			alert("login success");
		});
}

});