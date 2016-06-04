
/*capture the data for send to back-end*/


var capture = {

    busquedaIncremental: function () {
        //arreglo de datos
        var dataIncremental = [];


          // obetener valores
        $('.searchIn').each(function () {
            var data = ($(this).val());
            dataIncremental.push(data)

        });
        //objeto json
        var searchOut = {
            'eq': dataIncremental[0],
            'inicio': dataIncremental[1],
            'iteraciones': dataIncremental[3],
            'delta': dataIncremental[2],

        }
        console.log(searchOut)

        //envio de datos
        /*     $.ajax({
                 url: '...',
                 type: 'post',
                 data: JSON.stringify(searchOut),
                 contentType: 'application/json',
                 dataType: 'json'
             });*/


        // recibir datos
        
        
        
        
        $.ajax({
            url: '...',
            type: 'GET',
            contentType: false,
            processData: false,
            success: function (response) {
                show.busquedaIncremental(JSON.parse(response))
            }
        });


    },


}