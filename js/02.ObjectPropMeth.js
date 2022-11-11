// Objestos: coleccion de prop y metodos

var object = {
  // Prop e suna asociacion detre un nombre y un valor
  nombre:'Juan',
  edad:31,
  // Method es una funcion dentro de un objeto
  descripcion: function(){
    console.log('Su nombre es '+object.nombre+' Y tiene '+object.edad+' anos.' );
  },
  saludar: function(saludo){
    console.log(saludo+' '+object.nombre);
  }
}
console.log('Nombre',object.nombre);
object.descripcion();
object.saludar('Hola');

// 
var d = new Date();
console.log(d);
var y = d.getFullYear();
console.log(y);