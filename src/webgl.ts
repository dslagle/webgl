let canvas: HTMLCanvasElement;
let context2d: CanvasRenderingContext2D;

document.onload = (e) => {
    canvas = document.querySelector("#target") as HTMLCanvasElement;
    context2d = canvas.getContext("2d");

    render();
}

function render() {
    context2d.fillStyle = "rgb(255, 0, 255)";
    context2d.fillRect(5, 5, 100, 100);
}
