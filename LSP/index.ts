import { AbstractFigure } from "./AbstractFigure";

class Circle extends AbstractFigure {
  private radius: number;

  constructor(radius: number, color: string) {
    super(color);
    this.radius = radius;
  }
  getArea(): number {
    throw new Error("Method not implemented.");
  }
  getPerimeter(): number {
    throw new Error("Method not implemented.");
  }
}

class Square extends AbstractFigure {
  private side: number;

  constructor(side: number, color: string) {
    super(color);
    this.side = side;
  }
  getArea(): number {
    throw new Error("Method not implemented.");
  }
  getPerimeter(): number {
    throw new Error("Method not implemented.");
  }
}

class Triangle extends AbstractFigure {
  private sideA: number;
  private sideB: number;
  private sideC: number;

  constructor(sideA: number, sideB: number, sideC: number, color: string) {
    super(color);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  getArea(): number {
    throw new Error("Method not implemented.");
  }
  getPerimeter(): number {
    throw new Error("Method not implemented.");
  }
}

const circle = new Circle(2, "red");
const square = new Square(4, "blue");
const triangle = new Triangle(2, 2, 3, "red");

function getAreaFigure(figure: AbstractFigure) {
  return figure.getArea();
}

function getPerimeter(figure: AbstractFigure) {
  return figure.getPerimeter();
}

const ariaCircle = getAreaFigure(circle);
const ariaSquare = getAreaFigure(square);
const ariaTriangle = getAreaFigure(triangle);
