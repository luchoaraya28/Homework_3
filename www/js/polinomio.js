var Calcular = function () {
    //se buscan los inputs del usuario
    var A = parseFloat(document.getElementById('A').value);
    var B = parseFloat(document.getElementById('B').value);
    var C = parseFloat(document.getElementById('C').value);
    //se calcula el determinante de la ecuacion
    var disc = B**2 - 4*A*C;
    var salida1 = document.getElementById('salida1');
    //dependiendo del caso se grafica la funcion, si las raices son imaginarias no se grafica
    if (disc == 0) {
        salida1.textContent = "El polinomio tiene una única solución";
        draw();
    }
    else if (disc > 0) {
        salida1.textContent = "El polinomio tiene dos soluciones reales distintas";
        draw();
    }
    else if (disc < 0) {
        salida1.textContent = "El polinomio no tiene solución real";
    }
    else{
        alert("Ingrese valores válidos");
    }
}

function draw(){
    //se obtienen los inputs
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    var C = document.getElementById('C').value;
    //se define la funcion para graficarla
    var eq = A.toString()+'*x^2+' + B.toString()+'*x +' + C.toString();
    try {
        functionPlot({
            //se desplegara el grafico en la seccion con id = 'plot'
            target: '#plot',
            data: [{
                //funcion a graficar
                fn: eq,
                //hace que la functionPlot() evalue la funcion con math.js
                sampler: 'builtIn',
                //tipo de linea para el gráfico
                graphType: 'polyline'
            }]
        });
    }
    catch (err) {
        console.log(err);
        alert(err);
    }
}