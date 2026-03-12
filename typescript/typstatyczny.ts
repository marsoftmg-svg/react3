class Runner {
    static lastRunTypeName: string // wspólne dla wszystkich instancji
    constructor(private typeName: string){}

    run() {
        Runner.lastRunTypeName = this.typeName;
    }
}

const a = new Runner("aaa");
const b = new Runner("bbb");

b.run();
a.run();
console.log(Runner.lastRunTypeName);