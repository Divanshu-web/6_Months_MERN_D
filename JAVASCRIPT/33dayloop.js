// const nums = [1,2,3,46,67,8,6754,];

// -------------SIMPLE FOR LOOP-------------

// for(let i = 0; i < 3; i++){
//     console.log(nums[i]);
// }

// -------------FOR OF LOOP-----------------
// for (let n of nums){
//     console.log(n);
// }

// -------------FOR EACH LOOP---------------

// nums.forEach(n => console.log(n))

// -------------FOR IN LOOP-----------------

// const user = { name: "Ali", age: 20 };

// for( let key in user){
//     console.log(key, user[key]); 
// }

const nums = [1,2,3,46,67,8,6754];

// -------------MAP------------------------
const doubled = nums.map(n =>  n * 2).map( n1 => n1+1);
// console.log(doubled);

// -------------FILTER----------------------
const even = nums.filter( n => n % 2 === 0);

// console.log(even);

// -------------MAP FILTER EXAMPLE----------

const users = [
    {id: 1, name: "Divanshu", isActive: true},
    {id: 2, name: "Abhinav", isActive: false},
    {id: 3, name: "John", isActive: true},
    {id: 4, name: "Doe", isActive: true}
];

// const activeNames = users.map( name => users[name]).filter( n => users[n] === true); // wrong
const activeNames = users.filter(n => n.isActive).map( n => n.name);

console.log(activeNames);