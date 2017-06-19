function main() {
    var queryString = decodeURIComponent(window.location.search).slice(1),
        qsFiltered,
        value;
    qsFiltered = queryString.split("&").filter(function (x) {
        return x.split("=")[0] === "value";
    })
    value = qsFiltered[0];
    value = value ? value.split("=")[1] : "null";
    console.log(somefuncs.somefunc(value));
}

window.onload = main;
