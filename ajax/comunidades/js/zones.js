var HTTP = {
    OK: 200
};
var AJAX = {};
var $ = document.getElementById.bind(document);

AJAX.UNSENT = 0;
AJAX.OPENED = 1;
AJAX.HEADERS_RECEIVED = 2;
AJAX.LOADING = 3;
AJAX.DONE = 4;

AJAX.getXHR = function() {
    try {
        var xhr = window.XMLHttpRequest && new XMLHttpRequest();
        return xhr || new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
        throw new Error("This browser does not support Ajax");
    }
};

AJAX.Loader = function (url, method, callback, errorHandler, processingImg) {
    this.request = AJAX.getXHR();
    this.url = url;
    this.method = method || "GET" ;
    this.onload = callback || this.defaultCallback;
    this.onerror = errorHandler || this.defaultErrorHandler;
    this.processingImg = processingImg;
    this.processing();
    this.loadcontent(url, this.method);
};

AJAX.Loader.prototype = {
    loadcontent: function (url, method, payload) {
        // TODO. Add timeout
        try {
            var request = this.request;
            request.onreadystatechange = this.onreadystate.bind(this);
            request.open(method, url, true);
            this.processing(true);
            request.send(payload || null);
        } catch (err) {
            this.onerror.call(this);
        }
    },
    onreadystate: function() {
        // TODO. Remove eval
        var request = this.request;
        if (request.readyState === AJAX.DONE) {
            var func = request.status === HTTP.OK ? "load" : "error";
            this.processing();
            eval("this.on" + func + ".call(this)");
        }
    },
    processing: function (on) {
        // TODO. Avoid style
        var procimg = this.processingImg;
        if (procimg) {
            procimg.style.visibility = on ? "visible" : "hidden";
        }
    },
    defaultCallback: function() {
        console.info("Server response - " + this.request.responseText);
    },
    defaultErrorHandler: function() {
        var req = this.request;
        console.error("Server error - ReadyState: " + req.readyState +
                                " - Status: " + req.status +
                                " - Headers: " + req.getAllResponseHeaders());
    },
};

// Helpers
function removeallchildren(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}
// Page
function Page() {
    this.zones = $("zones");
    this.province = $("province");
    this.code = $("postalcode");
    this.processing = $("processing");

    this.zones.onchange = this.loadProvinces;
    this.provinces.onchange = this.loadCodes;
    this.loadZones();
    this.loadProvince();
    this.loadCodes();
};

Page.prototype = {
    MSGS: {
        postalCode: (province, code) =>
            `Code of ${province} is ${code}`
    },
    ERRS: {
        fatalError: () =>
            "There is a problem with our service. Please try again later"
    },
    fillSelect: function(select, list) {
        removeallchildren(select);
        list.forEach(function (o) {
            if (o) {
                var op = document.createElement("option");
                op.appendChild(document.createTextNode(o));
                select.appendChild(op);
            }
        });
    },
    loadZones: function() {
        // TODO. Here is the problem: AJAX.Loader receives the handler but those belong to Page
        new AJAX.Loader("files/zones.txt", "GET", this.handleZones, this.handleError, this.processing);
    },
    showZones: function(zones) {
        try {
            var list = zones.split("\n");
            this.fillSelect(this.zones, list);
        } catch (err) {
            this.handleError();
        }
    },
    loadProvince: function() {
        new AJAX.Loader("files/zones.xml", "GET", this.handleProvinces, this.handleError, this.processing);
    },
    showProvinces: function(provincessxml) {
        try {
            var zones = this.zones;
            var zone = zones.options[zones.selectedIndex].value;
            zone = provincesxml.getElementById(zone);
            removeallchildren(this);
            this.fillSelect(this.provinces, Array.from(zone.children).map(function (e) {
                return e.textContent;
            }));
            this.loadCodes();
        } catch (err) {
            this.handleError();
        }
    },
    loadCodes: function() {
        new AJAX.Loader("files/codes.json", "GET", this.handleCodes, this.error, this.processing);
    },
    showCode: function(codes) {
        var provinces = this.provinces;
        var province = province.options[provinces.selectedIndex].value;
        this.code.innerHTML = this.MSGS.postalCode(province, codes[province]);
    },
    // Handlers
    handleError: function() {
        // TODO. Factorize
        if (this.request) {
            // Inform the user based on status code
            console.error(this.request.status);
        } else {
            // Inform the user of fatal error
            console.error(this.ERRS.fatalError());
        }
    },
    handleZones: function() {
        this.showZones(this.request.responseText);
    },
    handleProvinces: function() {
        this.showProvinces(this.request.responseXML);
    },
    handleCodes: function() {
        try {
            this.showCode(JSON.parse(this.request.response));
        } catch (err) {
            this.handleError();
        }
    },
};

window.onload = function() {
    Page = new Page();
};
