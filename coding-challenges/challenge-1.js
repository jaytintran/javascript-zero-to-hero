let mark_height = 169;
let mark_weight = 78;
let john_height = 180;
let john_weight = 89;

function bmi_calculator(mass, height)
{
    return mass / height ** 2;
}

mark_bmi = bmi_calculator(mark_weight, mark_height);
john_bmi = bmi_calculator(john_weight, john_height);
markHigherBMI = mark_bmi> john_bmi;

console.log(mark_bmi, john_bmi, markHigherBMI);