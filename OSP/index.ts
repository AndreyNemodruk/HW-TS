import {
  IFigure,
  IFigureDrawer,
  IFigureDrawerWithEllipse,
} from "./types/types";

export class Circle implements IFigure {
  color: string;
  radius: number;
  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    throw new Error("Method not implemented.");
  }
  getPerimeter(): number {
    throw new Error("Method not implemented.");
  }
}

export class Rectangle implements IFigure {
  color: string;
  sideA: number;
  sideB: number;

  constructor(color: string, sideA: number, sideB: number) {
    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
  }

  getArea(): number {
    throw new Error("Method not implemented.");
  }
  getPerimeter(): number {
    throw new Error("Method not implemented.");
  }
}

export class Triangle implements IFigure {
  color: string;
  sideA: number;
  sideB: number;
  sideC: number;

  constructor(color: string, sideA: number, sideB: number, sideC: number) {
    this.color = color;
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

export class Ellipse implements IFigure {
  color: string;
  axisA: number;
  axisB: number;

  constructor(color: string, axisA: number, axisB: number) {
    this.color = color;
    this.axisA = axisA;
    this.axisB = axisB;
  }

  getArea(): number {
    throw new Error("Method not implemented.");
  }
  getPerimeter(): number {
    throw new Error("Method not implemented.");
  }
}

class FigureDrawer implements IFigureDrawer {
  drawCircle(figure: Circle): void {
    throw new Error("Method not implemented.");
  }
  drawRectangle(figure: Rectangle): void {
    throw new Error("Method not implemented.");
  }
  drawTriangle(figure: Triangle): void {
    throw new Error("Method not implemented.");
  }
}

class FigureDrawerWithEllipse
  extends FigureDrawer
  implements IFigureDrawerWithEllipse
{
  drawEllipse(figure: Ellipse): void {
    throw new Error("Method not implemented.");
  }
}
