
var show = {

    busquedaIncremental: function (data) {
        $("#resultadoSearch").html("");
        for (var i = 0; i < data.output.length; i++) {
            var x0 = data.output[i].x0;
            var x1 = data.output[i].x1;
            var f0 = data.output[i].fx0;
            var f1 = data.output[i].fx1;
            $("#resultadoSearch").append(
                "<li class='list-group-item'>Intervalo: " + x0
                + " a " + x1
                + " evaluando en los puntos "
                + f0 + " y "
                + f1 + "</li>"
            )

        }
    },

    bisection: function (data) {
        JSON.parse(data.output);
        for (var i = 0; i < data.output.length; i++) {
            var a = data.output[i].a;
            var b = data.output[i].b;
            var m = data.output[i].m;
            var error = data.output[i].errabs;
            $("#resultadoBisection").html("");
            $("#resultadoBisection").append(
                "<div>Entre el intervalo " + a +
                " y " + b +
                " hay una raiz en " + m +
                " con un error de " + error
                + "</div>"
            )

        }

        if (data.status === 'true') {

        }
    },
    regla: function () {
        if (data.status === 'true') {
            //output
        }
    },
    secante: function () {

        var a = data.output.a;
        var b = data.output.b;
        var m = data.output.m;
        var error = data.output.errabs;
        $("#resultadoBisection").html("");
        $("#resultadoBisection").append(
            "<div>Entre el intervalo " + a +
            " y " + b +
            " hay una raiz en " + m +
            " con un error de " + error
            + "</div>"
        )

    },

    newton: function (data) {
        for (var i = 0; i < data.output.length; i++) {
            var x = data.output[i].x;
            var fx = data.output[i].fx;
            var gx = data.output[i].fxx;
            var error = data.output[i].errorabs;
            $("#resultadoNewton").append(
                "<li class='list-group-item'>Existe una raiz en " + x
                + " y el f(x) =  " + fx
                + " con la derivada "
                + gx + " y un error de "
                + error + "</li>"
            )


        }

    },
    fijo: function (data) {
        $("#resultadoFijo").html("");
        for (var i = 0; i < data.output.length; i++) {
            var n = data.output.n;
            var error = data.output.errorabs;
            var gx = data.output.gx;
            var tolerancia = data.output.tolerancia;
            $("#resultadoFijo").append(
                "<div>En la interacion" + n +
                "con un error de" + error +
                "hay una raiz en" + gx +
                "cumpliendo con una tolerancia de" + tolerancia
                + "</div>"
            )

        }

    },
    jacobi: function (data, method) {
        var n = data.output.n;
        var vector = data.output.vector;
        var error = data.output.error;
        var motivo = data.output.motivo_salida;
        $("#iterativosOutput").html("<div> Por " + method + " el metodo termina por " +
            motivo + " en la iteracion " +
            n + " con el siguiente vector: " +
            vector + " y un error de " +
            error + "</div>")
    },
    eliminacionParcial: function (data) {
        var vector = data.output;
        $("#eliminacionOutput").html(
            "Los valores del vector x en la eliminacion gaussianda son: " +
            vector
        )
    },
    methodLU: function (data, method) {
        var x = data.output.x;
        var L = data.output.L;
        var U = data.output.U;
        $("#methodOutput").html(
            "Usando " + method + " obtenemos LU de la siguiente forma L : " +
            L + " y U : " +
            U + " con un vector x:" +
            x
        )
    },
    interpolacionLagrange: function (data) {
        var L = data.output.L;
        var valor = data.output.valor_interpolar;
        var solucion = data.output.solucion_interpolar;
        $("#interpolacionOutput").html(
            "Usando la interpolacion de Lagrange los multiplicadores son L: " +
            L + " y el valor interpolado es P(" + valor + ") = " + solucion

        )
    },
    interpolacionNewton: function (data) {
        var B = data.output.B;
        var valor = data.output.valor_interpolar;
        var solucion = data.output.solucion_interpolar;
        $("#interpolacionOutput").html(
            "Usando la interpolacion de Newton los valor de la diagonal de la matriz de interpolacion sacada por diferencia dividida son:" + B +
            " y el valor interpolado es P(" + valor + ") = " +
            solucion
        )
    },
    integracionNumerica: function (data, method) {
        var valor = data.output;
        $("#integracionOutput").html(
            "Con " + method + 
            " la integral de la funcion es = " + 
            valor 
        )
        
    }
}