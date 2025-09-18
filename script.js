let canvas = document.getElementById("miCanvas");
let ctx = canvas.getContext("2d");

// Rectángulo azul
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 100);

// Círculo rojo
ctx.beginPath();
ctx.arc(300, 100, 50, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

//progress

let progreso = document.getElementById("progreso");
let porcentajeTexto = document.getElementById("porcentaje");
let mensaje = document.getElementById("mensaje");

let valor = 0;

let intervalo = setInterval(() => {
  if (valor < 100) {
    valor++;
    progreso.value = valor;
    porcentajeTexto.textContent = valor + "%";
  } else {
    clearInterval(intervalo);
    mensaje.textContent = "¡Carga completa!";
  }
}, 100);