/// <reference path="preview\vsdoc.js" />
/// <reference path="jquery-1.4.1-vsdoc.js" />
/// <reference path="jQueryRotate.js" />


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
var currX = 0;
var currY = 0;
var aminationSpeed = 200;

var matrix = [[4, 0, 4],
				 [0, 1, 0],
				 [0, 4, 0],
				 [0, 0, 0],
				 [3, 3, 0],
				 [2, 0, 2]];

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
	step = 40;
	isActionX = 0;
	isActionY = 0;
	currX = 0;
	currY = 0;
}


function init() {
	initVars();
	initMenu();

	try {
		initSensors();
	}
	catch (e) {
		var error = e.toString();
		alert(error);
	}
	if (widget.isrotationsupported) {// change the screen orientation
		widget.setDisplayPortrait();
	}

	renderTable();
	renderObjects();
	//$("#mainDiv").append($('<div>').addClass("divMain").append($('<img>').attr({ src: "pack40.png" })).animate({ top: 200, left: 100 }, 300, animationComplete));

	startAccelerometerAxisSensorChannel();
}

function stepUp() {
	//yAxis = yAxis - step;
	currY--;
	animationStart();
}

function stepDown() {
	//yAxis = yAxis + step;
	currY++;
	animationStart();
}

function stepL() {
	//xAxis = xAxis + step;
	currX--;
	animationStart();
}

function stepR() {
	//xAxis = xAxis - step;
	currX++;
	animationStart();
}


function renderObjects() {
	$("#mainDiv").html('');
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[0].length; j++) {
//			if (matrix[i][j] == 1) {
//				currX = j;
//				currY = i;
//				stopToAnimation = 0;
//				$("#cur").animate({ top: i * step, left: j * step }, aminationSpeed, animationComplete);
			//			} else 
if (matrix[i][j] == 3) {
				$("#mainDiv")
				.append($('<div>').addClass("divMain")
					.append($('<img>').attr({ src: "pack40.png" }))
					.animate({ top: i * step, left: j * step }, 0, animationComplete));

			}
		}
	}
}

function renderTable() {
	$("#mainTable").html('');
	for (var i = 0; i < matrix.length; i++) {
		$("#mainTable").append($('<tr>').addClass("trMain"));
		for (var j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] == 1) {
				currX = j;
				currY = i;
				//alert("animationStart to " +i + " "+ j);
				stopToAnimation = 0;
				$("#cur").animate({ top: i * step, left: j * step }, aminationSpeed, animationComplete);
			} else if (matrix[i][j] == 2) {
				$("#mainTable tr:last").append($('<td>').addClass("tdMain2"));
				//			} else if (matrix[i][j] == 3) {
				//				$("#mainTable tr:last").append($('<td>').addClass("tdMain3"));
			} else if (matrix[i][j] == 4) {
				$("#mainTable tr:last").append($('<td>').addClass("tdMain4"));
			} else {
				$("#mainTable tr:last").append($('<td>').addClass("tdMain"));
			}
		}
	}

	//	$("tr").css("height", 40);
	//	$("td").css("width", 38);
	//alert("renderComplete");
}

function canStepL() {
	//return xAxis >= -360 + step;
	return currX > 0 && matrix[currY][currX - 1] != 4;
}

function canStepR() {
	//return xAxis <= -step;
	return currX < matrix[0].length - 1 && matrix[currY][currX + 1] != 4;
}

function canStepUp() {
	//return yAxis >= step;
	return currY > 0 && matrix[currY - 1][currX] != 4;
}

function canStepDown() {
	//return yAxis <= 640 - step;
	return currY < matrix.length - 1 && matrix[currY + 1][currX] != 4;

}

function animationStart() {
	//	xAxisMax = Math.min(360 - step, Math.max(0, -xAxis));
	//	yAxisMax = Math.min(600 - step, Math.max(0, yAxis));

	//	if (stopToAnimation == 1) {
	//		if (isActionY == 3 || isActionY == 4) {
	//			stopToAnimation = 0;
	//			$("#cur").animate({ top: yAxisMax }, aminationSpeed, animationComplete);
	//		} else if (isActionX == 1 || isActionX == 2) {
	//			stopToAnimation = 0;
	//			alert("gotoX: " + xAxisMax);
	//			$("#cur").animate({ left: xAxisMax }, aminationSpeed, animationComplete);
	//		}
	//	}
	if (stopToAnimation == 1) {
		stopToAnimation = 0;
		$("#cur").animate({ top: currY * step, left: currX * step }, aminationSpeed, animationComplete);
	}
	renderObjects();
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


function move(sensordata) {
	if (yAxisInit == -100) { yAxisInit = sensordata.axisY; }
	if (xAxisInit == -100) { xAxisInit = sensordata.axisX; }

	if (Math.abs(sensordata.axisY - yAxisInit) > aprox) {
		if (sensordata.axisY - yAxisInit > 0 && isActionY != 3) {
			if (canStepDown()) {
				isActionY = 3;
				yAxisInit = yAxisInit - aprox;
				stepDown();
			}
		}
		else if (sensordata.axisY - yAxisInit < 0 && isActionY != 4) {
			if (canStepUp()) {
				isActionY = 4;
				yAxisInit = yAxisInit + aprox;
				stepUp();

			}
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
			if (canStepL()) {
				isActionX = 1;
				xAxisInit = xAxisInit - aprox;
				stepL();

			}
		}
		else if (sensordata.axisX - xAxisInit < 0 && isActionX != 2) {
			if (canStepR()) {
				isActionX = 2;
				xAxisInit = xAxisInit + aprox;
				stepR();
			}
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