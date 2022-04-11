'use strict';

{
    function NOD (x, y) {
        if (y > x) return NOD(y, x);
        if (!y) return x;
        return NOD(y, x % y);
    }
    const num1 = 18;
    const num2 = 12;

    console.log(`Наибольший общий делитель ${num1} и ${num2} - ${NOD(num1, num2)}`);
}