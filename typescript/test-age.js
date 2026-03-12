function canDrive(usr) {
    console.log("user is ", usr.name);
    if (usr.age >= 16) {
        console.log("allow drive");
    }
    else {
        console.log("do not allow to drive");
    }
}
var tom = {
    name: "tom",
    age: 43
};
var anna = {
    name: "anna",
    age: 23,
    gender: "female"
};
canDrive(tom);
canDrive(anna);
