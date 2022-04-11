'use strict';

{
    const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
    
    const str = "привет Мир";
    console.log(`${str + " => " + capitalizeFirstLetter('привет Мир')}`);
}