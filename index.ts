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
interface ICircleData {
  radius: number;
}

interface ISquareData {
  side: number;
}

interface ITriangleData {
  baseSide: number;
  height: number;
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

interface IFigureWithPrint {
  print: () => void;
}

class Square implements IFigure<"squareData">, IFigureWithPrint {
  readonly formula: Formulas = Formulas.Square;

  constructor(readonly name: string, readonly color: string) {}

  print() {
    console.log(this.formula);
  }

  calculateArea({ side }: ISquareData) {
    return Math.pow(side, 2);
  }
}

class Rectangle implements IFigure<"regtangleData">, IFigureWithPrint {
  readonly formula: Formulas = Formulas.Rectangle;

  constructor(readonly name: string, readonly color: string) {}

  print() {
    console.log(this.formula);
  }

  calculateArea({ sideA, sideB }: IRegtangleData) {
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

  calculateArea({ height, baseSide }: ITriangleData): number {
    return (height * baseSide) / 2;
  }
}
