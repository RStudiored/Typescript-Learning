var sentence = "This is my String";
var number = 123468978;
var number1 = 2.00;
var isok = false;
var x;
x = ["Ravi", 35];
x = ["Raj", 45];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(x[0], x[1]);
console.log("Automatically Compiled");
console.log(sentence + number + number1 + isok);
console.log(c);
