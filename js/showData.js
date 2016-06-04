
var show = {

    busquedaIncremental: function (data) {
        if (data.status === 'true') {
            var output = data.output;
            $('#resultadoSearch').html(output)
        }
    },

    bisection: function (data) {
        if (data.status === 'true') {
            var output = data.output;
            $('#resultadoBisection').html(output)
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