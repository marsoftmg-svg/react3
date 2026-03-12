let val1 = 1;
val1 = 2;
if(true) {
    let val2 = 3;
   // var val2 = 3; globalny zasieg
    val2 = 4;

}
console.log(val1);
//console.log(val2);

// var globalnie
// let lokalnie chyba ze na gorze