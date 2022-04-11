'use strict';

{
    const createArr = length => {
        let arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(Math.round(Math.random() * 100))
        }
        return arr;
    }

    console.log('arr: ', createArr(200));

}