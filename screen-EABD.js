/*
 * JS for choosedoc2 generated by Exadel Tiggzi
 *
 * Created on: Saturday, May 05, 2012, 06:25:53 PM (PDT)
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
new pageItem('choosedoc1', 'screen-A28A.html'), new pageItem('choosedoc2', 'screen-EABD.html'), new pageItem('screen1', 'screen-0C6D.html'), new pageItem('screen2', 'screen-6E3F.html'), new pageItem('screen3', 'screen-800B.html'), new pageItem('screen4', 'screen-EC2C.html'), new pageItem('screen5', 'screen-F43B.html'), new pageItem('current', 'screen-EABD.html')];
Tiggr.CurrentScreen = 'j_65';

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
    'url': 'https://graph.facebook.com/me',
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
screen_EABD_onLoad = j_65_onLoad = function() {
    createSpinner("files/resources/lib/jquerymobile/images/ajax-loader.gif");
    for (var idx = 0; idx < datasources.length; idx++) {
        datasources[idx].__setupDisplay();
    }
    screen_EABD_elementsExtraJS();
    j_65_windowEvents();
    screen_EABD_elementsEvents();
}
// screen window events
screen_EABD_windowEvents = j_65_windowEvents = function() {
    $('#j_65').bind('pageshow orientationchange', function() {
        adjustContentHeightWithPadding();
    });
}
// screen elements extra js
screen_EABD_elementsExtraJS = j_65_elementsExtraJS = function() {
    // screen (screen-EABD) extra code
}
// screen elements handler
screen_EABD_elementsEvents = j_65_elementsEvents = function() {
    $("a :input,a a,a fieldset label").live({
        click: function(event) {
            event.stopPropagation();
        }
    });
}
$("body").undelegate("pagebeforeshow").delegate("#j_65", "pagebeforeshow", function(event, ui) {
    j_65_onLoad();
});