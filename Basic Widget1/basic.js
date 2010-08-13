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
	step = 80;
	isActionX = 0;
	isActionY = 0;
}

var cur = null;

function init() {
	initVars();
	initMenu();

	cur = document.getElementById("cur");


	try {
		initSensors();
	}
	catch (e) {
		var error = e.toString();
		alert(error);
	}
	if (widget.isrotationsupported)// change the screen orientation
		widget.setDisplayPortrait();

	startAccelerometerAxisSensorChannel();

}

function move(sensordata) {
	if (yAxisInit == -100) { yAxisInit = sensordata.axisY; }
	if (xAxisInit == -100) { xAxisInit = sensordata.axisX; }

	if (Math.abs(sensordata.axisY - yAxisInit) > aprox) {
		if (sensordata.axisY - yAxisInit > 0 && isActionY != 3) {
			yAxis = yAxis + step;
			isActionY = 3;
			yAxisInit = yAxisInit - aprox;
		}
		else if (sensordata.axisY - yAxisInit < 0 && isActionY != 4) {
			yAxis = yAxis - step;
			isActionY = 4;
			yAxisInit = yAxisInit + aprox;
		}
	}
	else {
		if (isActionY == 3) {
			yAxisInit = yAxisInit + aprox;
		}
		if (isActionY == 4) {
			yAxisInit = yAxisInit - aprox;
		}
		isActionY = 0;
	}

	if (Math.abs(sensordata.axisX - xAxisInit) > aprox) {
		if (sensordata.axisX - xAxisInit > 0 && isActionX != 1) {
			xAxis = xAxis + step;
			isActionX = 1;
			xAxisInit = xAxisInit - aprox;
		}
		else if (sensordata.axisX - xAxisInit < 0 && isActionX != 2) {
			xAxis = xAxis - step;
			isActionX = 2;
			xAxisInit = xAxisInit + aprox;
		}
	}
	else {
		if (isActionX == 1) {
			xAxisInit = xAxisInit + aprox;
		}
		if (isActionX == 2) {
			xAxisInit = xAxisInit - aprox;
		}
		isActionX = 0;

	}

	xAxisMax = Math.min(360 - step, Math.max(0, -xAxis));
	yAxisMax = Math.min(600 - step, Math.max(0, yAxis));

	if (stopToAnimation == 1) {
		if (isActionY == 3) { // UP
			stopToAnimation = 0;
			$("#cur").animate({ top: yAxisMax }, 250, animationComplete);
		} else if (isActionY == 4) { // DOWN
			stopToAnimation = 0;
			$("#cur").animate({ top: yAxisMax }, 250, animationComplete);
		} else if (isActionX == 1) {
			stopToAnimation = 0;
			$("#cur").animate({ left: xAxisMax }, 250, animationComplete);
		} else if (isActionX == 2) {
			stopToAnimation = 0;
			$("#cur").animate({ left: xAxisMax }, 250, animationComplete);
		}
	}

}

function animationComplete() {
	stopToAnimation = 1; // Animation complete.
};


function initMenu() {
	var optionsMenu = window.menu;
	var m1 = new MenuItem("Stop", 4);
	var m2 = new MenuItem("Start", 5);
	m1.onSelect = onMenu;
	m2.onSelect = onMenu;
	optionsMenu.append(m1);
	optionsMenu.append(m2);
}

function onMenu(id) {
	//alert("selected is = " + id);
	if (id == 5) {
		startAccelerometerAxisSensorChannel();
	} else if (id == 4) {
		MystopChannel("AccelerometerAxis");
	}
};


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