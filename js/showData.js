
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
    newton: function (data) {
        if (data.status === 'true') {
            var output = data.output;
            $('#resultadoBisection').html(output)
        }
    },
    fijo: function (data) {
        if (data.status === 'true') {
            var output = data.output;
            $('#resultadoFijos').html(output)
        }
    }
}