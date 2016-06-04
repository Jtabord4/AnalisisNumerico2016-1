var capture2 = {
    integracion: function () {
        //arreglo de datos
        var dataIntegracion = [];


        // obetener valores
        $('.integracionIn').each(function () {
            var data = ($(this).val());
            dataIntegracion.push(data)

        });
        //objeto json
        var searchOut = {
            '"eq"': dataIntegracion[0],
            '"inicial"': dataIntegracion[1],
            '"final"': dataIntegracion[2],
            '"iteraciones"': dataIntegracion[3],

        }
        console.log(searchOut)

        //envio de datos
        $.ajax({
            url: '...',
            type: 'POST',
            data: JSON.stringify(searchOut),
            contentType: 'application/json',
            dataType: 'json',
            success: function (response) {
                //mostrar resultado
                show.integracion(JSON.parse(response))
            }
        });

    }
    
}