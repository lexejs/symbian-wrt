// JavaScript wrapper for VS

/// <reference path="..\WRTKit\WRTKit.js" />
/// <reference path="..\WRTKit\UI\Ajax.js" />
/// <reference path="..\WRTKit\UI\UIManager.js" />
/// <reference path="..\WRTKit\UI\UIElement.js" />
/// <reference path="..\WRTKit\UI\NotificationPopup.js" />
/// <reference path="..\WRTKit\UI\ScrollBar.js" />
/// <reference path="..\WRTKit\UI\View.js" />
/// <reference path="..\WRTKit\UI\Control.js" />
/// <reference path="..\WRTKit\UI\ActionControl.js" />
/// <reference path="..\WRTKit\UI\ContentPanel.js" />
/// <reference path="..\WRTKit\UI\FormButton.js" />
/// <reference path="..\WRTKit\UI\Label.js" />
/// <reference path="..\WRTKit\UI\ListView.js" />
/// <reference path="..\WRTKit\UI\NavigationButton.js" />
/// <reference path="..\WRTKit\UI\SelectionControl.js" />
/// <reference path="..\WRTKit\UI\SelectionList.js" />
/// <reference path="..\WRTKit\UI\SelectionMenu.js" />
/// <reference path="..\WRTKit\UI\Separator.js" />
/// <reference path="..\WRTKit\UI\TextEntryControl.js" />
/// <reference path="..\WRTKit\UI\TextArea.js" />
/// <reference path="..\WRTKit\UI\TextField.js" />
/// <reference path="..\WRTKit\Utils\Logger.js" />

function widget() { 
    /// <summary>The widget engine provides a set of system information (SystemInfo) API services. The SystemInfo Service API allows a widget to access a device's properties and to control certain device features. The API is implemented in a plug-in module and it is integrated into the WRT environment. To use the SystemInfo APIs, each widget must load the plug-in module explicitly by defining the following HTML code in its main HTML document</summary>
    /// <field name="identifier" type="String" >This is a read-only property that returns an integer indicating the current battery level. The returned value is in the range of 0 to 100 as a percentage of the maximum battery level.</field>
    /// <field name="isrotationsupported" type="Boolean" >isrotationsupported is a read-only property that returns a Boolean value determining if the device supports landscape and portrait screen orientations. If the value is true, the device supports both landscape and portrait screen orientations.</field> 
};

widget.openURL = function (url) {
    /// <summary> The openURL method opens a specified link in the Web Browser for S60 in the stand-alone mode. The widget remains open but is sent to the background.</summary>
    /// <param name="url" type="String">A compact string specifying a link to a resource to be opened. The URL string format is compliant with the RFC-1738 specification and must be encoded if it contains non-ASCII characters.</param>
    /// <returns type="void"/>
}
widget.setPreferenceForKey = function (preference,key) {
    /// <summary> The setPreferenceForKey method allows a key to be stored along with its associated preference. The arguments are like name and value pairs. The preference value for the key is stored persistently, so if the widget or device is restarted, the value is retained. However, the values stored by a widget are removed when a widget is uninstalled from the device. This includes the case when a widget is reinstalled; where the old widget is uninstalled, the new widget is installed. An existing preference can be overwritten with a new value by simply calling the method with the same key and new value.</summary>
    /// <param name="preference" type="String">A short text string defined as the name of the preference to be stored.</param>
    /// <param name="key" type="String">A compact string specifying a link to a resource to be opened. The URL string format is compliant with the RFC-1738 specification and must be encoded if it contains non-ASCII characters.</param>
    /// <returns type="void"/>
}
widget.preferenceForKey = function (key) {
    /// <summary> The preferenceForKey method allows a previously stored preference to be restored.</summary>
    /// <param name="key" type="String">A text string specifying the name that represents the preference to be restored.</param>
    /// <returns type="String"/>
}
widget.prepareForTransition = function (transitionMode) {
    /// <summary> The widget's view is composed by HTML elements such as text display area, buttons, edit fields, and so on. The appearance of these HTML elements can be dynamically changed. For example, they can be shown or hidden dynamically using the HTML DOM style object to set the display property to "block" or "none" respectively.</summary>
    /// <param name="transitionMode" type="String">A text string defining a desired transition mode. Currently the only supported transition mode is "fade", which causes the widget's view changing in fading mode.</param>
    /// <returns type="void"/>
}
widget.performTransition = function () {
    /// <summary> The performTransition method operates as a screen update command, which tells the widget UI framework to update the widget screen. It performs the animation while the widget's view is being changed. Currently, only fading animation mode is supported.</summary>
    /// <returns type="void"/>
}
widget.setNavigationEnabled = function (navigationMode) {
    /// <summary> The navigation mode in a widget can be toggled between a cursor and a tabbed navigation mode. By default, the browsing mode of a widget is set to use a cursor (pointer). The setNavigationEnabled method is used for changing the widget's navigation mode. The argument navigationType is of Boolean type and can be set to true or false to toggle the navigation mode between the cursor mode and the tab mode respectively.</summary>
    /// <param name="navigationMode" type="Boolean">Set to true to enable the cursor navigation mode, and set to false to enable the tabbed navigation mode.</param>
    /// <returns type="void"/>
}
widget.setDisplayLandscape = function () {
    /// <summary> The setDisplayLandscape method changes the orientation of a widget's screen to the landscape mode.</summary>
    /// <returns type="void"/>
}
widget.openApplication = function (Uid,param) {
    /// <summary> The openApplication method enables a widget to launch an S60 mobile application in the stand-alone mode.</summary>
    /// <param name="Uid" type="Number">A hexadecimal number that specifies the UID of the S60 application to be activated. See the table below for example application UIDs.</param>
    /// <param name="param" type="String">A text string defining a possible argument string that is accepted by the S60 application to be activated.</param>
    /// <returns type=""/>
}
widget.setDisplayPortrait = function () {
    /// <summary> The setDisplayPortrait method changes the orientation of a widget's screen to the portrait mode.</summary>
    /// <returns type="void"/>
}

function menu() { 
    /// <summary>The menu object is supported since WRT version 1.0.</summary> 
};

menu.append = function (MenuItem) {
    /// <summary> Call the append method to add a menu item to the top level of the options menu list. Menu items are shown on the options menu list in the order in which they are appended. For more general information on constructing an options menu.</summary>
    /// <param name="MenuItem" type="menuItem">This is an instance of the MenuItem object which is being added to the top level of the options menu</param>
    /// <returns type="void"/>
}
menu.remove = function (MenuItem) {
    /// <summary> Call the remove method to remove a menu item from the top level of the options menu list. If the removed menu item has a cascading submenu in it, the submenu will also be removed.</summary>
    /// <param name="MenuItem" type="menuItem">This is an instance of the MenuItem object which is being removed from the top level of the options menu list.</param>
    /// <returns type="void"/>
}
menu.getMenuItemById = function (id) {
    /// <summary> Call the getMenuItemById method with a specified menu item's identifier to retrieve the handle of the menu item instance.</summary>
    /// <param name="id" type="Number">This is the identifier of an existing menu item whose handle is being retrieved.</param>
    /// <returns type="MenuItem"/>
}
menu.getMenuItemByName = function (menuItemLabel) {
    /// <summary> Call the getMenuItemByName method with a specified menu item's label to retrieve the handle of the menu item instance.</summary>
    /// <param name="menuItemLabel" type="String">This is the identifier of an existing menu item whose handle is being retrieved.</param>
    /// <returns type="MenuItem"/>
}
menu.setRightSoftkeyLabel = function (label,callbackfunc) {
    /// <summary> Call the setRightSoftkeyLabel method to customize the label and the operation associated with the right softkey. By default, the right softkey of a device is assigned to the "Exit" function, which terminates a running widget. The default label depends on the current used system language (Exit for English).</summary>
    /// <param name="label" type="String">A text string specifies the label to be shown on the right softkey.</param>
    /// <param name="callbackfunc" type="Function">A reference to the callback function, which will be called by the system when the right softkey is pressed.</param>
    /// <returns type="void"/>
}
menu.showSoftkeys = function () {
    /// <summary> Call the showSoftkeys method to display the softkey pane at all times. By default, the device's softkey pane is hidden. The softkey pane is shown either by programmatically calling the showSoftkeys method or when the end user presses one of the softkeys.</summary>
    /// <returns type="void"/>
}
menu.hideSoftkeys = function () {
    /// <summary> Call the hideSoftkeys method to hide the softkey pane. By default, the device's softkey pane is hidden. The softkey pane is shown automatically when the end user presses one of the softkeys.</summary>
    /// <returns type="void"/>
}
menu.clear = function () {
    /// <summary> Call the clear method to delete all the menu items in the options menu pane. This operation will also clear all submenus if such exist</summary>
    /// <returns type="void"/>
}

function MenuItem() { 
    /// <summary>The MenuItem object is supported since WRT version 1.0.</summary> 
};

MenuItem.prototype.append = function (childMenuItem) {
    /// <summary> Call the append method to add a child menu item to the parent menu item in the options menu list. This results in the creation of a submenu list in the menu tree. Use this method to create a cascading submenu when needed. Menu items are shown on the options menu list in the order in which they are appended.</summary>
    /// <param name="childMenuItem" type="MenuItem">This is an instance of the MenuItem object which is being added to the parent menu item. See also the menu.append method description for instructions on how to append a menu item to the top level of the options menu list.</param>
    /// <returns type="void"/>
}
MenuItem.prototype.remove = function (childMenuItem) {
    /// <summary> Call the remove method to remove a child menu item and its children (if any) from the parent menu item.</summary>
    /// <param name="childMenuItem" type="MenuItem">This is an instance of the MenuItem object which is being removed from the parent menu item. See also the menu.remove method description for instructions on how to remove a menu item from the top level of the options menu list.</param>
    /// <returns type="void"/>
}
MenuItem.prototype.setDimmed = function (flag) {
    /// <summary> Call the setDimmed method to show or hide an existing menu item. By default, a menu item is shown when it is appended to the options menu.</summary>
    /// <param name="flag" type="Boolean">true to show the menu item, and false to hide the menu item.</param>
    /// <returns type="void"/>
}

function key() { 
    /// <summary>Each key represents one piece of contact information, such as first name, last name, home phone number, or email address. For each contact, GetList returns as many keys as has been defined for that contact.</summary>
    /// <field name="Label" type="String" >Label</field>
    /// <field name="Value" type="String" >Value</field>
    /// <field name="FirstName" type="String" >FirstName</field>
    /// <field name="LastName" type="String" >LastName</field> 
};


function Item() { 
    /// <summary>Item</summary>
    /// <field name="CalendarName" type="String" >CalendarName</field>
    /// <field name="LocalId" type="String" >LocalId</field>
    /// <field name="InstanceStartTime" type="Date" >InstanceStartTime</field>
    /// <field name="id" type="String" >Unique identifier of the contact.</field>
    /// <field name="key" type="key" >Each key represents one piece of contact information, such as first name, last name, home phone number, or email address. For each contact, GetList returns as many keys as has been defined for that contact.</field>
    /// <field name="GroupLabel" type="String" >Name of the group.</field>
    /// <field name="Contents" type="Array" >Contains the IDs of the contacts that belong to the group.</field>
    /// <field name="DBUri" type="String" >URI of the database.</field>
    /// <field name="Uid" type="String" >AppManager: Contains a unique ID for the application binary (EXE or DLL).</field>
    /// <field name="Path" type="String" >AppManager: Contains the path of the application. For example, c:\sys\bin\calculator.exe.</field>
    /// <field name="Caption" type="String" >AppManager: Contains the title of the application.</field>
    /// <field name="ShortCaption" type="String" >AppManager: Contains the short title of the application. For example, the short caption may be displayed beneath an icon on the mobile device.</field>
    /// <field name="PackageName" type="String" >AppManager: Contains the name of the application. For example, the package name may be displayed in a menu on the mobile device.</field>
    /// <field name="Version" type="String" >AppManager: Contains the version of the application. The version consists of two parts: Major, Minor. For example, 1.01, where 1 is the major part and .02 is the minor part.</field>
    /// <field name="Vendor" type="String" >AppManager: Contains the vendor of the application.</field>
    /// <field name="Drive" type="String" >AppManager: Contains the drive where the application is installed.</field> 
};


function Iterator() { 
    /// <summary>Iterator</summary> 
};

Iterator.prototype.reset = function () {
    /// <summary> reset</summary>
    /// <returns type="void"/>
}
Iterator.prototype.getNext = function () {
    /// <summary> getNext</summary>
    /// <returns type="Item"/>
}

function result() { 
    /// <summary>result</summary>
    /// <field name="ReturnValue" type="Object" >Return value</field>
    /// <field name="ErrorCode" type="Number" >This is a number that specifies a predefined error code.</field>
    /// <field name="ErrorMessage" type="String" >This is a text string that describes the error.</field>
    /// <field name="TransactionID" type="Number" >This is a number used as an identification to match transactions started with an asynchronous call to one or more calls it generates to callback. This is only valid for Asynchronous invocations.</field> 
};


function IDataSource() { 
    /// <summary>This Service API allows widgets to: access, create, and manage calendars/calendar entries, access and manage information about contacts, access and manage information about landmarks and landmark categories, add, read, and delete logging events such as call logs, messaging logs, and so forth, retrieve information (metadata) about the media files stored in the Media Gallery of a device. To use the IDataSource Service API, your widget must first create a service object for it using the device.getServiceObject() method. Use Service.Calendar or Service.Contact or Service.Landmarks or Service.Logging or Service.MediaManagement to identify the service provider and IDataSource to identify the supported interface: var so = device.getServiceObject("Service.Calendar", "IDataSource");</summary> 
};

IDataSource.prototype.GetList = function (criteria,callback) {
    /// <summary> Calendar: The GetList method retrieves a list of available calendars or calendar entries. Calendar entries are retrieved from the specified calendar or, if no calendar is specified, from the default one. This is a synchronous method. Contacts: The GetList method retrieves a list of contacts, contact groups, or contacts databases. Contacts and contact groups are retrieved from the specified contacts database or, if no database is specified, from the default one. This method can be called both synchronously and asynchronously. Note: Calls that retrieve a list of databases must always be synchronous. Landmarks: The GetList method retrieves information about landmarks, landmark categories, or landmark databases. Landmarks and landmark categories are retrieved from the specified landmark database or, if no database is specified, from the default one. This method can be called both synchronously and asynchronously. Note: For retrieving information about databases, only synchronous GetList is supported.<p/> Logging: The GetList method retrieves an iterable list of entries from the log event database. The database contains two types of entries, log entries (all entries) and recent log entries (a subset of all log entries). This method can be called both synchronously and asynchronously. Media Management: The GetList method retrieves a list of media information objects from the Media Gallery of the S60 device. Each object contains information about a single media file. This is an asynchronous method.</summary>
    /// <param name="criteria" type="Object">This is an object that specifies what type of calendar/location/landmark/log event information is returned and how the returned information is sorted.</param>
    /// <param name="callback" type="Function">The callback argument is the name of the method that is executed when an asynchronous GetList call has results or status information to return. You must define this method separately.</param>
    /// <returns type="result"/>
}
IDataSource.prototype.Add = function (criteria,callback) {
    /// <summary> Calendar: The Add method creates a new calendar on the device or adds an entry to a calendar. In the latter case, if an entry with the same LocalId already exists in the calendar, it is modified accordingly. You can thus use this method to both add and update calendar entries. The entry is added to the specified calendar or, if no calendar is specified, to the default one. If the default calendar does not exist, it is created. This is a synchronous method. Contact: The Add method adds a contact or contact group to a contacts database. If the contact or contact group already exists in the database, it is replaced with the new entry. You can thus use this method to both add and edit contacts and contact groups. The information is added to the specified database or, if no database is specified, to the default one. If the default database does not exist, it is created. This method can be called both synchronously and asynchronously. Landmarks: The Add method adds a new landmark or landmark category to a landmark database. You can also use this method to edit an existing landmark or landmark category. This is a synchronous method. Logging: The Add method adds an event (entry) to the event log database. This method can be called both synchronously and asynchronously.</summary>
    /// <param name="criteria" type="criteria">This is an object that specifies the calendar/contact/landmark/log to create or to add or update.</param>
    /// <param name="callback" type="Function">The callback argument is the name of the method that is executed when an asynchronous Add call has results or status information to return. You must define this method separately.</param>
    /// <returns type="result"/>
}
IDataSource.prototype.Delete = function (criteria,callback) {
    /// <summary> Calendar: The Delete method deletes a calendar from the device or one or more entries from a calendar. Entries are deleted from the specified calendar or, if no calendar is specified, from the default one. For deleting a calendar, this method is called synchronously. For deleting calendar entries, this method can be called both synchronously and asynchronously. Contacts: The Delete method deletes one or more contacts or contact groups from a contacts database. The information is deleted from the specified database or, if no database is specified, from the default one. This method can be called both synchronously and asynchronously Landmark: The Delete method deletes a landmark or landmark category from a landmark database. Note: You cannot delete landmark databases. This is a synchronous method. Logging: The Delete method deletes an event (entry) from the event log database. This method can be called both synchronously and asynchronously.</summary>
    /// <param name="criteria" type="criteria">This is an object that specifies which calendar/calendar entries/contacts/contact groups/landmark/landmark category/event to delete from the database.</param>
    /// <param name="callback" type="Function">The callback argument is the name of the method that is executed when an asynchronous Delete call has results or status information to return. You must define this method separately.</param>
    /// <returns type="result"/>
}
IDataSource.prototype.Import = function (criteria,callback) {
    /// <summary> Calendar: The Import method imports entries into a calendar. The information must be imported from an iCal or vCal file. For more information about these two formats, see the Calendar Service overview page. This method can be called both synchronously and asynchronously. Contact: The Import method imports a contact to a contacts database. The information must be imported from a vCard file. This method can be called both synchronously and asynchronously. Landmark: The Import method imports a set of landmarks to a landmark database. This is a synchronous method.</summary>
    /// <param name="criteria" type="criteria">This is an object that specifies the calendar entries/contacts/landmarks to import.</param>
    /// <param name="callback" type="Function">The callback argument is the name of the method that is executed when an asynchronous Import call has results or status information to return. You must define this method separately.</param>
    /// <returns type="result"/>
}
IDataSource.prototype.Export = function (criteria,callback) {
    /// <summary> Calendar: The Export method exports entries from a calendar. The information is exported to an iCal or vCal file. For more information about these two formats, see the Calendar Service overview page. This method can be called both synchronously and asynchronously. Contact: The Export method exports a contact from a contacts database. The information is exported to a vCard file. This method can be called both synchronously and asynchronously Landmark: The Export method exports a set of landmarks from a landmark database. This is a synchronous method.</summary>
    /// <param name="criteria" type="criteria">This is an object that specifies the calendar/contacts/landmarks entries to export.</param>
    /// <param name="callback" type="Function">The callback argument is the name of the method that is executed when an asynchronous Export call has results or status information to return. You must define this method separately.</param>
    /// <returns type="result"/>
}
IDataSource.prototype.RequestNotification = function (criteria,Callback) {
    /// <summary> Calendar: The RequestNotification method notifies the client when entries are created, updated, or deleted in the specified calendar. If no calendar is specified, the default calendar is used. This is an asynchronous method. Logging: The RequestNotification method registers the widget to receive notifications of changes to the event log. This is an asynchronous method.</summary>
    /// <param name="criteria" type="criteria">This is an object that specifies which calendar, calendar entries and event log to monitor for changes and when.</param>
    /// <param name="Callback" type="Function">The callback argument is the name of the method that is executed when an asynchronous 'RequestNotification' call has results or status information to return. You must define this method separately.</param>
    /// <returns type="result"/>
}
IDataSource.prototype.Cancel = function (criteria) {
    /// <summary> Calendar: The Cancel method cancels an ongoing asynchronous call made with a Calendar Service API method. This is a synchronous method. Contact: The Cancel method cancels an outstanding asynchronous call made with a Contacts Service API method. This is a synchronous method. LandMark: The Cancel method cancels an ongoing asynchronous call made with a Landmarks Service API method. This is a synchronous method. Logging: The Cancel method cancels an ongoing asynchronous call made with a Landmarks Service API method. This is a synchronous method.</summary>
    /// <param name="criteria" type="criteria">This is an object with the TransactionID property (number). criteria.TransactionID specifies the transaction ID of the asynchronous call to cancel. The transaction ID is the result.TransactionID value that was returned as part of the result of the initial call.</param>
    /// <returns type="result"/>
}
IDataSource.prototype.Organise = function (criteria,Callback) {
    /// <summary> Calendar: The Organise method adds contacts to a contact group (association) or removes contacts from a contact group (disassociation). The operation is performed on the specified database or, if no database is specified, on the default one. This method can be called both synchronously and asynchronously. Landmark: The Organise method adds landmarks to a landmark category (association) or removes landmarks from a landmark category (disassociation). The same landmark can belong to multiple categories or to no category. This is a synchronous method.</summary>
    /// <param name="criteria" type="criteria">This is an object that specifies which contact group/landmarks to organize and how.</param>
    /// <param name="Callback" type="Function">The callback argument is the name of the method that is executed when an asynchronous Organise call has results or status information to return. You must define this method separately.</param>
    /// <returns type="result"/>
}
IDataSource.prototype.New = function (criteria) {
    /// <summary> The New method creates an empty landmark or landmark category item. You can use the new item as a template. This is a synchronous method.</summary>
    /// <param name="criteria" type="criteria">This is an object that specifies the type of item to create</param>
    /// <returns type="result"/>
}

function IAppManager() { 
    /// <summary>The AppManager Service API allows widgets to access and launch applications on a mobile device. The API is integrated with WRT through the device object. To use the AppManager Service API, your widget must first create a service object for it using the device.getServiceObject() method. Use Service.AppManager to identify the service provider and IAppManager to identify the supported interface: var so = device.getServiceObject("Service.AppManager", "IAppManager");</summary> 
};

IAppManager.prototype.GetList = function (criteria) {
    /// <summary> The GetList method retrieves an iterable list of either user-installed applications or all applications on the mobile device, regardless of whether they were preinstalled or installed by the user. This is a synchronous method.</summary>
    /// <param name="criteria" type="criteria">This is an object that specifies what information is returned about the applications on the device.</param>
    /// <returns type="result"/>
}
IAppManager.prototype.Cancel = function (criteria) {
    /// <summary> The Cancel method cancels an outstanding asynchronous call. If a cancel is sent, but the asynchronous call has already been completed, then result.Errorcode is set to 0 (success). This is a synchronous method.</summary>
    /// <param name="criteria" type="criteria">This is an object with the TransactionID property (number). criteria.TransactionID specifies the transaction ID of the asynchronous call to cancel. The transaction ID is the result.TransactionID value that was returned as part of the result of the initial call.</param>
    /// <returns type="result"/>
}
IAppManager.prototype.LaunchApp = function (criteria,callback) {
    /// <summary> The LaunchApp method launches an application based on a unique ID for the application (UID). It also provides a way to open a specific document (by specifying a document path), even if it is not the default file type for the application being launched. For example, you can specify a path to a document with a .txt extension to open in WordPad, even though Notepad is the default application for .txt files. The application can be launched as chained (embedded) or stand-alone. This method can be called both synchronously and asynchronously.</summary>
    /// <param name="criteria" type="criteria">The criteria object specifies the application to launch. The criteria object has three main properties: ApplicationID, CmdLine, and Options</param>
    /// <param name="callback" type="Function">The callback argument is the name of the method that is executed when an asynchronous LaunchApp call has status information to return. You must define this method separately. This argument is used only with an asynchronous LaunchApp call.</param>
    /// <returns type="result"/>
}
IAppManager.prototype.LaunchDoc = function (criteria,callback) {
    /// <summary> The LaunchDoc method launches an application based on a given document. This method automatically determines which application to launch for the specified document. The application can be launched as chained (embedded) or stand-alone. This method can be called both synchronously and asynchronously.</summary>
    /// <param name="criteria" type="criteria">This is an object that specifies which application to launch.</param>
    /// <param name="callback" type="Function">The callback argument is the name of the method that is executed when an asynchronous LaunchDoc call has status information to return. You must define this method separately. This argument is used only with an asynchronous LaunchDoc call.</param>
    /// <returns type="result"/>
}

function IMessaging() { 
    /// <summary>The Messaging Service API allows widgets to send, retrieve, and manage messages using the Messaging Center of a device. The API is integrated into WRT through the device object. To use the Messaging Service API, your widget must first createa service object for it using the device.getServiceObject() method. Use Service.Messaging to identify the service provider and IMessaging to identify the supported interface: var so = device.getServiceObject("Service.Messaging", "IMessaging");</summary> 
};

IMessaging.prototype.GetList = function (criteria) {
    /// <summary> The GetList method retrieves a list of messaging objects from the Messaging Center of the S60 device. Each object contains messaging information, that is, header and content data for a single message. This is a synchronous method. The criteria object specifies what messaging information is returned and how the returned information is sorted. The GetList method returns an object that contains the requested messaging information, an error code, and an error message. To access information about individual messages, iterate through the list of objects contained in ReturnValue attribute of the returned object.</summary>
    /// <param name="criteria" type="object">This is an object that specifies the search criteria.</param>
    /// <returns type="result"/>
}
IMessaging.prototype.RegisterNotification = function (criteria,callback) {
    /// <summary> The RegisterNotification method registers the widget to receive notifications of new incoming messages. For each new message, the method returns the header information of that message. This is an asynchronous method. result = so.IMessaging.RegisterNotification(criteria, callback); Criteria object that specifies the request for notification of new messages. The object must contain the Type property (string), and this property must contain the value NewMessage. The callback argument is the name of the method that is executed when RegisterNotification has results or status information to return. You must define this method separately. The RegisterNotification method returns an object that contains the initial return value for the asynchronous call it started. The actual notification information is returned by the callback method in the ReturnValue property of its result object. RegisterNotification retrieves new message updates until cancelled with CancelNotification (or Cancel). You can therefore have only one RegisterNotification call (one instance) pending or in use at any given time.</summary>
    /// <param name="criteria" type="object">Criteria object specifies the type and details of the message to send.</param>
    /// <param name="callback" type="function">The callback argument is the name of the method that is executed when an asynchronous Send call has status information to return. You must define this method separately.</param>
    /// <returns type="result"/>
}
IMessaging.prototype.CancelNotification = function (criteria) {
    /// <summary> The CancelNotification method cancels notification of new incoming messages. This is a synchronous method. result = so.IMessaging.CancelNotification(criteria); The criteria object specifies the request for cancelling notification of new messages. The object must contain the Type property (string), and this property must contain the value NewMessage. The CancelNotification method returns an object that contains an error code and an error message.</summary>
    /// <param name="criteria" type="object">The criteria object specifies the request for cancelling notification of new messages. The object must contain the Type property (string), and this property must contain the value "NewMessage".</param>
    /// <returns type="result"/>
}
IMessaging.prototype.Send = function (criteria,callback) {
    /// <summary> The Send method sends an SMS or MMS message. This method can be called both synchronously and asynchronously. For synchronous calls: result = so.IMessaging.Send(criteria); For asynchronous calls: result = so.IMessaging.Send(criteria, callback); Criteria object specifies the type and details of the message to send. The callback argument is the name of the method that is executed when an asynchronous Send call has status information to return. You must define this method separately. If synchronous, the method returns an object that contains an error code and an error message. If asynchronous, the method returns an object that contains a transaction ID for the callback instance, an error code, and an error message. When the asynchronous call has completed, callback returns an object that contains an error code and an error message.</summary>
    /// <param name="criteria" type="object">Criteria object specifies the type and details of the message to send.</param>
    /// <param name="callback" type="function">The callback argument is the name of the method that is executed when an asynchronous Send call has status information to return. You must define this method separately.</param>
    /// <returns type="result"/>
}
IMessaging.prototype.Cancel = function (criteria) {
    /// <summary> The Cancel method cancels an outstanding asynchronous Send or RegisterNotification call. To cancel a RegisterNotification call, use CancelNotification instead, as it provides a more convenient way of doing this. This is a synchronous method. The criteria object has TransactionID property which specifies the transaction ID of the Send or RegisterNotification call to cancel. The transaction ID is the same TransactionID value that was returned as part of the result of the initial call. The Cancel method returns an object that contains an error code and an error message.</summary>
    /// <param name="criteria" type="object">The criteria object has TransactionID property which specifies the transaction ID of the Send or RegisterNotification call to cancel. The transaction ID is the same TransactionID value that was returned as part of the result of the initial call.</param>
    /// <returns type="result"/>
}
IMessaging.prototype.ChangeStatus = function (criteria) {
    /// <summary> The ChangeStatus method changes the read status of a message. The status can be "Read", "Unread", "Replied", or "Forwarded". This is a synchronous method. result = so.IMessaging.ChangeStatus(criteria); Criteria object specifies the message whose status to change and the new status. The ChangeStatus method returns an object that contains an error code and an error message.</summary>
    /// <param name="criteria" type="object">Criteria object specifies the message whose status to change and the new status. The ChangeStatus method returns an object that contains an error code and an error message.</param>
    /// <returns type="result"/>
}
IMessaging.prototype.Delete = function (criteria) {
    /// <summary> The Delete method deletes a message. This is a synchronous method. result = so.IMessaging.Delete(criteria); The criteria object has messageId attribute that specifies the message to delete. The Delete method returns an object that contains an error code and an error message.</summary>
    /// <param name="criteria" type="object">The criteria object has messageId attribute that specifies the message to delete.</param>
    /// <returns type="result"/>
}

function ISysInfo() { 
    /// <summary>The SystemInfo Service API allows widgets to access and modify system information on a device. The API is integrated into WRT through the device object. To use the SystemInfo Service API, your widget must first create a service object for it using the device.getServiceObject() method. Use Service.SysInfo to identify the service provider and ISysInfo to identify the supported interface: var so = device.getServiceObject("Service.SysInfo", "ISysInfo");</summary> 
};

ISysInfo.prototype.GetInfo = function (criteria,callback) {
    /// <summary> The GetInfo method retrieves information about a system attribute. This method can be called both synchronously and asynchronously.</summary>
    /// <param name="criteria" type="object">This is an object that specifies the search criteria.</param>
    /// <param name="callback" type="function">The callback argument is the name of the method that is executed when an asynchronous Send call has status information to return. You must define this method separately.</param>
    /// <returns type="result"/>
}
ISysInfo.prototype.SetInfo = function (criteria) {
    /// <summary> The SetInfo method modifies the value of a system attribute. This is a synchronous method.</summary>
    /// <param name="criteria" type="object">This is an object that specifies the new value for the system attribute.</param>
    /// <returns type="result"/>
}
ISysInfo.prototype.GetNotification = function (criteria,callback) {
    /// <summary> The GetNotification method notifies the client when the value of a system attribute is changed. This is an asynchronous method.</summary>
    /// <param name="criteria" type="object">This is an object that specifies the system attribute to monitor for changes.</param>
    /// <param name="callback" type="function">The callback argument is the name of the method that is executed when a GetNotification call has results or status information to return.</param>
    /// <returns type="result"/>
}
ISysInfo.prototype.Cancel = function (criteria) {
    /// <summary> The Cancel method cancels an ongoing asynchronous call made with a SystemInfo Service API method. This is a synchronous method.</summary>
    /// <param name="criteria" type="object">This is an object with the TransactionID property (number). criteria.TransactionID specifies the transaction ID of the asynchronous call to cancel. The transaction ID is the result.TransactionID value that was returned as part of the result of the initial call.</param>
    /// <returns type="result"/>
}

function ILocation() { 
    /// <summary>The Location Service API allows widgets to retrieve information about the physical location of a device and to perform calculations based on location information. The API is integrated into WRT through the device object. To use the Location Service API, your widget must first create a service object for it using the device.getServiceObject() method. Use Service.Location to identify the service provider and ILocation to identify the supported interface: var so = device.getServiceObject("Service.Location", "ILocation");</summary> 
};

ILocation.prototype.GetLocation = function (criteria,callback) {
    /// <summary> The GetLocation method retrieves the current location of the device. This method can be called both synchronously and asynchronously. For synchronous calls: result = so.ILocation.GetLocation(criteria); For asynchronous calls: result = so.ILocation.GetLocation(criteria, callback); If synchronous, the GetLocation method returns an object that contains the requested location information, an error code, and an error message. If asynchronous, the GetLocation method returns an object that contains the initial return value for the asynchronous call it started. The actual location information is returned by the callback method in the ReturnValue property of its result object. The availability of specific location information depends on the underlying GPS technology. Other factors, such as the number of satellites available for a location fix, also affect what information can be returned. You can change the positioning system used by an S60 device from the Settings > General > Positioning > Positioning methods menu. It takes time to retrieve the initial position fix. Subsequent requests are faster. This criteria object specifies what type of device location information is returned and how. The callback argument is the name of the method that is executed when an asynchronous GetLocation call has results or status information to return. You must define this method separately. This argument is used only with an asynchronous GetLocation call. For more information about the criteria and returned object properties and how to define them refer to WDL Help documentation.</summary>
    /// <param name="criteria" type="object">This is an object that specifies what type of device location information is returned and how.</param>
    /// <param name="callback" type="function">The callback argument is the name of the method that is executed when an asynchronous GetLocation call has results or status information to return. You must define this method separately. This argument is used only with an asynchronous GetLocation call.</param>
    /// <returns type="result"/>
}
ILocation.prototype.Trace = function (criteria,callback) {
    /// <summary> The Trace method retrieves periodic updates about the current location of the device based on a predefined update interval. This is an asynchronous method. result = so.ILocation.Trace(criteria, callback); The Trace method returns an object that contains the initial return value for the asynchronous call it started. The actual location information is returned by the callback method in the ReturnValue property of its result object. Trace retrieves location updates until cancelled with CancelNotification. You can therefore have only one Trace call (one instance) pending or in use at any given time. The availability of specific location information depends on the underlying GPS technology. Other factors, such as the number of satellites available for a location fix, also affect what information can be returned. You can change the positioning system used by an S60 device from the Settings > General > Positioning > Positioning methods menu. It takes time to retrieve the initial position fix. Subsequent requests are faster. The criteria object specifies what type of device location information is returned and how. Note that these input properties are similar to what the GetLocation method uses. The callback argument is the name of the method that is executed when Trace has results or status information to return. You must define this method separately. For more information about the criteria and returned object properties and how to define them refer to WDL Help documentation.</summary>
    /// <param name="criteria" type="object">This is an object that specifies what type of device location information is returned and how. Note that these input properties are similar to what the GetLocation method uses.</param>
    /// <param name="callback" type="function">The callback argument is the name of the method that is executed when Trace has results or status information to return. You must define this method separately.</param>
    /// <returns type="result"/>
}
ILocation.prototype.Calculate = function (criteria) {
    /// <summary> The Calculate method performs mathematical calculations based on a source location and a target location. This is a synchronous method. result = so.ILocation.Calculate(criteria); The Calculate method returns an object that contains the calculation results, an error code, and an error message. The criteria object specifies the mathematical operation to perform and the input values to use in the operation. For more information about the criteria and returned object properties and how to define them refer to WDL Help documentation.</summary>
    /// <param name="criteria" type="Object">This is an object that specifies the mathematical operation to perform and the input values to use in the operation.</param>
    /// <returns type="result"/>
}
ILocation.prototype.CancelNotification = function (criteria) {
    /// <summary> The CancelNotification method cancels an outstanding asynchronous call. This is a synchronous method. result = so.ILocation.CancelNotification(criteria); The criteria object specifies whether to cancel a GetLocation call or a Trace call. The object must contain the CancelRequestType property (string) that is used to specify the type of call to cancel. The possible values for criteria.CancelRequestType are: GetLocCancel cancels an asynchronous GetLocation call. TraceCancel cancels a Trace call. The CancelNotification method returns an object that contains an error code and an error message. For more information about the criteria and returned object properties and how to define them refer to WDL Help documentation.</summary>
    /// <param name="criteria" type="object">This is an object that specifies whether to cancel a GetLocation call or a Trace call. The object must contain the CancelRequestType property (string) that is used to specify the type of call to cancel. The possible values for criteria.CancelRequestType are: "GetLocCancel" cancels an asynchronous GetLocation call. "TraceCancel" cancels a Trace call.</param>
    /// <returns type="result"/>
}

function ISensor() { 
    /// <summary>The Sensor Service API allows widgets to access data provided by the physical sensors of a device. The data from a given sensor is mapped to one or more sensor channels, which the API can listen to. The available sensors depend on the device. The API is integrated into WRT through the device object. To use the Sensor Service API, your widget must first create a service object for it using the device.getServiceObject() method. Use Service.Sensor to identify the service provider and ISensor to identify the supported interface: so = device.getServiceObject("Service.Sensor", "ISensor");</summary> 
};

ISensor.prototype.FindSensorChannel = function (criteria) {
    /// <summary> The FindSensorChannel method searches for sensor channels available on the device. This is a synchronous method. result = so.ISensor.FindSensorChannel(criteria); The criteria object specifies the search criteria. The FindSensorChannel method returns an object that contains the requested sensor channel information, an error code, and an error message.</summary>
    /// <param name="criteria" type="object">This is an object that specifies the search criteria.</param>
    /// <returns type="result"/>
}
ISensor.prototype.RegisterForNotification = function (criteria,callback) {
    /// <summary> The RegisterForNotification method registers the client to receive data from one sensor channel. This is an asynchronous method. result = so.ISensor.RegisterForNotification(criteria, callback); The RegisterForNotification method returns an object that contains the initial return value for the asynchronous call it started. The actual sensor data is returned by the callback method in the ReturnValue property of its result object.</summary>
    /// <param name="criteria" type="object">This is an object that specifies the sensor channel to listen for data.</param>
    /// <param name="callback" type="function">The callback argument is the name of the method that is executed when a RegisterForNotification call has results or status information to return. You must define this method separately.</param>
    /// <returns type="result"/>
}
ISensor.prototype.Cancel = function (criteria) {
    /// <summary> The Cancel method stops an ongoing RegisterForNotification call. This is a synchronous method. result = so.ISensor.Cancel(criteria); The criteria object has the TransactionID property which specifies the transaction ID of the RegisterForNotification call to cancel. The transaction ID is the value that was returned as part of the result of the initial call. The Cancel method returns an object that contains an error code and an error message.</summary>
    /// <param name="criteria" type="object">This is an object with the TransactionID property (number). criteria.TransactionID specifies the transaction ID of the RegisterForNotification call to cancel. The transaction ID is the result.TransactionID value that was returned as part of the result of the initial call.</param>
    /// <returns type="result"/>
}
ISensor.prototype.GetChannelProperty = function (criteria) {
    /// <summary> The GetChannelProperty method retrieves information about a sensor channel property. This is a synchronous method. result = so.ISensor.GetChannelProperty(criteria); This is an object that specifies which sensor channel property to retrieve information about. The GetChannelProperty method returns an object that contains the requested channel property information, an error code, and an error message.</summary>
    /// <param name="criteria" type="object">This is an object that specifies which sensor channel property to retrieve information about.</param>
    /// <returns type="result"/>
}

function serviceObject() { 
    /// <summary>Service Object</summary>
    /// <field name="IDataSource" type="IDataSource" >This Service API allows widgets to: access, create, and manage calendars/calendar entries, access and manage information about contacts, access and manage information about landmarks and landmark categories, add, read, and delete logging events such as call logs, messaging logs, and so forth, retrieve information (metadata) about the media files stored in the Media Gallery of a device. To use the IDataSource Service API, your widget must first create a service object for it using the device.getServiceObject() method. Use Service.Calendar or Service.Contact or Service.Landmarks or Service.Logging or Service.MediaManagement to identify the service provider and IDataSource to identify the supported interface: var so = device.getServiceObject("Service.Calendar", "IDataSource");</field>
    /// <field name="IAppManager" type="IAppManager" >The AppManager Service API allows widgets to access and launch applications on a mobile device. The API is integrated with WRT through the device object. To use the AppManager Service API, your widget must first create a service object for it using the device.getServiceObject() method. Use Service.AppManager to identify the service provider and IAppManager to identify the supported interface: var so = device.getServiceObject("Service.AppManager", "IAppManager");</field>
    /// <field name="IMessaging" type="IMessaging" >The Messaging Service API allows widgets to send, retrieve, and manage messages using the Messaging Center of a device. The API is integrated into WRT through the device object. To use the Messaging Service API, your widget must first createa service object for it using the device.getServiceObject() method. Use Service.Messaging to identify the service provider and IMessaging to identify the supported interface: var so = device.getServiceObject("Service.Messaging", "IMessaging");</field>
    /// <field name="ISysInfo" type="ISysInfo" >The SystemInfo Service API allows widgets to access and modify system information on a device. The API is integrated into WRT through the device object. To use the SystemInfo Service API, your widget must first create a service object for it using the device.getServiceObject() method. Use Service.SysInfo to identify the service provider and ISysInfo to identify the supported interface: var so = device.getServiceObject("Service.SysInfo", "ISysInfo");</field>
    /// <field name="ILocation" type="ILocation" >The Location Service API allows widgets to retrieve information about the physical location of a device and to perform calculations based on location information. The API is integrated into WRT through the device object. To use the Location Service API, your widget must first create a service object for it using the device.getServiceObject() method. Use Service.Location to identify the service provider and ILocation to identify the supported interface: var so = device.getServiceObject("Service.Location", "ILocation");</field>
    /// <field name="ISensor" type="ISensor" >The Sensor Service API allows widgets to access data provided by the physical sensors of a device. The data from a given sensor is mapped to one or more sensor channels, which the API can listen to. The available sensors depend on the device. The API is integrated into WRT through the device object. To use the Sensor Service API, your widget must first create a service object for it using the device.getServiceObject() method. Use Service.Sensor to identify the service provider and ISensor to identify the supported interface: so = device.getServiceObject("Service.Sensor", "ISensor");</field> 
};


function device() { 
    /// <summary>The device object is a built-in JavaScript object in the widget engine. It was introduced in WRT 1.1 to allow widgets access to S60 Platform Services through Service APIs. The device object is used to create service objects for specific Service APIs. These service objects can then be used to access the services made available through the Service APIs.</summary> 
};

device.getServiceObject = function (provider,interface) {
    /// <summary> The getServiceObject method creates an object that is used to access the services made available through a Service API. This object is referred to as a service object.</summary>
    /// <param name="provider" type="String">This is a text string that defines the service provider name, that is, the name of the type of service object to create. Possible values : "Service.AppManager", "Service.SysInfo", "Service.Sensor", "Service.Messaging", "Service.MediaManagement", "Service.Logging", "Service.Location", "Service.Calendar", "Service.Contact"</param>
    /// <param name="interface" type="String">This is a text string that defines the supported interface for the specified service provider. Possible values : "IAppManager", "ISysInfo", "ISensor", "IMessaging", "IDataSource", "ILocation"</param>
    /// <returns type="serviceObject"/>
}
