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
	try {
		var so = device.getServiceObject("Service.Sensor", "ISensor");

		var inParams = { SearchCriterion: "All" };
		var result = so.ISensor.FindSensorChannel(inParams);
		var count = result.ReturnValue.length;

		for (i = 0; i < count; i++) {
			if (true) {

				var criteria = new Object();
				criteria.PropertyId = "Description";
				criteria.ChannelInfoMap = result.ReturnValue[i];

				var resultChannelProperty = so.ISensor.GetChannelProperty(criteria);
				if (resultChannelProperty.ErrorCode != 0) {
					alert("ERROR: " + resultChannelProperty.ErrorMessage);
				}
				else {

					var criteriaChannelData = new Object();
					criteriaChannelData.ListeningType = "ChannelData";
					criteriaChannelData.ChannelInfoMap = result.ReturnValue[i];

					var resultR = so.ISensor.RegisterForNotification(criteriaChannelData, callback1);

//					alert("KEY: " + i
//				+ "\r\nChannelId: " + result.ReturnValue[i].ChannelId
//				+ "\r\nContextType: " + result.ReturnValue[i].ContextType
//				+ "\r\nQuantity: " + result.ReturnValue[i].Quantity
//				+ "\r\nChannelType: " + result.ReturnValue[i].ChannelType

//				+ " \r\n\r\nPropertyId: " + resultChannelProperty.ReturnValue.PropertyId
//			+ ";\r\n PropertyDataType: " + resultChannelProperty.ReturnValue.PropertyDataType
//			 + ";\r\n ItemIndex: " + resultChannelProperty.ReturnValue.ItemIndex
//			 + ";\r\n PropertyValue: " + resultChannelProperty.ReturnValue.PropertyValue);
				}
			}
		}
	} catch (e) {
		alert("showObject: " + e);
	}
}

function callback1(transId, eventCode, result) {
	alert("callback1: transId: " + transId + "  eventCode: " + eventCode + " result.ErrorCode: " + result.ErrorCode + " result: " + result.ReturnValue);
}