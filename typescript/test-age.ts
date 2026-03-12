interface User {
    name: string;
    age: number;
}
function canDrive(usr: User){
    console.log("user is ", usr.name);
    if (usr.age >= 16) {
        console.log("allow drive");

    }
    else{
        console.log("do not allow to drive");
    }
}
const tom = {
    name:"tom",
    age: 43
}
const anna = {
    name:"anna",
    age: 23,
    gender: "female"
}
canDrive(tom);
canDrive(anna);
