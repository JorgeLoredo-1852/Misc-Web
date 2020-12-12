
//Basics
var message = "hi";
var num = calcular(5,6);

function calcular(variable1, varable2){
    return variable1*varable2;
}

console.log(num);

var x;

if(x==undefined){
    console.log("x is undefined");
}

x=5;
if(x==undefined){
    console.log("x is undefined");
}
else{
    console.log("x has been defined");
}

//Objetos
var FarmaciaSimilar = {
    name: "Farmacias Similares",
    place: "#4221 Fundadores",
    botarga: {
        costume: "Policia",
        employee: "Juan" 
    }
};

console.log(FarmaciaSimilar["name"]);
console.log(FarmaciaSimilar.place);
console.log(FarmaciaSimilar.botarga["costume"]);

function multiply(x,y){
    return x*y;
}
multiply.version = "v.2";
console.log(multiply.version);

function makeMultiplier(multiplier){
   var myFunc = function(x){
       return multiplier * x;
   } 
   return myFunc
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

function powerOf(power){
    var newFunc = function(x){
        var aux = 1;
        for(i = 0; i<power; i++){
            aux = aux*x;
        }
        return aux;
    }
    return newFunc;
}

var powerOf3 = powerOf(3);
console.log(powerOf3(7));

function doOperation (x, operation){
    return operation(x);    
}

var result = doOperation(7, powerOf3);
console.log(result);

//Copy by value and copy by reference

var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);
b = 5;
console.log("afer b update: ");
console.log("a: " + a);
console.log("b: " + b);

var c = {x: 7};
var d = c;
console.log(c);
console.log(d);

d.x = 2;
console.log("after d.x update: ");
console.log(c);
console.log(d);

//Object Constructor

function Circle(radius){
    this.radius = radius;
}
Circle.prototype.getArea =
    function (){
        return Math.PI * Math.pow(this.radius, 2);
    };

var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(5);
console.log(myOtherCircle);

//Arrays

var names = ["Cesar", "Julio", "Alessio"];
for (i =0; i<names.length; i++){
    console.log(names[i]);
}

var names2 = {
    name1: "John",
    name2: "Sandra",
    name3: "Mowlihawk"
};

for(var prom in names2){
    console.log(names2[prom]);
}

