'use strict';

{
    const eurToUsd = 1.2;
    const usdToRub = 73;

    const purchaseCostConverter = purchaseCost => (purchaseCost * eurToUsd) * usdToRub;

    console.log(`Purchase cost: ${purchaseCostConverter(7)} RUB`);
}