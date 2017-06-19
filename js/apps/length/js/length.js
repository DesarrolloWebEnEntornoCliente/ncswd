function length(string) {
    var i = 0;
    string = string + "";
    while (string[i]) {
        i = i + 1;
    }
    return i;
}
