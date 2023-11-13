const items = [
    { name: "Rice", price: 5},
    { name: "Book", price: 20},
    { name: "Chicken", price: 10},
    { name: "Monitor", price: 100},
];

/* let totalPrice = 0;
items.forEach(item =>{
    totalPrice += item.price
}) */

const totalPrice = items.reduce((total, item) =>{
    return total + item.price
},0)

console.log(totalPrice);

/* $$$$$$$$$$$$$$$$$ toString() $$$$$$$$$$$$$$$$$$$$$$$ */

let names =["Rice","Chicken","Monitor","Chicken"]
let stringNames = names.toString() /* converti array to string  */
console.log(stringNames);

/* $$$$$$$$$$$$$$$$$ join() $$$$$$$$$$$$$$$$$$$$$$$ */
/* join() fait la mm chose sauf qu'elle spécifie le séparateur */

/* $$$$$$$$$$$$$$$$ concat() $$$$$$$$$$$$$$$$$$$$$$$$$$ */
let names2 =["John","ali"]
/* let joined = names.concat(names2) */
/* console.log(joined); */

let names3 =["Redi","Dolly"]
let joined = names.concat(names2, names3)
console.log(joined);


