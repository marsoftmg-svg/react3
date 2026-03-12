function letMeKnowWhenComplete(size, callback) {
    return new Promise(resolve => {
        setTimeout(() => {
            var reducer = 0;
                        for (var i = 1; i < size; i++) {
                reducer = Math.sin(reducer * i);
            }
            resolve();
        }, 0);
    }).then(callback);
}

letMeKnowWhenComplete(100000000000, function() { 
    console.log("Kompletny!"); 
});
console.log("Tu sobie działamy podczas obliczeń")