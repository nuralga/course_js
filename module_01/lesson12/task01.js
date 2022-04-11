'use strict';

{    
    let arr = [];
    let attempt = 0;

    const guessNumberGame = (randomNumber, attemptSize) => {
        
        // если попытки закончились игра прекращается
        if (attemptSize === attempt){
            alert("Количество попыток закончилось!");
            return;
        } else {
            let userNumber = prompt("Введите любое число!");        

            // Если нажать на отмену то игра завершится 
            if (userNumber === null) return;

            if (isNaN(userNumber)){
                alert("Введи число!");
                return guessNumberGame(randomNumber, attemptSize);
            }

            userNumber = +userNumber;
            

            if (randomNumber === userNumber){
                alert("Правильно!");
                return;
            }
            // бот запоминает каждое число которое ввел пользователь и записывает в массив
            if (!arr.includes(userNumber)) {
                attempt++;
                arr.push(userNumber);
                console.log('arr: ', arr);
            }else {
                // если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
                alert("Это число вы уже вводили");
            }        
            
            (userNumber > randomNumber) ? alert("Меньше!") : alert("Больше!");

            return guessNumberGame(randomNumber, attemptSize);
        }
    }

    const main = () => {
        // бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
        const min = prompt("Введите диапозон от!");
        console.log('min: ', typeof min, min);
        // Если нажать на отмену то игра завершится 
        if (min === null) return;
        const max = prompt("Введите диапозон до!");
        console.log('max: ', typeof max, max);
        // Если нажать на отмену то игра завершится 
        if (max === null) return;


        if ((isNaN(min) || isNaN(max)) || (+min === 0 || +max === 0)){
            alert("Введи число!");
            main();
        }
        else {
            //бот отграничивает количество попыток до 30% от количества цифр в диапазоне
            let attemptSize = Math.trunc((+max - +min + 1) * 0.3);
            console.log('attemptSize: ', attemptSize);

            // если диапазон от 50 до 100, то попыток бот даёт 15
            if (min >= 50 && max <= 100) {
                attemptSize = 15;
            }
            if (attemptSize > 0){
                if (min !== null && max !== null) {
                    console.log('min: ', +min);
                    console.log('max: ', +max);
    
                    let randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;
                    console.log('randomNumber: ', randomNumber);
                    guessNumberGame(randomNumber, attemptSize);
                }
            } else {
                alert("Увеличьте диапозон!");
                main();
            }
            
        }        
    }

    main();
    
    
}