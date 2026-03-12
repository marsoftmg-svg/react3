function throwError(message: string): never {
    throw new Error(message);
}

function process(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (typeof value === "number") {
        console.log(value.toFixed(2));
    } else {
        const impossible: never = value;
    }
}