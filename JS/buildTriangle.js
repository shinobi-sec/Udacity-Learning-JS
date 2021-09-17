function makeLine(length) {
    var line = "";
    for (var i = 1; i <= length; i++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(line_length) {
    var triangle = "",
        j = 1;
    for (j = 1; j <= line_length; j++) {
        triangle = triangle + makeLine(j);
    }
    return triangle;
}

function laugh(args) {
    output = buildTriangle(args);
    console.log(output);
}