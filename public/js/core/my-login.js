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
		doLogin(formData)
	});

	function doLogin(formData) {
		// DO POST
		$.ajax({
			type: "POST",
			contentType: "application/json",
			url: window.location + "/",
			data: JSON.stringify(formData),
			dataType: 'json',
			success: function (result) {},
			error: function (e) {
				alert("Invalid Credentials")
			}
		});
	}

});