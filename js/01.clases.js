// Clases constructoras
var string = new String('Esto es un string')
console.log(string);

var number = new Number(12);
console.log(number);

var boo = new Boolean(false);
console.log(boo);

// Clases compuestas
var array = new Array('roj','melo','órange');
console.log(array);

var object = new Object({nombre:'Pedro', edad:30
});
console.log(object);

// Crear una clase:
// 1. Prototipo > funcion contructora

function Personas(){
  //Prop publicas > para que puedan ser consultadas
  this.nombre;
  this.edad;
}

var yo = new Personas();
yo.nombre = 'Danilo';
yo.edad = '21 years'
console.log(yo);

// Clases con parametros
function Animales(nombre,raza){
  //Prop Publica
  this.nombre = nombre;
  this.raza = raza;
}

var mascota = new Animales('Perro','Pitbull')
console.log(mascota);