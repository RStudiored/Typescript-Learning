var message = "Hello World";
console.log(message);
var number1 = 10;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var notSure = 4;
notSure = "rafi";
console.log(notSure);
if (c instanceof Color) {
    console.log('yes color');
}
