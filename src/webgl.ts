let canvas: HTMLCanvasElement;

function start() {
    canvas = document.querySelector("#target") as HTMLCanvasElement;
    const context2d = canvas.getContext("2d");

    render(context2d);
}

function render(context2d: CanvasRenderingContext2D) {
    const red: IColor = new RGBColor(255, 0, 0);
    const r: Rectangle = new Rectangle(255, 255, red);
    r.X = 5;
    r.Y = 5;

    r.Fill(context2d);
}

class Rectangle {
    X: number;
    Y: number;
    Width: number;
    Height: number;
    Color: IColor;

    private Path: Path2D;

    constructor(width: number, height: number, color: IColor) {
        this.Width = width;
        this.Height = height;
        this.Color = color;
    }

    Fill(context2d: CanvasRenderingContext2D) {
        context2d.beginPath();
        context2d.rect(this.X, this.Y, this.Width, this.Height);
        context2d.closePath();

        context2d.fillStyle = this.Color.AsStyle();
        context2d.fill();

        
    }
}

interface IColor {
    Red: number;
    Green: number;
    Blue: number;

    AsStyle(): string;
}

class RGBColor implements IColor {
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

class RGBAColor extends RGBColor implements IColor {
    Alpha: number;

    AsStyle(): string {
        return `rgb(${this.Red},${this.Green},${this.Blue},${this.Alpha})`;
    }
}