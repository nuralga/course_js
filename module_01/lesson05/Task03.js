'use strict';

{
    const reverseString = str => str.split("").reverse().join("");
    
    const str = "Привет мир";
    console.log(`${ str + " => " + reverseString("Привет мир")}`);
}