var FILESDIR = 'files',
    VALIDFORMATS = [ "txt", "xml", "json" ];
    format = getFormat();

function getFormat(format) {
    var data = window.location.search.slice(1).toLowerCase();
    return VALIDFORMATS.indexOf(data) < 0 ? "txt" : data;
}

function remoteapi(resource, type) {
    return FILESDIR + "/" + resource + '.' + type;
}

function getresource(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            // The content type can be obtained this way:
            // var type = request.getResponseHeader('Content-Type');
            var fn = window["show" + format];
            fn.call(fn, request);

            // callback.call(callback, request);
        }
        return undefined;
    };
    // Send request
    request.send(null);
}

function showtxt(request) {
    alert(request.responseText);
}

function showxml(request) {
    var xml = request.responseXML;
    var elements = xml.firstChild.children;
    var element;
    var txt = '';
    for (var i = 0 ; i < elements.length ; i++) {
        element = elements[i];
        txt += element.nodeName + ': ' + element.textContent + '\n';
    }
    alert(txt);
}

function showjson(request) {
    var obj = JSON.parse(request.responseText);
    var txt = '';
    for (var key in obj) {
        txt += `${key}: ${obj[key]}\n`;
    }
    alert(txt);
}

function process(request) {
    var fn = window["show" + format];
    fn.call(fn, request);
}

window.addEventListener("load", function () {
    var resource = remoteapi('sample', format);
    var dorequest = getresource.bind(this, resource, process);
       button = document.getElementsByTagName("button").item(0);
    button.innerHTML = "Do Ajax using " + format;
    button.onclick = dorequest;
});
