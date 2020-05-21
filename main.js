const roll = document.querySelector('#roll-button')
const dieRolls = []
const numberOfDice = document.querySelector('#number-of-dice')
const total =document.querySelector('total')

    rollButton.addEventListener("click", function() {
        let input = roll.value
        let index = 0

        while (index < input) {
            let total = Math.floor(Math.random(0) * 6) + 1
            dieRolls.push(total)
        }
            
    })