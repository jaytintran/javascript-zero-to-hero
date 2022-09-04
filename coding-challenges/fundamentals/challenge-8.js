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

let calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return sum / arr.length;
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
bills.forEach(bill => tips.push(calcTip(bill)));
totals.forEach(total => tips.push(calcTotal(total)));   

let average_bill = calcAverage(totals);
console.log(tips);
console.log(totals);
console.log(average_bill);