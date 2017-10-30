var Area = function () {
    //se rescatan los inputs del usuario y se obtienen las salidas
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var salida1 = document.getElementById('salida1');
    var salida2 = document.getElementById('salida2');

    //se comprueba que los valores sean positivos o no sean números
    if ((isNaN(base) || isNaN(altura)) || base < 0 || altura < 0) {
        alert("Ingrese valores válidos");
    }
    //se calcula el area, se envian las salidas y se dibuja el triángulo
    else{
        var area = 0.5*base*altura;
        salida1.textContent = "Área = base x altura x 0.5";
        salida2.textContent = "Área = " + area;
        draw();
    }
}

function draw(){
    //se obtiene el canvas
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {

        var ctx = canvas.getContext('2d');

        //movimientos para el dibujo del triángulo
        ctx.beginPath();
        //dibujo del triángulo
        ctx.moveTo(100,100);
        ctx.lineTo(100, 20);
        ctx.lineTo(20, 100);
        ctx.closePath();
        //estilos del dibujo
        ctx.font = "15px Arial";
        ctx.fillText("base",50,120);
        ctx.fillText("altura",110,70);
        ctx.strokeStyle = "#000080";
        ctx.lineWidth = 3;
        ctx.stroke();
    }
}
