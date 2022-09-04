let scoresTeamA = [] 

let averageScoreA = (96 + 108 + 89) / 3;
let averageScoreB = (88 + 91 + 110) / 3

console.log(averageScoreA, averageScoreB);

if (averageScoreA > averageScoreB && averageScoreA >= 100) {
    console.log('A wins')
} else if (averageScoreB > averageScoreA && averageScoreB >= 100) {
    console.log('B wins')
} else {
    console.log('Both win')
}