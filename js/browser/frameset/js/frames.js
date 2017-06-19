var parent = window.parent;

parent.frame2.document.formulario.boton.onclick = function() {
    var formulario = parent.frame1.document.formulario;
    var color = formulario.color.value;
    var marco = formulario.marcos.value;
    parent.frames[marco].document.bgColor = "'" + color + "'"; 
};

