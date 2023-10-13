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

interface ITriangleData {
  baseSideOrSideA: number;
  heightOrSideB: number;
  angle?: number;
}

interface IFigureData {
  regtangleData: IRegtangleData;
  circleData: ICircleData;
  triangleData: ITriangleData;
}

interface IFigure<T extends keyof IFigureData> {
  formula: Formulas;
  name: string;
  color: string;
  calculateArea: (data: IFigureData[T]) => number;
}

abstract class FigureWithPrint implements IFigure<"regtangleData"> {
  formula: Formulas;
  name: string;
  color: string;

  constructor(name: string, color: string, formula: Formulas) {
    this.name = name;
    this.color = color;
    this.formula = formula;
  }

  calculateArea({ sideA }: IRegtangleData): number {
    return Math.pow(sideA, 2);
  }

  print() {
    console.log(this.formula);
  }
}

class Square extends FigureWithPrint {
  constructor(name: string, color: string, formula: Formulas) {
    super(name, color, formula);
  }
}

class Rectangle extends FigureWithPrint {
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
