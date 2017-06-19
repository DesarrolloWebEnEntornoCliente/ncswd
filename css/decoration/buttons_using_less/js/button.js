/*jslint
    browser : true */
function gotolink(link) {
    window.location = link;
}

window.onload = function () {
    document.getElementsByClassName("btnpara").item(0).onclick = 
        gotolink.bind(this, "http://lesscss.org");
};
