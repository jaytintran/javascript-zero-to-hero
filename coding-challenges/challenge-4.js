let bill = prompt("How much is the bill?");
bill = parseInt(bill);
let tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
let total = bill + tip

console.log(total)
