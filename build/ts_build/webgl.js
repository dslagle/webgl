var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var canvas;
function start() {
    canvas = document.querySelector("#target");
    var context2d = canvas.getContext("2d");
    render(context2d);
}
function render(context2d) {
    var red = new RGBColor(255, 0, 0);
    var r = new Rectangle(255, 255, red);
    r.X = 5;
    r.Y = 5;
    r.Fill(context2d);
}
var Rectangle = (function () {
    function Rectangle(width, height, color) {
        this.Width = width;
        this.Height = height;
        this.Color = color;
    }
    Rectangle.prototype.Fill = function (context2d) {
        context2d.beginPath();
        context2d.rect(this.X, this.Y, this.Width, this.Height);
        context2d.closePath();
        context2d.fillStyle = this.Color.AsStyle();
        context2d.fill();
    };
    return Rectangle;
}());
var RGBColor = (function () {
    function RGBColor(red, green, blue) {
        this.Red = 0;
        this.Green = 0;
        this.Blue = 0;
        this.Red = red;
        this.Green = green;
        this.Blue = blue;
    }
    RGBColor.prototype.AsStyle = function () {
        return "rgb(" + this.Red + "," + this.Green + "," + this.Blue + ")";
    };
    return RGBColor;
}());
var RGBAColor = (function (_super) {
    __extends(RGBAColor, _super);
    function RGBAColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RGBAColor.prototype.AsStyle = function () {
        return "rgb(" + this.Red + "," + this.Green + "," + this.Blue + "," + this.Alpha + ")";
    };
    return RGBAColor;
}(RGBColor));
//# sourceMappingURL=webgl.js.map