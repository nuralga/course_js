'use strict';

{
    const guessNumberGame = (randomNumber) => {
        
        
        let userNumber = prompt("Введите любое число!"); 

        if (userNumber === null) return;

        if (isNaN(userNumber)){
            alert("Введи число!");
            return guessNumberGame(randomNumber);
        }
        
        if (randomNumber === +userNumber){
            alert("Правильно!");
            return;
        }
        (+userNumber > randomNumber) ? alert("Меньше!") : alert("Больше!");

        return guessNumberGame(randomNumber);
    }

    const randomNumber = Math.floor(Math.random() * 100);
    console.log('randomNumber: ', randomNumber);
    guessNumberGame(randomNumber);
}