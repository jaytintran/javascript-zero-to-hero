let calcAverage = (scores) => {
    let averageScore = 0;
    scores.forEach(score => averageScore += score)
    averageScore /= scores.length;
    return averageScore;
}

let checkWinner = (teamA, teamB) => {
    console.log(`The winner team is... ${teamA > teamB * 2 ? "team A" : teamB > teamA * 2 ? "team B" : "team A"} with the score of: ${teamA > teamB ? teamA : teamB}.`)
}


let scoresTeamA = [10, 10, 10]
let scoresTeamB = [10, 10, 10]
let finalScoreOfTeamA = calcAverage(scoresTeamA)
let finalScoreOfTeamB = calcAverage(scoresTeamB)

checkWinner(finalScoreOfTeamA, finalScoreOfTeamB)