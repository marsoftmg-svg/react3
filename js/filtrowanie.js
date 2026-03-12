const filterItems= [
    {name:"john", age:20},
    {name:"alicia", age:22},
    {name:"john", age:40},
]

const results = filterItems.filter((item,index) => {
    console.log(index);
    return item.name ==="john" && item.age> 30
});
console.log(results)

const results2 = filterItems.filter((item,index) => {
    console.log(index);
    return (item.name ==="john" ||  item.name ==="alicia") && item.age> 18
}).map(item => ({ 
    ...item,
    name: item.name.toUpperCase()
}));
console.log(results2)

//filtrowanie osób powyzej 18 lat i zmiana na duze litery
//find - jeden element ten co spełni warunek




