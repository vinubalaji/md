/*
 * JS for screen8_FBoutput generated by Exadel Tiggzi
 *
 * Created on: Saturday, May 05, 2012, 06:56:16 PM (PDT)
 */
/************************************
 * JS API provided by Exadel Tiggzi  *
 ************************************/
/* Setting project environment indicator */
Tiggr.env = "bundle"; /* Object & array with components "name-to-id" mapping */
var n2id_buf = {};
if ("n2id" in window && n2id != undefined) {
    $.extend(n2id, n2id_buf);
} else {
    var n2id = n2id_buf;
}

function pageItem(pageName, pageLocation) {
    this.name = pageName;
    this.location = pageLocation;
}
Tiggr.AppPages = [
new pageItem('choosedoc2', 'screen-EABD.html'), new pageItem('screen1', 'screen-0C6D.html'), new pageItem('screen2', 'screen-6E3F.html'), new pageItem('screen3', 'screen-800B.html'), new pageItem('screen4', 'screen-EC2C.html'), new pageItem('screen5', 'screen-F43B.html'), new pageItem('screen6', 'screen-E014.html'), new pageItem('screen7', 'screen-A28A.html'), new pageItem('screen8_FBoutput', 'screen-4F9F.html'), new pageItem('current', 'screen-4F9F.html')];
Tiggr.CurrentScreen = 'j_0';

function navigateTo(outcome, useAjax) {
    Tiggr.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Tiggr.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Tiggr.adjustContentHeightWithPadding();
}

function unwrapAndApply(selector, content) {
    Tiggr.unwrapAndApply(selector, content);
}

function setDetailContent(pageUrl) {
    Tiggr.setDetailContent(pageUrl);
}
/**********************
 * SECURITY CONTEXTS  *
 **********************/
/*************************
 *      SERVICES          *
 *************************/
var GetFBToken = new Tiggr.RestService({
    'url': 'https://graph.facebook.com/oauth/access_token',
    'dataType': 'json',
    'type': 'get',
});
var GetFBData = new Tiggr.RestService({
    'url': 'https://graph.facebook.com/search',
    'dataType': 'json',
    'type': 'get',
});
var RESTService = new Tiggr.RestService({
    'url': '',
    'dataType': 'json',
    'type': 'get',
});
/*************************
 * NONVISUAL COMPONENTS  *
 *************************/
var datasources = [];
/************************
 * EVENTS AND HANDLERS  *
 ************************/
// screen onload
screen_4F9F_onLoad = j_0_onLoad = function() {
    createSpinner("files/resources/lib/jquerymobile/images/ajax-loader.gif");
    for (var idx = 0; idx < datasources.length; idx++) {
        datasources[idx].__setupDisplay();
    }
    screen_4F9F_elementsExtraJS();
    j_0_windowEvents();
    screen_4F9F_elementsEvents();
}
// screen window events
screen_4F9F_windowEvents = j_0_windowEvents = function() {
    $('#j_0').bind('pageshow orientationchange', function() {
        adjustContentHeightWithPadding();
    });
}
// screen elements extra js
screen_4F9F_elementsExtraJS = j_0_elementsExtraJS = function() {
    // screen (screen-4F9F) extra code
}
// screen elements handler
screen_4F9F_elementsEvents = j_0_elementsEvents = function() {
    $("a :input,a a,a fieldset label").live({
        click: function(event) {
            event.stopPropagation();
        }
    });
}
$("body").undelegate("pagebeforeshow").delegate("#j_0", "pagebeforeshow", function(event, ui) {
    j_0_onLoad();
});