'use strict';

{
    const foo = ([...arr]) => {
        const min = 0;
        const max = 10;
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;   
        arr.push(randomNumber);
        let sumArr = 0;
        arr.forEach(element => {
            sumArr += element;
        });
        if (sumArr > 50) {
            console.log('sumArr: ', sumArr);
            return arr;
        }
        else {
            return foo(arr);
        }
    }

    const arr = [1, 5, 10, -7, -8];
    console.log(foo(arr));
}