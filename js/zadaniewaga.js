const allTrucks = [2,5,7,10];  //24
const initialCapacity = 0;

const all = allTrucks.reduce((totalCapacity, currentCapacity) => {
    totalCapacity = totalCapacity + currentCapacity;
    return totalCapacity;
}, initialCapacity);

// nowocześniej
const all2 = allTrucks.reduce((acc,cur)=> acc + cur,0)

console.log(all)
console.log(all2)

const trucks = [
    {id: 1, tonnage:2},
    {id: 2, tonnage:5},
    {id: 3, tonnage:7},
    {id: 4, tonnage:10},
];

const total = trucks.reduce((acc,truck)=> acc + truck.tonnage,0);  // pokazuje 3 razy 24
console.log(total)

const byTonnage = trucks.reduce((acc,truck)=> {
    const key = truck.tonnage >=7 ? "ciężki":"lekki";
    acc[key] = acc[key] || [];
    acc[key].push(truck);
    return acc;

},{});

console.log(byTonnage);

