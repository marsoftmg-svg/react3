function getLength(arg) {
    if (arg.hasOwnProperty("length")) {
        return arg["length"];
    }
    return 0;
}
console.log(getLength([1, 2, 3]));
console.log(getLength("Hello"));
