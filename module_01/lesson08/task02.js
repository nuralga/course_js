'use strict';

{
    const createArr = (length, n, m) => {
        let arr = [];
        for (let i = 0; i < length; i++) {
            if (n < m)
                arr.push(Math.floor(Math.random() * (m - n + 1) ) + n);
            else
                arr.push(Math.floor(Math.random() * (n - m + 1) ) + m);
        }
        return arr;
    }

    console.log('arr1: ', createArr(100, -8, 150));
    console.log('arr2: ', createArr(150, 75, -45));
    console.log('arr3: ', createArr(171, -84, -64));
    console.log('arr4: ', createArr(243, 13, 45));

}