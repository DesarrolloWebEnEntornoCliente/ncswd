function showProperty(property, object) {
    document.write(`Property ${property} has value ${object[property]}<br>`);
}
function showWindowProperties() {
   for (var p in window) {
       showProperty(p, window);
   }
}
function showDocumentProperties() {
   for (var p in document) {
       showProperty(p, document);
   }
}
