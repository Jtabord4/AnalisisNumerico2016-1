
var show = {

    busquedaIncremental: function (data) {
            if(data.status === 'true'){
            var output = data.output;
            $('#resultadoSearch').html(output)
            }
    }
}