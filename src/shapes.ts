abstract class Shape2D {
    protected Path: Path2D = new Path2D();

    Fill(context2d: CanvasRenderingContext2D, color: IColor) {
        context2d.fillStyle = color.AsStyle();
        context2d.fill(this.Path);
    }

    Stroke(context2d: CanvasRenderingContext2D, color: IColor, width: number) {
        context2d.strokeStyle = color.AsStyle();
        context2d.lineWidth = width;
        context2d.stroke(this.Path);
    }

    abstract BuildPath();
}

export class Rectangle extends Shape2D {
    X: number;
    Y: number;
    Width: number;
    Height: number;

    constructor(x: number, y: number, width: number, height: number) {
        super();

        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;

        this.BuildPath();
    }

    BuildPath() {
        this.Path = new Path2D();
        this.Path.rect(this.X, this.Y, this.Width, this.Height);
    }
}

export interface IColor {
    Red: number;
    Green: number;
    Blue: number;

    AsStyle(): string;
}

export class RGBColor implements IColor {
    Red: number = 0;
    Green: number = 0;
    Blue: number = 0;

    constructor(red: number, green: number, blue: number) {
        this.Red = red;
        this.Green = green;
        this.Blue = blue;
    }

    AsStyle(): string {
        return `rgb(${this.Red},${this.Green},${this.Blue})`;
    }
}

export class RGBAColor extends RGBColor {
    Alpha: number;

    AsStyle(): string {
        return `rgb(${this.Red},${this.Green},${this.Blue},${this.Alpha})`;
    }
}