"use strict";
var Formulas;
(function (Formulas) {
    Formulas["Rectangle"] = "S = a * b";
    Formulas["Square"] = "S = a^2";
    Formulas["Circle"] = "S = \u03C0 * r^2";
    Formulas["Triangle"] = "S = 1/2(a * h)";
})(Formulas || (Formulas = {}));
class Square {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.formula = Formulas.Square;
    }
    print() {
        console.log(this.formula);
    }
    calculateArea({ side }) {
        return Math.pow(side, 2);
    }
}
class Rectangle {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.formula = Formulas.Rectangle;
    }
    print() {
        console.log(this.formula);
    }
    calculateArea({ sideA, sideB }) {
        return sideA * sideB;
    }
}
class Circle {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.formula = Formulas.Circle;
    }
    calculateArea({ radius }) {
        return Math.PI * Math.pow(radius, 2);
    }
}
class Triangle {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.formula = Formulas.Triangle;
    }
    calculateArea({ height, baseSide }) {
        return (height * baseSide) / 2;
    }
}
const aa = new Rectangle("aa", "aa");
aa.print();
console.log(aa.calculateArea({ sideA: 10, sideB: 20 }));
