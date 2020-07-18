var message:string = "Hello World" 
console.log(message);

var number1=10;
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);
//let c=Color.yellow; (here other type of enum constants are not allowed)
let notSure: any = 4;

notSure="rafi";
console.log(notSure);
if(c instanceof Color){
    console.log('yes color');
}