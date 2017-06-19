var $ = document.querySelectorAll.bind(document);

addEventListener("load", function() {
    const elementList = ["apiurl",
                         "apis",
                         "apilisttemplate",
                         "call",
                         "reset",
                         "message",
                         "messagetemplate",
                         "planets",
                         "planetstemplate",
    ];
    const elements = _.object(_.map(elementList, (x) => [x, $(`#${x}`).item(0)]));
    const MSGS = {
        invalidAPIType: "Invalid API Type",
        noDataReceived: "No data received. Review URL",
        invalidDataReceived: "No data received. Review URL",
        calling: "Calling API"
    };
    const myAPIs = [ "http://bitcoinshell.mooo.com/users/nuriem/sop_jsonp_sample/api/",
                     "http://test.aula.lisper.es/UT7/sop_jsonp_sample/api/"
    ];
    const APIDIR = "api";
    const HTTP = {
        OK: 200,
    };
    // Helpers
    var array2arrayOfPairs = function(array) {
        return _.map(array, (x, i) => [ [ "value", i ], [ "name", x] ]);
    };
    var array2arrayOfObjects = function(array) {
        return _.map(array2arrayOfPairs(array), (x) => _.object(x));
    };
    var resourcePath = function(path) {
        var pathToAPI = path.toString().split("?")[0].split("/").slice(0,-1).join("/");
        return `${pathToAPI}/${APIDIR}/`;
    };
    var render = function(template, element, data) {
        var compile = _.template(template.innerHTML);
        element.innerHTML = compile(data);
    };
    var showMessage = function(message = "") {
        render(elements.messagetemplate, elements.message, { message: message });
    };
    var clearMessage = showMessage.bind("");
    var clearPlanetsList = function() {
        render(elements.planetstemplate, elements.planets, { planets: [] });
    };
    var addHandlers = function(table) {
        var programEvents = function (object, events) {
            _.each(events, (handler, event) =>
                object.addEventListener(event, handler));
        };
        _.each(table, (events, object) =>
            programEvents(elements[object], events));
    };
    // Remote calls
    var remoteXML = function(callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', elements.apiurl.value);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === xhr.DONE) {
                clearMessage();
                if (xhr.status === HTTP.OK ) {
                    callback(xhr.responseXML);
                } else {
                    showMessage(MSGS.noDataReceived);
                }
            } else {
                showMessage(MSGS.calling);
            }
        };
        xhr.send(null);
    };
    var remoteJSONP = function(url) {
          var script = NE();
          script.src = elements.apiurl.value;
          $("body").appendChild(script);
    };
    var populateOptions = function (list, options) {
        var script = document.createElement("script");
        script.src = elements.apiurl.value;
        try {
            $("body").item(0).appendChild(script);
        } catch (e) {
            showMessage;
        };
    };
    // Load
    var loadPlanets = function(data) {
        var xmlFn = (x) => x.attributes.name.value;
        var isXML = data instanceof XMLDocument;
        var planets = isXML ? _.map(data.getElementsByTagName("planet"), xmlFn)
                            : Object.keys(data);
        var planetList = { "planets": array2arrayOfObjects(planets) };
        render(elements.planetstemplate, elements.planets, planetList);
    };
    var APITYPES = { "json": remoteJSONP,
                     "xml": remoteXML.bind(this, loadPlanets)
    };
    // Events
    var callHandler = function(e) {
        var apiType = elements.apiurl.value.split(".").slice(-1);
        var apiFunc = APITYPES[apiType];
        clearPlanetsList();
        clearMessage();
        if (apiFunc) {
            apiFunc();
        } else {
            showMessage(MSGS.invalidAPIType);
        }
    };
    var resetHandler = function(e) {
        var current = resourcePath(document.location);
        var apis = _.uniq([ current ].concat(myAPIs));
        var data = { apilist: array2arrayOfObjects(apis)};
        elements.apiurl.size = 90;
        elements.apiurl.value = current;
        render(elements.apilisttemplate, elements.apis, data);
    };
    const eventTable = {
        call: { click: callHandler },
        reset: { click: resetHandler }
    };
    var init = function() {
        eventTable.reset.click();
        addHandlers(eventTable);
        window.loadPlanets = loadPlanets;
    };
    init();
});
