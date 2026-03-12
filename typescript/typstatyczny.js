var Runner = /** @class */ (function () {
    function Runner(typeName) {
        this.typeName = typeName;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typeName;
    };
    return Runner;
}());
var a = new Runner("aaa");
var b = new Runner("bbb");
b.run();
a.run();
console.log(Runner.lastRunTypeName);
