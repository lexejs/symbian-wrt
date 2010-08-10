// Please don't remove line below - it is used for code-completion for Visual Studio
/// <reference path="preview\vsdoc.js" />

function init() {

	menu.append(new MenuItem("Sample Item", 0));
	menu.append(new MenuItem("Sample Item 2", 1));

	try {
		var sensor = nokia.device.load("sensors");
		sensor.startChannel(onOrientationNotification, "Orientation", errorCb);
		alert("sensor.startChannel");
	}
	catch (e) { console.log(e); }
}

// Orientation event callback
function onOrientationNotification(data) {
	// data.deviceOrientation can be DisplayUp, DisplayDown etc. // data.deviceOrientation can be DisplayUp, DisplayDown etc.
	$("#someHtmlElement").innerHTML = "<p>" + data.deviceOrientation + "</p>";
}
// Error callback
function errorCb(err) {
	console.log(err.code);
	console.log(err.message);
}


function button() {
	alert("buttonClick!");
}