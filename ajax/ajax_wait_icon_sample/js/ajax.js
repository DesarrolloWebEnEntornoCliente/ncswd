const SAMPLETYPE = 'cgi';
const FILESDIR = 'cgi-bind/';

var $ = document.getElementById.bind(document);

function init() {
  showbouncer(false);
}

function remotefile(res, type) {
  return FILESDIR + res + '.' + type;
}

function showbouncer(flag) {
  var val = flag ? "visible" : "hidden";
  $("result").style.visibility = val;
}

function getinfo(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      // Content type can be obtained this wat:
      //var type = request.getResponseHeader('Content-Type');
      showbouncer(false);
      callback(request);
    }
  };
  request.send(null);
  showbouncer(true);
}

function showcgi(request) {
  var text = request.responseText;
  alert(text);
}

function process(request) {
  var funcall = 'show' + SAMPLETYPE + '(request)';
  eval(funcall);
}

function ej_ajax() {
  getinfo(remotefile('sample', SAMPLETYPE) + "?type=" + SAMPLETYPE, process);
}
