'use strict';

{
    const isPrime = num => {
        for(let i = 2; i <= Math.sqrt(num); i++)
            if(num % i === 0) return false;
            
        return num > 1;
    }

    console.log(isPrime(1987));
    console.log(isPrime(543));
    console.log(isPrime(125));
}