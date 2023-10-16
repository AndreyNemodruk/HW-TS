"use strict";
var Formulas;
(function (Formulas) {
    Formulas["Rectangle"] = "S = a * b";
    Formulas["Square"] = "S = a^2";
    Formulas["Circle"] = "S = \u03C0 * r^2";
    Formulas["Triangle"] = "S = 1/2(a * h)";
})(Formulas || (Formulas = {}));
class FigureWithPrint {
    constructor(name, color, formula) {
        this.name = name;
        this.color = color;
        this.formula = formula;
    }
    print() {
        console.log(this.formula);
    }
}
class Square extends FigureWithPrint {
    constructor(name, color, formula) {
        super(name, color, formula);
    }
    calculateArea({ side }) {
        return Math.pow(side, 2);
    }
}
class Rectangle extends FigureWithPrint {
    constructor(name, color, formula) {
        super(name, color, formula);
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
    calculateArea({ baseSideOrSideA, heightOrSideB, angle, }) {
        if (!angle) {
            return (baseSideOrSideA * heightOrSideB) / 2;
        }
        return (baseSideOrSideA * heightOrSideB * Math.sin(angle)) / 2;
    }
}
const square = new Square("s", "s", Formulas.Square);
console.log(square.calculateArea({ side: 1 }));
const regtangle = new Rectangle("r", "r", Formulas.Rectangle);
console.log(regtangle.calculateArea({ sideA: 2, sideB: 2 }));
