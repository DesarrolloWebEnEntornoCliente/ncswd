const SAMPLETYPE = 'cgi'; 
const FILESDIR = 'cgi-bin/'; 

function remotefile(res, type) {
  return FILESDIR + res + '.' + type; 
}

function getinfo(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      // Se puede obtener el tipo de contenido con:
      //var type = request.getResponseHeader('Content-Type');
      callback(request);
    }
  };
  request.send(null);
}

function showcgi(request) {
  var text = request.responseText;
  alert(text);
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
  var json = JSON.parse(request.responseText);
  var txt = '';
  for (var i in json) {
    txt += i + ': ' + json[i] + '\n';
  }
  alert(txt);
}

function process(request) {
  var funcall = 'show' + SAMPLETYPE + '(request)';
  eval(funcall);
}

function showtype() {
  document.getElementById("type").innerHTML = SAMPLETYPE;
}

function ajax() {
  getinfo(remotefile('sample', SAMPLETYPE) + "?type=" + SAMPLETYPE, process);
}
