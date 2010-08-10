/// <reference path="preview\vsdoc.js" />
var sensor = null;
var transactionIDAccelerometer = "";
addEvent("onload", init);

var xAxisMin ;
var xAxisMax ;
var xAxis ;
var yAxis ;
var xAxisInit ;
var yAxisInit ;
var yAxisMin ;
var yAxisMax ;
var aprox ;
var isAction = 0; // 1 left, 2 right, 3 up, 4 down


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
	isAction = 0;
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
}

function move(sensordata) {

	if (sensordata.axisY > yAxisMax) {
		yAxisMax = sensordata.axisY;
	}
	if (sensordata.axisY < yAxisMin) {
		yAxisMin = sensordata.axisY;
	}
	if (yAxisInit == -100) {
	yAxisInit = sensordata.axisY; }

	if (yAxisMax - yAxisMin > aprox/2 ) {
		if (yAxisMax == sensordata.axisY) {
			if (isAction == 3) {
				isAction = 0;
			} else if (isAction != 4) {
				yAxis = yAxis + aprox/2;
				yAxisMax = yAxis + aprox/2;
				yAxisMin = yAxisMax - aprox;
				isAction = 4;
			}
		} else {
			if (isAction == 4) {
				isAction = 0;
			} else if (isAction != 3) {
				yAxis = yAxisMin - aprox/2;
				yAxisMax = yAxis + aprox/2;
				yAxisMin = yAxisMax - aprox;
				isAction = 3;
			}
		}
	}
	/*
	if (sensordata.axisX > xAxisMax) {
		xAxisMax = sensordata.axisX;
	}
	if (sensordata.axisX < xAxisMin) {
		xAxisMin = sensordata.axisX;
	}

	if (xAxisMax - xAxisMin > aprox * 2) {
		if (xAxisMax == sensordata.axisX) {
			xAxis = xAxis + aprox;
			xAxisMax = xAxis + aprox;
			xAxisMin = xAxisMax - aprox * 2;
			isAction = 2;
		} else {
			xAxis = xAxisMin - aprox;
			xAxisMax = xAxis + aprox;
			xAxisMin = xAxisMax - aprox * 2;
			isAction = 1;
		}

	}
*/
	cur.setAttribute("style",
	"position: absolute;top:" + (280 + yAxis * 4) + "px;left:" + (140 - xAxis * 2) + "px;")
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
		&& sensordata.axisY.toString.length && sensordata.axisZ.toString.length) {
			Accelerometer_timeStamp.innerHTML = sensordata.timeStamp;
			Accelerometer_AxisData.innerHTML = "X: " + sensordata.axisX + ", Y: " + sensordata.axisY + ", Z: " + sensordata.axisZ;
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

			transactionIDAccelerometer = sensor.startChannel(onAccelerometerChannelNotification, "AccelerometerAxis");
		}
	}
	catch (e) {
		var error = e.toString();
		alert(error);
	}
}

/*
Callback handler for Accelerometer channel change notifications
Assigned in startAccelerometerSensorChannel()function
Serves sensor data object to corresponding display function (in basic.js)
sensordata schema:
{
"timeStamp": Date,
"xAxisData": Number,
"yAxisData": Number,
"zAxisData": Number
}
*/
function onAccelerometerChannelNotification(data) {
	try {
		displayAccelerometerAxisChannel(data)
	}
	catch (e) {
		var error = e.toString();
		alert("AccelerometerAxis Notification: " + error);
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

