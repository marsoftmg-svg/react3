const allTrucks = [2,5,7,10];
const initialCapacity = 0;

const all = allTrucks.reduce((totalCapacity, currentCapacity) => {
    totalCapacity = totalCapacity + currentCapacity;
    return totalCapacity;
}, initialCapacity);

// nowocześniej
const all2 = allTrucks.reduce((acc,cur)=> acc + cur,0)

console.log(all)
console.log(all2)
