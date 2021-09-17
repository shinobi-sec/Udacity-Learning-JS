function emotions(myString, myFunc) {
    console.log("I am " + myString + ', ' + myFunc(2));

}


emotions("happy", function laugh(args) {
    var string = '';
    for (i = 1; i <= args; i++) {
        string += 'ha';
    }
    return string + '!';
});