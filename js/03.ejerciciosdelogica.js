var a = {
  //prop y meth sep ,
  corrA:0,
  corrB:0,
  corrC:0,
  corrD:0,

  result: function(){
    if(a.corrA > a.corrB && 
       a.corrD > a.corrB &&
       a.corrD > a.corrC &&
       a.corrD < a.corrA){
       return true;
       }
    else{
        return false;
       }
  },
  
  interval: setInterval(function(){
    a.corrA = Math.ceil(Math.random()*4);
    a.corrB = Math.ceil(Math.random()*4);
    a.corrC = Math.ceil(Math.random()*4);
    a.corrD = Math.ceil(Math.random()*4);

    if (a.result()){
      clearInterval(a.interval);
      console.log('Atleta A ',a.corrA);
      console.log('Atleta B ',a.corrB);
      console.log('Atleta C ',a.corrC);
      console.log('Atleta D ',a.corrD);
    }
  },10)
}

// problemas de logica: caballo
// Mac    !edad:Viejo(2) !velocidad: apido(1) ! tono: oscuro(2) ! /Joven(1)
// Smith  !edad:Joven(1) !velocidad: lento(1) ! tono: oscuro(1) !
// Jack   !edad:Joven(1) !velocidad: lento(2) ! tono: oscuro(2) !
// Willy  !edad:joven(2) !velocidad: lento(1) ! tono: oscuro(2) !
// Viejo mayor Mac/ Velocidad menor Jack / Tono menor Smith

var b = {
  Mac: {edad:0,velocidad:0,tono:0},
  Smith: {edad:0,velocidad:0,tono:0},
  Jack: {edad:0,velocidad:0,tono:0},
  Willy: {edad:0,velocidad:0,tono:0},

  resultado: function(){
    if (b.Mac.tono > b.Smith.tono &&
      b.Mac.velocidad > b.Jack.velocidad &&
      b.Mac.edad > b.Jack.edad &&

      b.Jack.velocidad<b.Willy.velocidad &&//Willy>vELOCIDAD
      b.Mac.edad > b.Willy.edad &&
      b.Mac.edad > b.Smith.edad &&

      b.Smith.tono<b.Willy.tono && //willy>smith
      b.Smith.velocidad > b.Jack.velocidad &&
      b.Jack.tono> b.Smith.tono){
        return true;
      }
      return false;
  },

  intervalo: setInterval(function(){
    b.Mac.edad = Math.ceil(Math.random()*2);
    b.Mac.velocidad = Math.ceil(Math.random()*2);
    b.Mac.tono = Math.ceil(Math.random()*2);

    b.Smith.edad = Math.ceil(Math.random()*2);
    b.Smith.velocidad = Math.ceil(Math.random()*2);
    b.Smith.tono = Math.ceil(Math.random()*2);

    b.Jack.edad = Math.ceil(Math.random()*2);
    b.Jack.velocidad = Math.ceil(Math.random()*2);
    b.Jack.tono = Math.ceil(Math.random()*2);

    b.Willy.edad = Math.ceil(Math.random()*2);
    b.Willy.velocidad = Math.ceil(Math.random()*2);
    b.Willy.tono = Math.ceil(Math.random()*2);

    if (b.resultado()){
      clearInterval(b.intervalo);
      console.log('Caballo de Mac: ',b.Mac);
      console.log('Caballo de Smith ',b.Smith);
      console.log('Caballo de Jack ',b.Jack);
      console.log('Caballo de Willy ',b.Willy);

    }
  },10)
}

// galgo:   / (0)
// dogo:    / +pondeco (Galgo(2))
// alano:   / +Galgo &  - dogo (1)
// pondeco: / +Galgo (1)
// cual come menos? -> Galgo
var c = {
  // Properties
  galgo: 0,
  dogo: 0,
  alano: 0,
  pondeco:0,

  // Methods
  resultado: function(){
    if (c.pondeco > c.galgo && 
      c.alano > c.galgo &&
      c.alano < c.dogo &&
      c.dogo > c.pondeco){
        return true;
    }else{
    return false;
    }
  },

  intervalo: setInterval(function(){

    c.galgo = Math.round(Math.random()*2);
    c.dogo = Math.round(Math.random()*2);
    c.alano = Math.round(Math.random()*2);
    c.pondeco = Math.round(Math.random()*2);

    if (c.resultado()){
      clearInterval(c.intervalo);
      console.log('Galgo: ',c.galgo);
      console.log('Dogo: ',c.dogo);
      console.log('Alano: ',c.alano);
      console.log('Pondeco: ',c.pondeco);
    }
  },10)
}

// Seis amigos desean pasar sus vacaciones juntos y deciden, cada dos, utilizar diferentes
// medios de transporte; sabemos que Alejandro no utiliza el coche ya que éste acompaña a 
// Benito que no va en avión. Andrés viaja en avión. Si Carlos no va acompañado de Darío ni 
// hace uso del avión, podría Vd. decirnos en qué medio de transporte llega a su destino Tomás.
// 
// Alejo  !Car: (0)!Avion: (0)!Otro: (3)
// Benito !Car: (0)!Avion: (0)!Otro: (3)
// Andres !Car: (0)!Avion: (2)!Otro: (0)
// Carlos !Car: (1)!Avion: (0)!Otro: (0) 
// Dario  !Car: (0)!Avion: (2)!Otro: (0)
// Tomas  !Car: (1)!Avion: (0)!Otro: (0)

var d = {
  
  Alejo: 0,
  Benito: 0,
  Andres: 0,
  Carlos: 0,
  Dario: 0,
  Tomas: 0,

  resultado: function(){
    if (d.Alejo == d.Benito && 
      d.Carlos != d.Dario &&
      d.Carlos != d.Andres &&
      d.Andres == 1 &&
      // (1) sera Avion, los otros pueden cambiar
      
      // salen del texto que no cumplen
      d.Alejo != d.Andres && d.Alejo != d.Carlos && d.Alejo != d.Dario && d.Alejo != d.Tomas &&
      d.Benito != d.Andres && d.Benito != d.Carlos && d.Benito != d.Dario && d.Benito != d.Tomas
      
      ){
        return true;
    }else{
      return false;
    }
    
  },

  intervalo: setInterval(function(){
    d.Alejo = Math.round(Math.random()*2);
    d.Benito = Math.round(Math.random()*2);
    d.Andres = Math.round(Math.random()*2);
    d.Carlos = Math.round(Math.random()*2);
    d.Dario = Math.round(Math.random()*2);
    d.Tomas = Math.round(Math.random()*2);

    if (d.resultado()){
      clearInterval(d.intervalo);
      console.log('Alejo ',d.Alejo, ' : Otro');
      console.log('Benito ',d.Benito, ' : Otro');
      console.log('Andres ',d.Andres, ' : Avion');
      console.log('Dario ',d.Dario,' : Avion');
      console.log('Carlos ',d.Carlos,' : Carro');
      console.log('Tomas ',d.Tomas, ' : Carro');
    }
  },1)
}
// Si Ángela habla más bajo que Rosa y Celia habla más alto que Rosa, 
// ¿habla Ángela más alto o más bajo que Celia?
// An (-1)  0
// Ro (0)   1
// Ce (1)   2
var e = {
  angela : 0,
  rosa: 0,
  celia: 0,

  operacion: function(){
    if ( e.angela < e.rosa &&
      e.celia > e.rosa){
      return true
    }else{
      return false
    }
  },

  interva: setInterval(function(){
    e.angela = Math.round(Math.random()*3);
    e.rosa = Math.round(Math.random()*3);
    e.celia = Math.round(Math.random()*3);

    if (e.operacion){
      clearInterval(e.interva);
      console.log('Tono de Angela: ',e.angela);
      console.log('Tono de Rosa: ',e.rosa);
      console.log('Tono de Celia: ',e.celia);

    }
  })

}