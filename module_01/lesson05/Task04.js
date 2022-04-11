'use strict';

{
    const calculate = (totalCost, numberOfItems, promocode) => {
        let cost = totalCost;
        
        if (numberOfItems > 10) {
            cost -= cost * 0.03;

            if (cost > 30000) {
                cost -= (cost  - 30000) * 0.15;
    
                if (promocode === 'METHED') {
                    cost -= cost * 0.1;
                }

                if (promocode === 'G3H2Z1' && cost > 2000) {
                    cost -= 500;
                }
            }
        }

        return cost;
    }

    console.log(calculate(37500, 11, 'METHED').toFixed(2));
    console.log(calculate(37500, 11, 'METHED'));
    console.log(calculate(30000, 11, 'G3H2Z1'));
    console.log(calculate(15500, 12, 'G3H2Z1'));
    console.log(calculate(7500, 10, 'G3H2Z1'));
}