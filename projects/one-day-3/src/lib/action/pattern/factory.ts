
export interface Shape {
    draw(): void;
}
export class Rectangle implements Shape {

    public draw(): void {
        console.log('draw rectangles');
    }
}

export class Circle implements Shape {

    public draw(): void {
        console.log('draw Circle');
    }
}

export class Square implements Shape {

    public draw(): void {
        console.log('draw Square');
    }
}

/**
 *  Shape Factory
 */

export class ShapeFactory {
    getShape(shapeType: string) {

        if (!shapeType) {
            return;
        }

        if (shapeType == "circle") {
            return new Circle();
        }

        if (shapeType == "rectangle") {
            return new Rectangle();
        }

        if (shapeType == "square") {
            return new Square();
        }

        return;

    }
}