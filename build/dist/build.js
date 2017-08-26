(function () {
'use strict';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape2D = (function () {
    function Shape2D() {
        this.Path = new Path2D();
    }
    Shape2D.prototype.Fill = function (context2d, color) {
        context2d.fillStyle = color.AsStyle();
        context2d.fill(this.Path);
    };
    Shape2D.prototype.Stroke = function (context2d, color, width) {
        context2d.strokeStyle = color.AsStyle();
        context2d.lineWidth = width;
        context2d.stroke(this.Path);
    };
    return Shape2D;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.X = x;
        _this.Y = y;
        _this.Width = width;
        _this.Height = height;
        _this.BuildPath();
        return _this;
    }
    Rectangle.prototype.BuildPath = function () {
        this.Path = new Path2D();
        this.Path.rect(this.X, this.Y, this.Width, this.Height);
    };
    return Rectangle;
}(Shape2D));
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

var red = new RGBColor(255, 0, 0);
var r = new Rectangle(5, 5, 50, 50);
var r2 = new Rectangle(60, 5, 50, 50);

}());
//# sourceMappingURL=build.js.map
