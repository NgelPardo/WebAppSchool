var limpiar = document.getElementById("limpiar");
var canvas = document.getElementById("canvas");
var limpiar2 = document.getElementById("limpiar2");
var canvas2 = document.getElementById("canvas2");
var limpiar3 = document.getElementById("limpiar3");
var canvas3 = document.getElementById("canvas3");
var ctx = canvas.getContext("2d");
var ctx2 = canvas2.getContext("2d");
var ctx3 = canvas3.getContext("2d");
var cw = canvas.width = 200,
  cx = cw / 2;
var cw2 = canvas2.width = 200,
  cx2 = cw2 / 2;
var cw3 = canvas3.width = 200,
  cx3 = cw3 / 2;
var ch = canvas.height = 60,
  cy = ch / 2;
var ch2 = canvas2.height = 60,
  cy2 = ch2 / 2;
var ch3 = canvas3.height = 60,
  cy3 = ch3 / 2;

var dibujar = false;
var dibujar2 = false;
var dibujar3 = false;
var factorDeAlisamiento = 5;
var Trazados = [];
var puntos = [];
var Trazados2 = [];
var puntos2 = [];
var Trazados3 = [];
var puntos3 = [];
ctx.lineJoin = "round";
ctx2.lineJoin = "round";
ctx3.lineJoin = "round";

//---------------------------------------------------------

limpiar.addEventListener('click', function(evt) {
  dibujar = false;
  ctx.clearRect(0, 0, cw, ch);
  Trazados.length = 0;
  puntos.length = 0;
}, false);

limpiar2.addEventListener('click', function(evt) {
  dibujar2 = false;
  ctx2.clearRect(0, 0, cw2, ch2);
  Trazados2.length = 0;
  puntos2.length = 0;
}, false);

limpiar3.addEventListener('click', function(evt) {
  dibujar3 = false;
  ctx3.clearRect(0, 0, cw3, ch3);
  Trazados3.length = 0;
  puntos3.length = 0;
}, false);

//---------------------------------------------------------

canvas.addEventListener('mousedown', function(evt) {
  dibujar = true;
  //ctx.clearRect(0, 0, cw, ch);
  puntos.length = 0;
  ctx.beginPath();
}, false);

canvas2.addEventListener('mousedown', function(evt) {
  dibujar2 = true;
  //ctx.clearRect(0, 0, cw, ch);
  puntos2.length = 0;
  ctx2.beginPath();
}, false);

canvas3.addEventListener('mousedown', function(evt) {
  dibujar3 = true;
  //ctx.clearRect(0, 0, cw, ch);
  puntos3.length = 0;
  ctx3.beginPath();
}, false);

//---------------------------------------------------------

canvas.addEventListener('mouseup', function(evt) {
  redibujarTrazados();
}, false);

canvas2.addEventListener('mouseup', function(evt) {
  redibujarTrazados2();
}, false);

canvas3.addEventListener('mouseup', function(evt) {
  redibujarTrazados3();
}, false);

//---------------------------------------------------------

canvas.addEventListener("mouseout", function(evt) {
  redibujarTrazados();
}, false);

canvas2.addEventListener("mouseout", function(evt) {
  redibujarTrazados2();
}, false);

canvas3.addEventListener("mouseout", function(evt) {
  redibujarTrazados3();
}, false);

//----------------------------------------------------------------------

canvas.addEventListener("mousemove", function(evt) {
  if (dibujar) {
    var m = oMousePos(canvas, evt);
    puntos.push(m);
    ctx.lineTo(m.x, m.y);
    ctx.stroke();
  }
}, false);

canvas2.addEventListener("mousemove", function(evt) {
  if (dibujar2) {
    var m = oMousePos2(canvas2, evt);
    puntos2.push(m);
    ctx2.lineTo(m.x, m.y);
    ctx2.stroke();
  }
}, false);

canvas3.addEventListener("mousemove", function(evt) {
  if (dibujar3) {
    var m = oMousePos3(canvas3, evt);
    puntos3.push(m);
    ctx3.lineTo(m.x, m.y);
    ctx3.stroke();
  }
}, false);


//----------------------------------------------------------------------

function reducirArray(n,elArray) {
  var nuevoArray = [];
  nuevoArray[0] = elArray[0];
  for (var i = 0; i < elArray.length; i++) {
    if (i % n == 0) {
      nuevoArray[nuevoArray.length] = elArray[i];
    }
  }
  nuevoArray[nuevoArray.length - 1] = elArray[elArray.length - 1];
  Trazados.push(nuevoArray);
}

function reducirArray2(n,elArray) {
  var nuevoArray = [];
  nuevoArray[0] = elArray[0];
  for (var i = 0; i < elArray.length; i++) {
    if (i % n == 0) {
      nuevoArray[nuevoArray.length] = elArray[i];
    }
  }
  nuevoArray[nuevoArray.length - 1] = elArray[elArray.length - 1];
  Trazados2.push(nuevoArray);
}

function reducirArray3(n,elArray) {
  var nuevoArray = [];
  nuevoArray[0] = elArray[0];
  for (var i = 0; i < elArray.length; i++) {
    if (i % n == 0) {
      nuevoArray[nuevoArray.length] = elArray[i];
    }
  }
  nuevoArray[nuevoArray.length - 1] = elArray[elArray.length - 1];
  Trazados3.push(nuevoArray);
}

//----------------------------------------------------------------------

function calcularPuntoDeControl(ry, a, b) {
  var pc = {}
  pc.x = (ry[a].x + ry[b].x) / 2;
  pc.y = (ry[a].y + ry[b].y) / 2;
  return pc;
}

function calcularPuntoDeControl2(ry2, a2, b2) {
  var pc2 = {}
  pc2.x = (ry2[a2].x + ry2[b2].x) / 2;
  pc2.y = (ry2[a2].y + ry2[b2].y) / 2;
  return pc2;
}

function calcularPuntoDeControl3(ry3, a3, b3) {
  var pc3 = {}
  pc3.x = (ry3[a3].x + ry3[b3].x) / 2;
  pc3.y = (ry3[a3].y + ry3[b3].y) / 2;
  return pc3;
}

//----------------------------------------------------------------------

function alisarTrazado(ry) {
  if (ry.length > 1) {
    var ultimoPunto = ry.length - 1;
    ctx.beginPath();
    ctx.moveTo(ry[0].x, ry[0].y);
    for (i = 1; i < ry.length - 2; i++) {
      var pc = calcularPuntoDeControl(ry, i, i + 1);
      ctx.quadraticCurveTo(ry[i].x, ry[i].y, pc.x, pc.y);
    }
    ctx.quadraticCurveTo(ry[ultimoPunto - 1].x, ry[ultimoPunto - 1].y, ry[ultimoPunto].x, ry[ultimoPunto].y);
    ctx.stroke();
  }
}

function alisarTrazado2(ry2) {
  if (ry2.length > 1) {
    var ultimoPunto = ry2.length - 1;
    ctx2.beginPath();
    ctx2.moveTo(ry2[0].x, ry2[0].y);
    for (i = 1; i < ry2.length - 2; i++) {
      var pc2 = calcularPuntoDeControl2(ry2, i, i + 1);
      ctx2.quadraticCurveTo(ry2[i].x, ry2[i].y, pc2.x, pc2.y);
    }
    ctx2.quadraticCurveTo(ry2[ultimoPunto - 1].x, ry2[ultimoPunto - 1].y, ry2[ultimoPunto].x, ry2[ultimoPunto].y);
    ctx2.stroke();
  }
}

function alisarTrazado3(ry3) {
  if (ry3.length > 1) {
    var ultimoPunto = ry3.length - 1;
    ctx3.beginPath();
    ctx3.moveTo(ry3[0].x, ry3[0].y);
    for (i = 1; i < ry3.length - 2; i++) {
      var pc3 = calcularPuntoDeControl3(ry3, i, i + 1);
      ctx3.quadraticCurveTo(ry3[i].x, ry3[i].y, pc3.x, pc3.y);
    }
    ctx3.quadraticCurveTo(ry3[ultimoPunto - 1].x, ry3[ultimoPunto - 1].y, ry3[ultimoPunto].x, ry3[ultimoPunto].y);
    ctx3.stroke();
  }
}

//--------------------------------------------------------------------------

function redibujarTrazados(){
  dibujar = false;
  ctx.clearRect(0, 0, cw, ch);
  reducirArray(factorDeAlisamiento,puntos);
  for(var i = 0; i < Trazados.length; i++)
  alisarTrazado(Trazados[i]);
}

function redibujarTrazados2(){
  dibujar2 = false;
  ctx2.clearRect(0, 0, cw2, ch2);
  reducirArray2(factorDeAlisamiento,puntos2);
  for(var i = 0; i < Trazados2.length; i++)
  alisarTrazado2(Trazados2[i]);
}

function redibujarTrazados3(){
  dibujar3 = false;
  ctx3.clearRect(0, 0, cw3, ch3);
  reducirArray3(factorDeAlisamiento,puntos3);
  for(var i = 0; i < Trazados3.length; i++)
  alisarTrazado3(Trazados3[i]);
}

//---------------------------------------------------------------------------

function oMousePos(canvas, evt) {
  var ClientRect = canvas.getBoundingClientRect();
  return { //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
  }
}

function oMousePos2(canvas2, evt) {
  var ClientRect = canvas2.getBoundingClientRect();
  return { //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
  }
}

function oMousePos3(canvas3, evt) {
  var ClientRect = canvas3.getBoundingClientRect();
  return { //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
  }
}