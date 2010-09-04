/// <reference path="preview\vsdoc.js" />
/// <reference path="jquery-1.4.1-vsdoc.js" />
/// <reference path="jQueryRotate.js" />

var sensor = null;
var transactionIDAccelerometer = "";
addEvent("onload", init);

var xAxisInit;
var yAxisInit;
var aprox;
var step;
var isActionX = 0; // 1 left, 2 right, 3 up, 4 down
var isActionY = 0; // 1 left, 2 right, 3 up, 4 down
var stopToAnimation = 1;
var currX = 0;
var currY = 0;
var aminationSpeed = 200;
var level = 0;
var matrix;

var stepLog=[];//=[[0,0,0,0,false]];


var m2 =[[4, 0, 4],
		 [0, 1, 0],
		 [0, 4, 0],
		 [3, 3, 0],
		 [.5, 0, 0],
		 [0, 0, .5]];

var m1 =[[1, 0, 4],
		 [0, 3, .5]];
var m=[m1,m2];

function initVars() {
	xAxisInit = -100;
	yAxisInit = -100;
	aprox = 20;
	step = 40;
	matrix = m[level];
}

function init() {
	initVars();
	renderTable();
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
	
	renderObjects();
	startAccelerometerAxisSensorChannel();
}

function stepUp() {
	currY--;
	if (matrix[currY][currX] > 2) {
		matrix[currY][currX] = matrix[currY][currX] - 3;
		matrix[currY - 1][currX] = matrix[currY - 1][currX] + 3;
	}
	animationStart();	
}

function stepDown() {
	currY++;
	if (matrix[currY][currX] > 2) {
		matrix[currY][currX] = matrix[currY][currX] - 3;
		matrix[currY + 1][currX] = matrix[currY + 1][currX] + 3;
	} 
	animationStart();
}

function stepL() {
	currX--;
	if (matrix[currY][currX] > 2) {
		matrix[currY][currX] = matrix[currY][currX] - 3;
		matrix[currY][currX - 1] = matrix[currY][currX - 1] + 3;
	}
	animationStart();
}

function stepR() {
	currX++;
	if (matrix[currY][currX] > 2) {
		matrix[currY][currX] = matrix[currY][currX] - 3;
		matrix[currY][currX + 1] = matrix[currY][currX + 1] + 3;
	} 
	animationStart();
}


function renderObjects() {
	$("#mainDiv").html('');
	var win = true;
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] == 3 || matrix[i][j] == 3.5) {
				$("#mainDiv")
				.append($('<div>').addClass("divMain")
					.append($('<img>').attr({ src: "pack40.png" }))
					.animate({ top: i * step, left: j * step }, 0, animationComplete));
			}
			else if (matrix[i][j] == 0.5)
			{ win = false; }

		}
	}
	if (win) {
		onMenu(4);
		alert("YOU WIN!!! select START for next level");
		level= level+1;
		matrix = m[level];
		renderTable();
		renderObjects();
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
				stepLog = [];
				stepLog[stepLog.length] = [i,j,false];
				stopToAnimation = 0;
				$("#cur").animate({ top: i * step+1, left: j * step+1 }, aminationSpeed, animationComplete);
			} else if (matrix[i][j] == 0.5) {
				$("#mainTable tr:last").append($('<td>').addClass("tdMain2"));
			} else if (matrix[i][j] == 1) {
				$("#mainTable tr:last").append($('<td>').addClass("tdMain3"));
			} else if (matrix[i][j] == 4) {
				$("#mainTable tr:last").append($('<td>').addClass("tdMain4"));
			} else {
				$("#mainTable tr:last").append($('<td>').addClass("tdMain"));
			}
		}
	}

	//	$("tr").css("height", 40);
	//	$("td").css("width", 38);
}

function canStepL() {
	return currX > 0 && matrix[currY][currX - 1] < 3
	|| (currX > 1 && matrix[currY][currX - 1] <4 && matrix[currY][currX - 2] < 3);
}

function canStepR() {
	return currX < matrix[0].length - 1 && matrix[currY][currX + 1] < 3
	|| (currX < matrix[0].length - 2 && matrix[currY][currX + 1] <4 && matrix[currY][currX + 2] < 3);
}

function canStepUp() {
	return currY > 0 && matrix[currY - 1][currX] < 3
	|| (currY > 1 && matrix[currY - 1][currX] <4 && matrix[currY - 2][currX] < 3);
}

function canStepDown() {
	return currY < matrix.length - 1 && matrix[currY + 1][currX] < 3
	|| (currY < matrix.length - 2 && matrix[currY + 1][currX] <4 && matrix[currY + 2][currX] < 3);
}

function animationStart() {
	if (stopToAnimation == 1) {
		stopToAnimation = 0;
		if (matrix[currY][currX] > 2) {
			stepLog[stepLog.length]=[currY,currX,true];
		} else {
			stepLog[stepLog.length]=[currY,currX,false];
		}
		$("#cur").animate({ top: currY * step+1, left: currX * step+1 }, aminationSpeed, animationComplete);
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

function displayAccelerometerAxisChannel(sensordata) {
	try {
		if (sensordata != null && sensordata.timeStamp.length && sensordata.axisX.toString.length
		&& sensordata.axisY.toString.length) {
			move(sensordata);
		}
	}
	catch (e) {
		var error = e.toString();
		alert("displayAccelerometerAxisChannel" + error);
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
