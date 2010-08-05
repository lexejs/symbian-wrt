// Please don't remove line below - it is used for code-completion for Visual Studio
/// <reference path="preview\vsdoc.js" />

function init() {

	menu.append(new MenuItem("Sample Item", 0));
	menu.append(new MenuItem("Sample Item 2", 1));


}

function toggleMenu() {
	var MenuIsShow = $("#hdnMenuIsShow").val();
	if (MenuIsShow == "true") {
		menu.hideSoftkeys();
		$("#hdnMenuIsShow").val("false")
	}
	else {
		menu.showSoftkeys();
		$("#hdnMenuIsShow").val("true")
	}
}

function getSensorData() {
	var so = device.getServiceObject("Service.Sensor", "ISensor");

	var inParams = { SearchCriterion: "All" };
	var result = so.ISensor.FindSensorChannel(inParams);
	alert(result.ReturnValue[0].ContextType);
	alert(result.ReturnValue[1].ContextType);
	alert(result.ReturnValue[2].ContextType);
	alert(result.ReturnValue[3].ContextType);

	if (result.ErrorCode != 0) {
		alert(result.ErrorMessage);
	}

}
//	alert(res1);
//	var res2 = menu.showSoftkeys();
//	alert(res2);

