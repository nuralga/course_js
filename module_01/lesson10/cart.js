'use strict';

{
    const cart = {
        items : [],
        count : 0,
        add(name, price, count = 1){
            let item = {
                name: name,
                price: price,
                count: count,
            }
            this.items.push(item);
            this.increaseCount(count);        
        },
        increaseCount(count){
            this.count += count;
        },
        get totalPrice (){
            let totalPrice = 0;
            this.items.forEach(element => {
                totalPrice += (element.price * element.count);
            });
            return totalPrice;
        },
        clear(){
            this.items = [], this.count = 0;
        },
        print(){
            console.log(JSON.stringify(this.items));
            console.log(this.totalPrice);
        },

    };

    cart.add("iPhone 11 Pro Max", 15000, 2);
    cart.add("iPhone 12 Pro Max", 23000, 4);
    cart.add("iPhone 13 Pro Max 1TB", 56000, 5);
    cart.print();

    cart.clear();
    cart.print();
}