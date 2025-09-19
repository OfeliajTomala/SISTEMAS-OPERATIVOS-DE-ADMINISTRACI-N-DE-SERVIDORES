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

 function iniciarCarga() {
            let progressBar = document.getElementById('miProgress');
            let porcentaje = document.getElementById('porcentaje');
            let valor = 0;
            
            let intervalo = setInterval(() => {
                if (valor >= 100) {
                    clearInterval(intervalo);
                } else {
                    valor += 5;
                    progressBar.value = valor;
                    progressBar.textContent = valor + '%';
                    porcentaje.textContent = valor + '% completado';
                }
            }, 500);
        }