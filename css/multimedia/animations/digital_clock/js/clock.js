var dir='./img';
function start() {
    setImage('sep1', getImagePath('s'));
    setImage('sep2', getImagePath('s'));
    refresh();
    timer = setInterval('refresh();', 1000);
}
function getImagePath(a) {
    return dir + '/' + a + '.png';
}
function setImage (name, image) {
    eval("window.document." + name + ".src='" + image + "'");
}
function setTimeImages(imaged, imageu, time, realtime) {
    // TODO: Eval is evil
    var currslice = eval('realtime.get' + time + '();');
    var uds = currslice % 10;
    var dec = (currslice - uds) / 10;
    setImage(imaged, getImagePath(dec));
    setImage(imageu, getImagePath(uds));
}
function refresh() {
    var currtime=new Date();
    setTimeImages('dh', 'uh', 'Hours', currtime);
    setTimeImages('dm', 'um', 'Minutes', currtime);
    setTimeImages('ds', 'us', 'Seconds', currtime);
}
