import { RGBColor, Rectangle } from "./shapes";
var canvas;
var lastRenderTime = 0;
function start() {
    canvas = document.querySelector("#target");
    var lastRenderTime = Date.now();
    window.requestAnimationFrame(function () {
        var time = Date.now();
        render(time - lastRenderTime);
        lastRenderTime = time;
    });
}
var red = new RGBColor(255, 0, 0);
var r = new Rectangle(5, 5, 50, 50);
var r2 = new Rectangle(60, 5, 50, 50);
function render(delta) {
    var context2d = canvas.getContext("2d");
    r2.X += (10 * delta / 1000);
    r.Fill(context2d, red);
    r2.Stroke(context2d, red, 3);
}
//# sourceMappingURL=webgl.js.map