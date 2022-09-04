let mark = {
    fullName: "Mark Miller",
    height: 1.69,
    mass: 78,
    calcBMI: () => {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
}
let john = {
    fullName: "John Swanson",
    height: 1.95,
    mass: 92,
    calcBMI: () => {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
}

let calcBMI = (mass, height) => mass / height ** 2;

markBMI = calcBMI(mark.mass, mark.height);
johnBMI = calcBMI(john.mass, john.height);

let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI)
{
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

console.log(markBMI, johnBMI, markHigherBMI);