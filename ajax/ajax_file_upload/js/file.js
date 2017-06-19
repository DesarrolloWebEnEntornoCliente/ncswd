function showprogress(loaded, total) {
    var progress = document.getElementById("progress");
    progress.innerHTML = Math.round(loaded / total * 100) + "%";
}

function getinfo(url, method, callback) {
    var request = new XMLHttpRequest();
    var fd = new FormData();

    fd.append("unfichero", document.getElementById("file").files[0]);
    request.open(method, url);
    request.upload.onprogress = function(e) {
        e.lengthComputable && showprogress(e.loaded, e.total);
    };
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            // Se puede obtener el tipo de contenido con:
            //var type = request.getResponseHeader('Content-Type');
            callback(request);
        }
    };
    request.send(fd);
}

function process(request) {
    alert ("File uploaded to " + request.responseText);
}

function uploadfile() {
    var fileurl = document.getElementById("url").value;
    getinfo(fileurl, "POST", process);
}

window.onload = function () {
    document.getElementsByTagName("button")[0].onclick = uploadfile;
};
