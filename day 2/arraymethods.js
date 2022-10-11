var a = [1,2,3,9,5,6,4,7];

//splice(index[],delete count)
a.splice(0,1);//from index 0 remove 1 element
document.write(a);
//slice(start,end)
b=a.slice(1, 3);//copy from 3,4
console.log(b);
c=a.includes(2);// if 2 is in array it returns true
console.log(c);

//arr.reduce(function(accumulator, item, index, array)
let result = a.reduce((sum,current) => sum+current);
console.log(result);//returns 44

a.sort();
console.log(a);

//map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

//filter
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2

//find
let user = users.find(item => item.id == 1);

console.log(user.name); // John

//foreach
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
