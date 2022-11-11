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
  },1)
}

var c = {
  // Properties

  // Methods
}