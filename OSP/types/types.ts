import { Circle, Ellipse, Rectangle, Triangle } from "..";

export interface IFigure {
  color: string;
  getArea(): number;
  getPerimeter(): number;
}

export interface IFigureDrawer {
  drawCircle(figure: Circle): void;
  drawRectangle(figure: Rectangle): void;
  drawTriangle(figure: Triangle): void;
}

export interface IFigureDrawerWithEllipse extends IFigureDrawer {
  drawEllipse(figure: Ellipse): void;
}
