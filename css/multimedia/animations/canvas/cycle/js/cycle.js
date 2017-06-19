var img = new Image();

// Variables de usuario - personalizamos estas para cambiar la imagen cuando inicie el desplazamiento

// direccion y velocidad.

img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30; //lower is faster
var scale = 1.05;
var y = -4.5; //vertical offset

// Program Base

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width*scale;
    imgH = img.height*scale;
    if (imgW > CanvasXSize) { x = CanvasXSize-imgW; } // image larger than canvas
    if (imgW > CanvasXSize) { clearX = imgW; } // image larger than canvas
    else { clearX = CanvasXSize; }
    if (imgH > CanvasYSize) { clearY = imgH; } // image larger than canvas
    else { clearY = CanvasYSize; }
    //Obtenemos el elemento canva
    ctx = document.getElementById('canvas').getContext('2d');
    //Establecemos la tasa de repeticiones
    return setInterval(draw, speed);
}

function draw() {
    //Limpiamos los Canvas
    ctx.clearRect(0,0,clearX,clearY);
    //If image is <= Canvas Size
    if (imgW <= CanvasXSize) {
        //reseteamos, iniciamos desde el principio
        if (x > (CanvasXSize)) { x = 0; }
        //dibujamos una imagen adicional
        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); }
    }
    //Si la imagen es > tamaño del Canvas
    else {
        //reseteamos, iniciamos desde el principio
        if (x > (CanvasXSize)) { x = CanvasXSize-imgW; }
        //dibujamos una imagen adicional
        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-imgW+1,y,imgW,imgH); }
    }
    //Dibujamos la imagen
    ctx.drawImage(img,x,y,imgW,imgH);
    //aumentamos al movimiento
    x += dx;
}
