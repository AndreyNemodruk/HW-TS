"use strict";
var Formulas;
(function (Formulas) {
    Formulas["Rectangle"] = "Rectangle";
    Formulas["Square"] = "Square";
    Formulas["Circle"] = "Circle";
    Formulas["Triangle"] = "Triangle";
})(Formulas || (Formulas = {}));
class AbstractFigureWithPrint {
    constructor(name, color, formula) {
        this.name = name;
        this.color = color;
        this.formula = formula;
    }
    print() {
        console.log(this.formula);
    }
}
class Rectangle extends AbstractFigureWithPrint {
    constructor(name, color) {
        super(name, color, Formulas.Rectangle);
    }
    calculateArea(sideA, sideB) {
        return sideA * sideB;
    }
}
class Square extends AbstractFigureWithPrint {
    constructor(name, color) {
        super(name, color, Formulas.Square);
    }
    calculateArea(sideA, sideB) {
        return sideA * sideB;
    }
}
class Circle {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    calculateArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }
}
class Triangle {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    calculateArea(baseSideOrSideA, heightOrSideB, angle) {
        if (!angle) {
            return (baseSideOrSideA * heightOrSideB) / 2;
        }
        return (baseSideOrSideA * heightOrSideB * Math.sin(angle)) / 2;
    }
}
const rectangle = new Rectangle("rect", "red");
console.log(rectangle.calculateArea(10, 10));
rectangle.print();
