let calcTotal = (bill_amount) => {
    bill_amount = parseInt(bill_amount);
    let tip = bill_amount > 50 && bill_amount < 300 ? bill_amount * 0.15 : bill_amount * 0.2;
    return bill_amount + tip;
}

let calcTip = (bill_amount) => {
    bill_amount = parseInt(bill_amount);
    let tip = bill_amount > 50 && bill_amount < 300 ? bill_amount * 0.15 : bill_amount * 0.2;
    return tip;
}

let bills = [125, 555, 44];
let tips = [];
bills.forEach(bill => tips.push(calcTip(bill)));

console.log(tips);