/// <reference path="preview\vsdoc.js" />
addEvent("onload", init);
addEvent("onresize", checkOrientation);
var screenmode = 0;

var xAxis = 0;
var yAxis = 0;
var zAxis = 0;

var Rotation_timeStamp = null;
var Rotation_Rotation = null;

var Accelerometer_timeStamp = null;
var Accelerometer_AxisData = null;

var Orientation_timeStamp = null;				
var Orientation_deviceOrientation = null;

function init(){
	
		Rotation_timeStamp =  document.getElementById("Rotation_timeStamp");
		Rotation_Rotation = document.getElementById("Rotation_Rotation");
		
		Accelerometer_timeStamp =  document.getElementById("Accelerometer_timeStamp");
		Accelerometer_AxisData = document.getElementById("Accelerometer_AxisData");
		
		Orientation_timeStamp =  document.getElementById("Orientation_timeStamp");
		Orientation_deviceOrientation = document.getElementById("Orientation_deviceOrientation");
		
	
    try {		
        var myStyleTweaks = new StyleTweaker();
        myStyleTweaks.add("Series60/5.0", "styles/tweaks/S605th.css");
        myStyleTweaks.add("Series60/3.2", "styles/tweaks/S603rdFP2.css");
        myStyleTweaks.tweak();
        // Initiate toggle switch components for enabling / disabling each supported channel
        var toggle_rotation = new ToggleSwitch("toggle_sensors_rotation", toggle_sensors_rotation_click);
        var toggle_accelerometer = new ToggleSwitch("toggle_sensors_accelerometer", toggle_sensors_accelerometer_click);
        var toggle_orientation = new ToggleSwitch("toggle_sensors_orientation", toggle_sensors_orientation_click);
        initSensors();
        
			
    } 
    
    catch (e) {
        var error = e.toString();
        alert(error);
    }
}


function checkOrientation(){
    try {
        var width = parseInt(screen.width);
        var height = parseInt(screen.height);
        
        //var landscapeTweaker = new StyleTweaker();
        // Landscape tweaks for template styles not available in templates?
        //landscapeTweaker.add("Series60/5.0", "../resources/styles/tweaks/S605thLandscape.css");
        
        if (width > height) {
        
            // if already in landscape mode, return
            if (screenmode == 1) 
                return;
            // landscapeTweaker.tweak();
            screenmode = 1;
        }
        else {
            // if already in portrait mode, return
            if (screenmode == 0) 
                return;
            // landscapeTweaker.untweak();
            screenmode = 0;
            
        }
    } 
    
    catch (e) {
        var error = e.toString();
        alert(error);
    }
}

// Callback handler for rotation channel toggle click(Nokia templates object)
function toggle_sensors_rotation_click(actionobj){
    try {
    
        var state = actionobj.getAttribute("class");
        var on = state.search(/on/) + 1;
        if (on) {
            startRotationSensorChannel();
        }
        else {
            MystopChannel("Rotation");
        }
        
    } 
    catch (e) {
        var error = e.toString();
        alert(error);
    }
}

// Callback handler for rotation channel toggle click (Nokia templates object)
function toggle_sensors_orientation_click(actionobj){
    try {
    
        var state = actionobj.getAttribute("class");
        var on = state.search(/on/) + 1;
        if (on) {
        
            startOrientationSensorChannel();
        }
        else {
            MystopChannel("Orientation");
        }
        
    } 
    catch (e) {
        var error = e.toString();
        alert(error);
    }
}

// Callback handler for accelerometer channel toggle click (Nokia templates object)
function toggle_sensors_accelerometer_click(actionobj){
    try {
    
        var state = actionobj.getAttribute("class");
        var on = state.search(/on/) + 1;
        if (on) {
            startAccelerometerAxisSensorChannel();
        }
        else {
            MystopChannel("AccelerometerAxis");
        }
        
    } 
    catch (e) {
        var error = e.toString();
        alert(error);
    }
}



/*
 Displays XYZ channel sensor data in widget ui.
 sensordata object is passed to display function in
 service platform asyncronous callback handlers. sensordata schema:
 "timeStamp": Date,
 "rotationAboutXAxis": Number,
 "rotationAboutYAxis": Number,
 "rotationAboutZAxis": Number
 */


function displayRotationChannel(sensordata){
    try {
		if (sensordata.timeStamp.length && sensordata.rotationAboutXAxis.toString.length 
		&& sensordata.rotationAboutYAxis.toString.length && sensordata.rotationAboutZAxis.toString.length) {
	
			if (xAxis != sensordata.rotationAboutXAxis ||
			yAxis != sensordata.rotationAboutYAxis ||
			zAxis != sensordata.rotationAboutZAxis) {
				
				xAxis = sensordata.rotationAboutXAxis;
				yAxis = sensordata.rotationAboutYAxis;
				zAxis = sensordata.rotationAboutZAxis;
				
				Rotation_timeStamp.innerHTML = sensordata.timeStamp;
				Rotation_Rotation.innerHTML = "X: " + xAxis + ", Y: " + yAxis + ", Z: " + zAxis;
			}
		}    
    } 
    catch (e) {
        var error = e.toString();
        alert("displayRotationChannel " +error);
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
function displayAccelerometerAxisChannel(sensordata){
    try {
		if (sensordata.timeStamp.length && sensordata.axisX.toString.length 
		&& sensordata.axisY.toString.length && sensordata.axisZ.toString.length) {
			Accelerometer_timeStamp.innerHTML = sensordata.timeStamp;
			Accelerometer_AxisData.innerHTML = "X: " + sensordata.axisX + ", Y: " + sensordata.axisY + ", Z: " + sensordata.axisZ;
		}
    } 
    catch (e) {
        var error = e.toString();
        alert("displayAccelerometerAxisChannel" + error);
    }
}

/*
 Displays orientation channel sensor data in widget ui.
 sensordata object is passed to display function in
 service platform asyncronous callback handlers. sensordata schema:
 {
 "timeStamp": Date,
 "deviceOrientation": String // supported values are DisplayUp, DisplayDown, DisplayLeftUp, DisplayRightUp, DisplayUpwards, and DisplayDownwards.
 }
 */
function displayOrientationChannel(sensordata){
    try {
		if (sensordata.timeStamp.length && sensordata.deviceOrientation.length) {
			Orientation_timeStamp.innerHTML = sensordata.timeStamp;
			Orientation_deviceOrientation.innerHTML = sensordata.deviceOrientation;
		}
    } 
    catch (e) {
        var error = e.toString();
        alert("displayOrientationChannel" +error);
    }
}

