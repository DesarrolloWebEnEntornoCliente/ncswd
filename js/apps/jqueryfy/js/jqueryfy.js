const CSSPATH = "css/styles.css";
const JQUERYURL = "http://code.jquery.com/jquery-3.2.1.min.js";
var script = document.createElement('script');
script.src = JQUERYURL;
script.onload = function () {
    $(function() {
        $("body").append($("<p>Hello world!</p>").addClass("menu"));
        $("p.menu").click(function() {
            $(this).removeClass("menu");
        });
    });
};
document.head.appendChild(script);
var link = document.createElement('link');
link.rel = "stylesheet";
link.type = "text/css";
link.href = CSSPATH;
link.media = "all";
link.title = "Styles";
link.charset = "utf-8";
document.head.appendChild(link);
