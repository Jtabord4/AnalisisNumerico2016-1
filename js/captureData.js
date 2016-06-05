
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
            '"eq"': dataIncremental[0],
            '"inicio"': dataIncremental[1],
            '"iteraciones"': dataIncremental[3],
            '"delta"': dataIncremental[2],

        }
        console.log(searchOut)

        //envio de datos
        $.ajax({
            url: 'http://74.208.132.152/practica/basic/busquedas_incrementales',
            type: 'POST',
            data: JSON.stringify(searchOut),
            contentType: 'application/json',
            dataType: 'json',
            success: function (response) {
                //mostrar resultado
                show.busquedaIncremental(JSON.parse(response))
            }
        });

    },

    bisection: function () {
        var bisectionData = [];
        $('.bisection').each(function () {
            var data = ($(this).val());
            bisectionData.push(data)
        });

        var bisectionOut = {
            '"eq"': dataIncremental[0],
            '"x0"': dataIncremental[1],
            '"x1"': dataIncremental[2],
            '"iteraciones"': dataIncremental[3],
            '"tolerancia"': dataIncremental[4],

        }

        $.ajax({
            url: '...',
            type: 'POST',
            data: JSON.stringify(bisectionOut),
            contentType: 'application/json',
            dataType: 'json',
            success: function (response) {
                //mostrar resultado
                show.bisection(JSON.parse(response))
            }
        });
    },

    newton: function () {
        var newtonData = [];
        $('.newton').each(function () {
            var data = ($(this).val());
            newtonData.push(data)
        });

        var newtonOutput = {
            'eq': dataIncremental[0],
            'inicio': dataIncremental[1],
            'iteraciones': dataIncremental[3],
            'delta': dataIncremental[2],

        }

        $.ajax({
            url: '...',
            type: 'POST',
            data: JSON.stringify(newtonOutput),
            contentType: 'application/json',
            dataType: 'json',
            success: function (response) {
                //mostrar resultado
                show.newton(JSON.parse(response))
            }
        });
    },
    fijo: function () {
        var fijoData = [];
        $('.fijo').each(function () {
            var data = ($(this).val());
            fijoData.push(data)
        });

        var fijoOutput = {
            'eq': dataIncremental[0],
            'inicio': dataIncremental[1],
            'iteraciones': dataIncremental[3],
            'delta': dataIncremental[2],

        }

        $.ajax({
            url: '...',
            type: 'POST',
            data: JSON.stringify(fijoOutput),
            contentType: 'application/json',
            dataType: 'json',
            success: function (response) {
                //mostrar resultado
                show.fijo(JSON.parse(response))
            }
        });

    },

    directos: function (className) {
        var directosData = [];
        $(className).each(function () {
            var data = ($(this).val());
            directosData.push(data)
        });

        listToMatrix(directosData, (matriz.idVariable + 1))

        function listToMatrix(list, elementsPerSubArray) {
            var matrix = [], i, k;
            var b = [];

            for (i = 0, k = -1; i < list.length; i++) {
                if (i % elementsPerSubArray === 0) {
                    k++;
                    matrix[k] = [];
                }

                matrix[k].push(list[i]);


            }

            for (var i = 0; i < matrix.length; i++) {
                b.push(matrix[i][matriz.idVariable]);
                


            }



        }

        //console.log(directosData);

        /*var directoOutput = {
            'eq': dataIncremental[0],
            'inicio': dataIncremental[1],
            'iteraciones': dataIncremental[3],
            'delta': dataIncremental[2],

        }*/

        $.ajax({
            url: '...',
            type: 'POST',
            data: JSON.stringify(fijoOutput),
            contentType: 'application/json',
            dataType: 'json',
            success: function (response) {
                //mostrar resultado
                show.fijo(JSON.parse(response))
            }
        });

    },
    iterativos: function (className) {
        var iterativosData = [];
        $(className).each(function () {
            var data = ($(this).val());
            iterativosData.push(data)
        });

        listToMatrix1(iterativosData, (matriz.idVariable + 1))

        function listToMatrix1(list, elementsPerSubArray) {
            var matrix = [], i, k;

            for (i = 0, k = -1; i < list.length; i++) {
                if (i % elementsPerSubArray === 0) {
                    k++;
                    matrix[k] = [];
                }

                matrix[k].push(list[i]);
            }

        }

        //console.log(directosData);

        /*var directoOutput = {
            'eq': dataIncremental[0],
            'inicio': dataIncremental[1],
            'iteraciones': dataIncremental[3],
            'delta': dataIncremental[2],

        }*/

        $.ajax({
            url: '...',
            type: 'POST',
            data: JSON.stringify(fijoOutput),
            contentType: 'application/json',
            dataType: 'json',
            success: function (response) {
                //mostrar resultado
                show.fijo(JSON.parse(response))
            }
        });


    },
    
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