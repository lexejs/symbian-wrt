/// <reference path="preview\vsdoc.js" />
var sensor = null;
var transactionIDRotation = "";
var transactionIDAccelerometer = "";
var transactionIDOrientation = "";

function initSensors(){
    try {
        sensor = nokia.device.load("sensors");
    } 
    catch (e) {
        var error = e.toString();
        alert(error);
    }
}

// Starts rotation channel notifications
function startRotationSensorChannel(){
    try {
        transactionIDRotation = sensor.startChannel(onRotationChannelNotification, "Rotation", onRotationChannelNotificationErr);
    } 
    catch (e) {
        var error = e.toString();
        alert(error);
    }
}

/*
 Callback handler for rotation channel change notifications
 Assigned in startRotationSensorChannel()function
 Serves sensor data object to corresponding display function (in basic.js)
 sensordata schema:
 "timeStamp": Date,
 "xRotation": Number,
 "yRotation": Number,
 "zRotation": Number
 */
function onRotationChannelNotification(data){
    try {
        displayRotationChannel(data);
    } 
    catch (e) {
        var error = e.toString();
        alert("RotationNotification: " + error);
    }
}

/*
 Error Callback handler for rotation channel change notifications
 */
function onRotationChannelNotificationErr(err){
    alert(err.toString());
}

// Starts orientation channel notifications
function startOrientationSensorChannel(){
    try {
        transactionIDOrientation = sensor.startChannel(onOrientationChannelNotification, "Orientation");
    } 
    catch (e) {
        var error = e.toString();
        alert(error);
    }
}

/*
 Callback handler for orientation channel change notifications
 Assigned in startOrientationSensorChannel()function
 Serves sensor data object to corresponding display function (in basic.js)
 sensordata schema:
 {
 "timeStamp": Date,
 "deviceOrientation": String // supported values are DisplayUp, DisplayDown, DisplayLeftUp, DisplayRightUp, DisplayUpwards, and DisplayDownwards.
 }
 */
function onOrientationChannelNotification(data){
    try {
        displayOrientationChannel(data);
    } 
    catch (e) {
        var error = e.toString();
         alert("Orientation notification: " + error);
    }
}

function startAccelerometerAxisSensorChannel(){
    try {
        transactionIDAccelerometer = sensor.startChannel(onAccelerometerChannelNotification, "AccelerometerAxis");
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
function onAccelerometerChannelNotification(data){
	try {
			displayAccelerometerAxisChannel(data)
	}
	 catch (e) {
        var error = e.toString();
         alert("AccelerometerAxis Notification: " + error);
    }
}

//Stops channel notifications for channel passed in channelname parameter
function MystopChannel(channelname){
    try {
        sensor.stopChannel(channelname);
    } 
    catch (e) {
        var error = e.toString();
        alert(error);
    }
}

