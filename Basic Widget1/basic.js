/// <reference path="preview\vsdoc.js" />
var sensor = null;
var transactionIDAccelerometer = "";
addEvent("onload", init);

var xAxisMin;
var xAxisMax;
var xAxis;
var yAxis;
var xAxisInit;
var yAxisInit;
var yAxisMin;
var yAxisMax;
var aprox;
var step;
var isActionX = 0; // 1 left, 2 right, 3 up, 4 down
var isActionY = 0; // 1 left, 2 right, 3 up, 4 down
var stopToAnimation = 1;


function initVars() {
	xAxisMin = -5;
	xAxisMax = 5;
	xAxis = 0;
	yAxis = 0;
	xAxisInit = 0;
	yAxisInit = -100;
	yAxisMin = -5;
	yAxisMax = 5;
	aprox = 20;
	step = 10;
	isActionX = 0;
	isActionY = 0;
}

var Accelerometer_timeStamp = null;
var Accelerometer_AxisData = null;
var cur = null;

function init() {
	initVars();
	Accelerometer_timeStamp = document.getElementById("Accelerometer_timeStamp");
	Accelerometer_AxisData = document.getElementById("Accelerometer_AxisData");
	cur = document.getElementById("cur");

	try {
		initSensors();
	}
	catch (e) {
		var error = e.toString();
		alert(error);
	}
	if (widget.isrotationsupported)
	// change the screen orientation
		widget.setDisplayPortrait();
	startAccelerometerAxisSensorChannel();
	//	$("#cur").attr("style", "position: absolute;top:0px;left:0px;");
	//	$("#cur").animate({ top: 280}, 1000);
}

function move(sensordata) {
	if (yAxisInit == -100) { yAxisInit = sensordata.axisY; }
	if (xAxisInit == -100) { xAxisInit = sensordata.axisX; }

	if (Math.abs(sensordata.axisY - yAxisInit) > aprox) {
		if (sensordata.axisY - yAxisInit > 0 && isActionY != 3) {
			yAxis = yAxis + step;
			isActionY = 3;
			yAxisInit = yAxisInit - step;
		}
		else if (sensordata.axisY - yAxisInit < 0 && isActionY != 4) {
			yAxis = yAxis - step;
			isActionY = 4;
			yAxisInit = yAxisInit + step;
		}
	}
	else {
		if (isActionY == 3) {
			yAxisInit = yAxisInit + step;
		}
		if (isActionY == 4) {
			yAxisInit = yAxisInit - step;
		}
		isActionY = 0;
	}

	if (Math.abs(sensordata.axisX - xAxisInit) > aprox) {
		if (sensordata.axisX - xAxisInit > 0 && isActionX != 1) {
			xAxis = xAxis + step;
			isActionX = 1;
			xAxisInit = xAxisInit - step;
		}
		else if (sensordata.axisX - xAxisInit < 0 && isActionX != 2) {
			xAxis = xAxis - step;
			isActionX = 2;
			xAxisInit = xAxisInit + step;
		}
	}
	else {
		if (isActionX == 1) {
			xAxisInit = xAxisInit + step;
		}
		if (isActionX == 2) {
			xAxisInit = xAxisInit - step;
		}
		isActionX = 0;

	}

	xAxisMax = Math.min(360 - 80, Math.max(0, 140 - xAxis * 2));
	yAxisMax = Math.min(600 - 80, Math.max(0, 280 + yAxis * 4));

	if (stopToAnimation == 1) {
		if ((isActionY == 3 || isActionY == 4)) {
			stopToAnimation = 0;
			$("#cur").animate({ top: yAxisMax }, 250, function() {
				stopToAnimation = 1; // Animation complete.
			});
		} else if (isActionX == 1 || isActionX == 2) {
			stopToAnimation = 0;
			$("#cur").animate({ left: xAxisMax }, 250, function() {
				stopToAnimation = 1; // Animation complete.
			});
		}
	}

}

function pausecomp(millis) {
	var date = new Date();
	var curDate = null;

	do { curDate = new Date(); }
	while (curDate - date < millis);
}

/*
Displays Accelerometer channel sensor data in widget ui.
sensordata object is passed to display function in
service platform asyncronous callback handlers. sensordata schema:
/*
{
"timeStamp": Date,
"axisX": Number,
"axisY": Number,
"axisZ": Number
}
*/
function displayAccelerometerAxisChannel(sensordata) {
	try {
		if (sensordata.timeStamp.length && sensordata.axisX.toString.length
		&& sensordata.axisY.toString.length) {
			//			Accelerometer_timeStamp.innerHTML = sensordata.timeStamp;
			//			Accelerometer_AxisData.innerHTML = "X: " + sensordata.axisX + ", Y: " + sensordata.axisY + ", Z: " + sensordata.axisZ;
			move(sensordata);

		}
	}
	catch (e) {
		var error = e.toString();
		//alert("displayAccelerometerAxisChannel" + error);
	}
}

function initSensors() {
	try {
		sensor = nokia.device.load("sensors");
	}
	catch (e) {
		var error = e.toString();
		alert(error);
	}
}


function startAccelerometerAxisSensorChannel() {
	try {
		if (transactionIDAccelerometer == "") {

			transactionIDAccelerometer = sensor.startChannel(displayAccelerometerAxisChannel, "AccelerometerAxis");
		}
	}
	catch (e) {
		var error = e.toString();
		alert(error);
	}
}

//Stops channel notifications for channel passed in channelname parameter
function MystopChannel(channelname) {
	try {
		if (transactionIDAccelerometer != "") {
			transactionIDAccelerometer = "";
			sensor.stopChannel(channelname);
			initVars();
		}
	}
	catch (e) {
		var error = e.toString();
		alert(error);
	}
}


/*
* addEvent()
* usage: addEvent(event, function);
* note: only targets window events!
* 
*/

function addEvent(_event, _function) {
	var _current_event = window[_event];
	if (typeof window[_event] != 'function') {
		window[_event] = _function;
	} else {
		window[_event] = function() {
			_current_event();
			_function();
		}
	}
}