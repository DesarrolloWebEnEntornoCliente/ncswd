var thewindow;

function openwindow() {
    thewindow = window.open('', 'childwindow', 'top=100,left=200,width=300,height=200,location=no,menubar=yes');
    var wdocument = thewindow.document;
    wdocument.write("<html>");
    wdocument.write("<head>");
    wdocument.write("<title>New window</title>");
    wdocument.write("</head>");
    wdocument.write("<body>");
    wdocument.write("<h1>I am a new window</h1>");
    wdocument.write('<input type="button" value="Close" onclick="window.close();"/>');
    wdocument.write("</body>");
    wdocument.write("</html>");
}

function sendURL(uri) {
    thewindow.location = uri;
}
