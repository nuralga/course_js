'use strict';

{
    const rectangle = {
        width : 5,
        height : 5,
        width (newWidth){
            this.width = +newWidth;
        },
        height (newheight){
            this.height = +newheight;
        },
        get perimeter () {
            return (this.height + this.width) * 2 + " см";
        },
        get area () {
            return (this.height * this.width) + " см";
        },
    }

    rectangle.width(42);
    rectangle.height(31);
    console.log(`периметр: ${rectangle.perimeter}`);
    console.log(`площадь: ${rectangle.area}`);
}