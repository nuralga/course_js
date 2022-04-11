'use strict';

{
    const allСashbox = [
        [12, 4500], 
        [7, 3210], 
        [4, 650], 
        [3, 1250], 
        [9, 7830], 
        [1, 990], 
        [6, 13900], 
        [1, 370]
    ];

    let total = 0;
    for (let i = 0; i < allСashbox.length; i++) {
        let box = allСashbox[i];
            total += box[1] / box[0];                
    }  

    console.log(`Средняя стоимость одного товара в магазине: ${Math.trunc(total/allСashbox.length)}`);

}