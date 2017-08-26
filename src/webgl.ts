import { IColor, RGBAColor, RGBColor, Rectangle } from "./shapes";

let canvas: HTMLCanvasElement;
let lastRenderTime: number = 0;

function start() {
    canvas = document.querySelector("#target") as HTMLCanvasElement;

    let lastRenderTime = Date.now();

    window.requestAnimationFrame(() => {
        const time = Date.now();
        render(time - lastRenderTime);
        lastRenderTime = time;
    });
}

const red: IColor = new RGBColor(255, 0, 0);

const r: Rectangle = new Rectangle(5, 5, 50, 50);
const r2: Rectangle = new Rectangle(60, 5, 50, 50);

function render(delta: number) {
    const context2d = canvas.getContext("2d");
    
    r2.X += (10 * delta / 1000);
    r.Fill(context2d, red);
    r2.Stroke(context2d, red, 3);
}
