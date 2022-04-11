'use strict';

{
    const cart = {
        items: [],
        count: 0,
        discount: 0, 
        add(name, price, count = 1) {
            const item = {
                name: name,
                price: price,
                count: count,
        };
            this.items.push(item);
            this.increaseCount(count);
        },
        increaseCount(count) {
            this.count += count;
        },
        get totalPrice() {
            let totalPrice = 0;
            this.items.forEach(element => {
                totalPrice += element.price * element.count;
            });
            return totalPrice - (totalPrice * this.discount / 100);
        },
        clear() {
            this.items = [], this.count = 0;
        },
        print() {
            console.log(JSON.stringify(this.items));
            console.log(this.totalPrice);
        },
        setDiscount (promocode){
            switch (promocode) {
                case 'METHED':
                    this.discount = 15;
                    break;
                case 'NEWYEAR':
                    this.discount = 21;
                    break;
                default:
                    break;
            }
        }
    };

    cart.add('iPhone 11 Pro Max', 15000, 2);
    cart.add('iPhone 12 Pro Max', 23000, 4);
    cart.add('iPhone 13 Pro Max 1TB', 56000, 5);
    cart.print();

    cart.setDiscount('METHED');
    cart.print();

    cart.setDiscount('NEWYEAR');
    cart.print();

    cart.clear();
    cart.print();
}
