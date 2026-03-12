function getEmployee(id){


    return {

        name: "Jan",
        age: 35,
        address: "jasna 14",
        city: "warszawa"
    };
}
const {name: fullName, age} = getEmployee(22);
console.log("employee", fullName, age)

function getWorkInfo(id){
    return [id,"jasna","warszawa"];
}
const [id,officeAdress] = getWorkInfo(33);
console.log("pracownik", id, officeAdress);