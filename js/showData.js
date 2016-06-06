
var show = {

    busquedaIncremental: function (data) {
        if (data.status === 'true') {
            for (var i = 0; i < data.output.length; i++) {
                var x0 = data.output[i].x0;
                var x1 = data.output[i].x1;
                var f0 = data.output[i].fx0;
                var f1 = data.output[i].fx1;
                var out = '<li class="list-group-item">' +
                    $('#resultadoSearch').append(
                        '<li class="list-group-item">Intervalo :' + x0
                        + '-' + x1
                        + 'evaluando en los puntos'
                        + f0 + 'y'
                        + f1 + '</li>'
                    )
            }
        }
    },

    bisection: function (data) {
        if (data.status === 'true') {
            var a = data.output.a;
            var b = data.output.b;
            var m = data.output.m;
            var error = data.output.errabs;
            $('#resultadoBisection').html(
                '<div>Entre el intervalo' + a +
                'y' + b +
                'hay una raiz en' + m +
                'con un error de' + error
                + '</div>'
            )
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
        var n = null;
        if (data.status === 'true') {
            n = data.output.n;
         /*   var n = data.output.n;
            var vector = data.output.vector;
            var error = data.output.error;
            var motivo = data.output.motivo_salida;*/
            console.log(data.output)
            console.log(data.output.n)
            console.log(data.output.vector)
            console.log(data.output.error)
            $('#iterativosOutput').html(
                '<div> Por' + method + '  el metodo termina por' +
                data.output.motivo_salida + 'en la iteracion' +
                data.output.n + n + 'con el siguiente vector:' +
                data.output.vector + 'y un error de' +
                data.output.error
            )

        }
    }
}