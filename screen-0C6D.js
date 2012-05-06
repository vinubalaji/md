/*
 * JS for screen1 generated by Exadel Tiggzi
 *
 * Created on: Saturday, May 05, 2012, 06:25:53 PM (PDT)
 */
/************************************
 * JS API provided by Exadel Tiggzi  *
 ************************************/
/* Setting project environment indicator */
Tiggr.env = "bundle"; /* Object & array with components "name-to-id" mapping */
var n2id_buf = {
    'mobilepanel4': 'j_26',
    'mobileimage3': 'j_27',
    'mobilelabel12': 'j_28',
    'mobilelabel14': 'j_29',
    'mobiletextarea10': 'j_30',
    'mobilelabel16': 'j_31',
    'mobiletextarea12': 'j_32',
    'mobilebutton4': 'j_33'
};
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
new pageItem('choosedoc1', 'screen-A28A.html'), new pageItem('choosedoc2', 'screen-EABD.html'), new pageItem('screen1', 'screen-0C6D.html'), new pageItem('screen2', 'screen-6E3F.html'), new pageItem('screen3', 'screen-800B.html'), new pageItem('screen4', 'screen-EC2C.html'), new pageItem('screen5', 'screen-F43B.html'), new pageItem('current', 'screen-0C6D.html')];
Tiggr.CurrentScreen = 'j_22';

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
screen_0C6D_onLoad = j_22_onLoad = function() {
    createSpinner("files/resources/lib/jquerymobile/images/ajax-loader.gif");
    Tiggr.__registerComponent('mobilepanel4', new Tiggr.BaseComponent({
        id: 'mobilepanel4',
        context: '#j_25'
    }));
    Tiggr.__registerComponent('mobileimage3', new Tiggr.BaseComponent({
        id: 'mobileimage3',
        context: '#j_25'
    }));
    Tiggr.__registerComponent('mobilelabel12', new Tiggr.BaseComponent({
        id: 'mobilelabel12',
        context: '#j_25'
    }));
    Tiggr.__registerComponent('mobilelabel14', new Tiggr.BaseComponent({
        id: 'mobilelabel14',
        context: '#j_25'
    }));
    Tiggr.__registerComponent('mobiletextarea10', new Tiggr.BaseComponent({
        id: 'mobiletextarea10',
        context: '#j_25'
    }));
    Tiggr.__registerComponent('mobilelabel16', new Tiggr.BaseComponent({
        id: 'mobilelabel16',
        context: '#j_25'
    }));
    Tiggr.__registerComponent('mobiletextarea12', new Tiggr.BaseComponent({
        id: 'mobiletextarea12',
        context: '#j_25'
    }));
    Tiggr.__registerComponent('mobilebutton4', new Tiggr.BaseComponent({
        id: 'mobilebutton4',
        context: '#j_25'
    }));
    for (var idx = 0; idx < datasources.length; idx++) {
        datasources[idx].__setupDisplay();
    }
    screen_0C6D_elementsExtraJS();
    j_22_windowEvents();
    screen_0C6D_elementsEvents();
}
// screen window events
screen_0C6D_windowEvents = j_22_windowEvents = function() {
    $('#j_22').bind('pageshow orientationchange', function() {
        adjustContentHeightWithPadding();
    });
}
// screen elements extra js
screen_0C6D_elementsExtraJS = j_22_elementsExtraJS = function() {
    // screen (screen-0C6D) extra code
}
// screen elements handler
screen_0C6D_elementsEvents = j_22_elementsEvents = function() {
    $("a :input,a a,a fieldset label").live({
        click: function(event) {
            event.stopPropagation();
        }
    });
    $('#j_25 [name="mobilebutton4"]').die().live({
        vclick: function() {
            if (!$(this).attr('disabled')) {
                Tiggr.navigateTo('screen2', {
                    reverse: false
                });
            }
        },
    });
}
$("body").undelegate("pagebeforeshow").delegate("#j_22", "pagebeforeshow", function(event, ui) {
    j_22_onLoad();
});