const result = document.querySelector('.result')
const myScore = document.querySelector('#humanScore')
const scoreSukusmi = document.querySelector('#machineScore')

let humanMyScore = 0
let machineScore = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['stone', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('humano : ' + human + " maquina : " + machine)
    if (human === machine) {
        result.innerHTML = "Deu Empate!"
    } else if (
        (human === 'paper' && machine === 'stone') ||
        (human === 'stone' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanMyScore++
        myScore.innerHTML = humanMyScore
        result.innerHTML = "Você Ganhou!"
    } else {
        machineScore++
        scoreSukusmi.innerHTML = machineScore
        result.innerHTML = "você perdeu para Sukusmi!"
    }
}

