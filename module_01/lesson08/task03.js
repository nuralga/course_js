'use strict';

{
    const createArr = (length, n, m, type) => {
        let arr = [];
        let num = 0;
        for (let i = 0; i < length; i++) {
            if (n < m || type === 'even'){
                num = Math.floor(Math.random() * ((m - n) / 2 + 1)) * 2 + n;
            } else {
                num = Math.floor(Math.random() * ((n - m) / 2 + 1)) * 2 + m;
            }
            arr.push(num);            
        }
        return arr;
    }

    console.log('array of even numbers: ', createArr(200, 80, 10, 'even'));
    console.log('array of odd number: ', createArr(200, 13, 243, 'odd'));

}