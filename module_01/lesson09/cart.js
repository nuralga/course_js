'use strict';

{
    const cart = {
        items : [],
        totalPrice : 0,
        count : 0,
        // метод возвращает значение свойства totalPrice        
        getTotalPrice (){
            return this.totalPrice;
        },
        // Принимает три параметра:
        // название товара
        // цену товара
        // количество товара (опциональный параметр, по умолчанию 1 товар)
        // этот метод формирует объект из полученных параметров и добавляет его в свойство items
        // так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные
        add(name, price, count = 1){
            let item = {
                name: name,
                price: price,
                count: count,
            }
            this.items.push(item);
            this.increaseCount(count); 
            this.calculateItemPrice();          
        },
        // Увеличивает свойство count на это число
        increaseCount(count){
            this.count += count;
        },
        // пересчитывает стоимость всей корзины и записывает значение в totalPrice 
        calculateItemPrice(){
            let totalPrice = 0;
            this.items.forEach(element => {
                totalPrice += (element.price * element.count);
            });
            this.totalPrice = totalPrice;
        },
        // Очищает полностью нашу корзину, возвращает все значения в изначальные
        clear(){
            this.items = [], this.totalPrice = 0, this.count = 0;
        },
        // Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины
        print(){
            console.log(JSON.stringify(this.items));
            console.log(this.getTotalPrice());
        },

    };

    cart.add("iPhone 11 Pro Max", 15000, 2);
    cart.add("iPhone 12 Pro Max", 23000, 4);
    cart.add("iPhone 13 Pro Max 1TB", 56000, 5);
    cart.print();

    cart.clear();
    cart.print();
}