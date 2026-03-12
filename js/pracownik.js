function getEmployee(id){
    return {
        name: "Jan",
        age: 35,
        address: "Jasna 14",
        city: "Warszawa"
    };
}
//const {name: fullName, age} = getEmployee(22);
//console.log("employee", fullName, age)

function getWorkInfo(id){
    return [id,"Jasna","Warsaw"];
}

const [id, officeAddress] = getWorkInfo(33);
console.log("pracownik", id, officeAddress);

//const {name = "nieznany", salary = 0} = getEmployee(44);

const {name, age, ...rest} = getEmployee(99); // reszta na słowniku, obiekcie, tablicach
console.log(rest)





