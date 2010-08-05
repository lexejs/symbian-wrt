// Please don't remove line below - it is used for code-completion for Visual Studio
/// <reference path="preview\vsdoc.js" />

function init() {
	//	Add your code steps here
	
	//Create a new item within the menu 
menu.append(new MenuItem("Sample Item", 0));
//Creates another menu item
menu.append(new MenuItem("Sample Item 2", 1)); 
//You can also cache a local variable for 
//future calls to a given menu object gj
var submenu = new MenuItem("Submenu 2",3);
submenu.append(new MenuItem("Item 1",4));
submenu.append(new MenuItem("Item 2",5)); 
menu.append(submenu);
//Example event handler p
submenu.onSelect = function(id){
alert("Menu id " + id + " selected!")
};

//var so = device.getServiceObject("Service.Sensor", "ISensor");


}

function toggleMenu() {
	var res1 = menu.hideSoftkeys();
	alert(res1);
	var res2 = menu.showSoftkeys();
	alert(res2);
}
