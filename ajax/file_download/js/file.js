var $ = document.getElementById.bind(document);

function showprogress(loaded, total) {
    var progress = $("progress");
    progress.innerHTML = Math.round(loaded / total * 100) + "%";
}

function getinfo(url, method, callback) {
    var request = new XMLHttpRequest();

    request.open(method, url);
    request.onprogress = function(e) {
        e.lengthComputable && showprogress(e.loaded, e.total);
    };
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            // Se puede obtener el tipo de contenido con:
            //var type = request.getResponseHeader('Content-Type');
            callback(request);
        }
    };
    request.send(null);
}

function process(request) {
    alert (request.responseText.length + " bytes downloaded");
}

function downloadfile() {
    var fileurl = $("fileurl").value;
    getinfo(fileurl, "POST", process);
}

window.onload = function () {
    document.getElementsByTagName("button")[0].onclick = downloadfile;
};
