function throwError(message) {
    throw new Error(message);
}
function process(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
    else {
        var impossible = value;
    }
}
