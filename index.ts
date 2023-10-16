enum Formulas {
  Rectangle = "S = a * b",
  Square = "S = a^2",
  Circle = "S = π * r^2",
  Triangle = "S = 1/2(a * h)",
}

interface IRegtangleData {
  sideA: number;
  sideB: number;
}

interface ISquareData {
  side: number;
}

interface ICircleData {
  radius: number;
}

interface ITriangleData {
  baseSideOrSideA: number;
  heightOrSideB: number;
  angle?: number;
}

interface IFigureData {
  regtangleData: IRegtangleData;
  squareData: ISquareData;
  circleData: ICircleData;
  triangleData: ITriangleData;
}

interface IFigure<T extends keyof IFigureData> {
  formula: Formulas;
  name: string;
  color: string;
  calculateArea: (data: IFigureData[T]) => number;
}

abstract class FigureWithPrint<T extends keyof IFigureData>
  implements IFigure<T>
{
  formula: Formulas;
  name: string;
  color: string;

  constructor(name: string, color: string, formula: Formulas) {
    this.name = name;
    this.color = color;
    this.formula = formula;
  }

  abstract calculateArea(data: IFigureData[T]): number;

  print() {
    console.log(this.formula);
  }
}

class Square extends FigureWithPrint<"squareData"> {
  constructor(name: string, color: string, formula: Formulas) {
    super(name, color, formula);
  }

  calculateArea({ side }: ISquareData): number {
    return Math.pow(side, 2);
  }
}

class Rectangle extends FigureWithPrint<"regtangleData"> {
  constructor(name: string, color: string, formula: Formulas) {
    super(name, color, formula);
  }

  override calculateArea({ sideA, sideB }: IRegtangleData): number {
    return sideA * sideB;
  }
}

class Circle implements IFigure<"circleData"> {
  readonly formula: Formulas = Formulas.Circle;

  constructor(readonly name: string, readonly color: string) {}

  calculateArea({ radius }: ICircleData) {
    return Math.PI * Math.pow(radius, 2);
  }
}

class Triangle implements IFigure<"triangleData"> {
  readonly formula: Formulas = Formulas.Triangle;

  constructor(readonly name: string, readonly color: string) {}

  calculateArea({ baseSideOrSideA, heightOrSideB }: ITriangleData): number;
  calculateArea({
    baseSideOrSideA,
    heightOrSideB,
    angle,
  }: ITriangleData): number {
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
