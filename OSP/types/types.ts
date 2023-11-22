export enum EFigures {
  Circle = "Circle",
  Rectangle = "Rectangle",
  Triangle = "Triangle",
  Ellipse = "Ellipse",
}

export interface IFigureDrawer {
  drawFigure(figure: EFigures): void;
}
