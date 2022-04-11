'use strict';

{
    const productName = "Iphone 12 Pro Max Gold 128 GB";
    const productCount = 5;
    const ProductCategory = "Mobile Phone";
    const productPrice = 500000;
    
    console.log('Product Name: ', productName);
    console.log(`Total Price: ${productCount * productPrice} KZT`);
}

{
    const productName = "Legion 5i (6th Gen, 17, Intel)";
    const productCount = 7;
    const ProductCategory = "Laptop";
    const productPrice =  819990;
    
    console.log('Product Name: ', productName);
    console.log(`Total Price: ${productCount * productPrice} KZT`);
}

{
    const productName = prompt('Введите Наименование товара:');
    const productCount = prompt('Введите Количество товара:');
    console.log('productCount: ', typeof productCount);
    console.log('productCount: ', typeof +productCount);
    const ProductCategory = prompt('Введите Категорию товара:');
    const productPrice =  prompt('Введите Цену товара:');
    console.log('productPrice: ', typeof productPrice);
    console.log('productCount: ', typeof +productCount);
    
    console.log(`На складе ${productCount} единицы товара, "${productName}" на сумму ${productCount * productPrice} KZT, по категории "${ProductCategory}"`);
}