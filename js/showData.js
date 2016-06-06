
var show = {

    busquedaIncremental: function (data) {
        var x0 = data.output[i].x0;
        var x1 = data.output[i].x1;
        var f0 = data.output[i].fx0;
        var f1 = data.output[i].fx1;
        if (data.status === 'true') {
            for (var i = 0; i < data.output.length; i++) {
                $("#resultadoSearch").append(
                    "<li class='list-group-item'>Intervalo :" + x0
                    + "-" + x1
                    + "evaluando en los puntos"
                    + f0 + "y"
                    + f1 + "</li>"
                )
            }
        }
    },

    bisection: function (data) {
        for (var i = 0; i < data.output.length; i++) {
            var a = data.output[i].a;
            var b = data.output[i].b;
            var m = data.output[i].m;
            var error = data.output[i].errabs;
            $("#resultadoBisection").append(
                "<div>Entre el intervalo" + a +
                "y" + b +
                "hay una raiz en" + m +
                "con un error de" + error
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
        if (data.status === 'true') {
            //output
        }
    },

    newton: function (data) {
        if (data.status === 'true') {
            var output = data.output;
            $('#resultadoBisection').html(output)
        }
    },
    fijo: function (data) {
        if (data.status === 'true') {
            var n = data.output.n;
            var error = data.output.errorabs;
            var gx = data.output.gx;
            var tolerancia = data.output.tolerancia;
            $('#resultadoFijos').html(
                '<div>En la interacion' + n +
                'con un error de' + errabs +
                'hay una raiz en' + gx +
                'cumpliendo con una tolerancia de' + tolerancia
                + '</div>'
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
    }
}