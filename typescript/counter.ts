class Counter {
    #value = 0
    increment() {
        this.#value++;

    }
getValue(){
    return this.#value;
}
}