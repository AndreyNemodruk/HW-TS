import { EFigures, IFigureDrawer } from "./types/types";

class FigureDrawer implements IFigureDrawer {
  drawFigure(figure: EFigures): void {
    switch (figure) {
      case EFigures.Circle:
        console.log("draw circle");
        break;
      case EFigures.Rectangle:
        console.log("draw rectangle");
        break;
      case EFigures.Triangle:
        console.log("draw triangle");
        break;
      default:
        throw new Error("unknown figure");
    }
  }
}

class FigureDrawerWithEllipse extends FigureDrawer {
  override drawFigure(figure: EFigures) {
    switch (figure) {
      case EFigures.Circle:
        console.log("draw circle");
        break;
      case EFigures.Rectangle:
        console.log("draw rectangle");
        break;
      case EFigures.Triangle:
        console.log("draw triangle");
        break;
      case EFigures.Ellipse:
        console.log("draw ellipse");
        break;
      default:
        throw new Error("unknown figure");
    }
  }
}
