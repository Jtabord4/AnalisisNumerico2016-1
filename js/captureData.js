
/*capture the data for send to back-end*/


var capture = {

    busquedaIncremental: function () {
        //arreglo de datos
        var dataIncremental = [];


        // obetener valores
        $(".searchIn").each(function () {
            var data = ($(this).val());
            dataIncremental.push(data)

        });

        var eq = dataIncremental[0];
        var inicio = dataIncremental[1];
        var delta = dataIncremental[2];
        var iteraciones = dataIncremental[3];
        var output = JSON.stringify({ "eq": eq, "inicio": inicio, "iteraciones": iteraciones, "delta": delta })

        //envio de datos
        $.ajax({
            url: 'http://74.208.132.152/practica/basic/busquedas_incrementales',
            type: "POST",
            data: output,
            contentType: 'application/json',
            success: function (response) {
                //mostrar resultado
                show.busquedaIncremental(JSON.parse(response))
            }
        });

    },

    bisection: function () {
        var bisectionData = [];
        $(".bisection").each(function () {
            var data = ($(this).val());
            bisectionData.push(data)
        });

        var eq = bisectionData[0];
        var x0 = bisectionData[1];
        var x1 = bisectionData[2];
        var iteraciones = bisectionData[3];
        var tolerancia = bisectionData[4];



        $.ajax({
            url: 'http://74.208.132.152/practica/no_lineales/biseccion',
            type: "POST",
            data: JSON.stringify({ "eq": eq, "x0": x0, "x1": x1, "iteraciones": iteraciones, "tolerancia": tolerancia }),
            contentType: 'application/json',
            dataType: 'json',
            success: function (response) {
                //mostrar resultado
                show.bisection(response)
            }
        });
    },
    reglaFalsa: function () {
        var reglaData = [];
        $('.bisection').each(function () {
            var data = ($(this).val());
            reglaData.push(data)
        });

        var reglaOut = {
            '"eq"': reglaData[0],
            '"x0"': reglaData[1],
            '"x1"': reglaData[2],
            '"iteraciones"': reglaData[3],
            '"tolerancia"': reglaData[4],

        }

        $.ajax({
            url: '...',
            type: 'POST',
            data: JSON.stringify(reglaOut),
            contentType: 'application/json',
            dataType: 'json',
            success: function (response) {
                //mostrar resultado
                show.bisection(JSON.parse(response))
            }
        });
    },
    secante: function () {
        var secanteData = [];
        $('.bisection').each(function () {
            var data = ($(this).val());
            secanteData.push(data)
        });

        var secanteOut = {
            '"eq"': secanteData[0],
            '"x0"': secanteData[1],
            '"x1"': secanteData[2],
            '"iteraciones"': secanteData[3],
            '"tolerancia"': secanteData[4],

        }

        $.ajax({
            url: '...',
            type: 'POST',
            data: JSON.stringify(secanteOut),
            contentType: 'application/json',
            dataType: 'json',
            success: function (response) {
                //mostrar resultado
                show.secante(JSON.parse(response))
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
            'eqfx': dataIncremental[0],
            'x0': dataIncremental[2],
            'eqfg': dataIncremental[1],
            'tolerancia': dataIncremental[4],
            'iteraciones': dataIncremental[3],
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
                matrix[i].pop();

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
    iterativosJacobi: function (className, method) {
        var iterativosData = [];
        var A = [];
        var b = [];
        var url = null;
        var iteraciones = $("#iteracionesIterativos").val();
        var tolerancia = $("#toleranciaIterativos").val();
        $(className).each(function () {
            var data = ($(this).val());
            iterativosData.push(data)
        });

        listToMatrix1(iterativosData, (matriz.idVariable + 1))

        function listToMatrix1(list, elementsPerSubArray) {
            var matrix = [], i, k;
            var bi = [];

            for (i = 0, k = -1; i < list.length; i++) {
                if (i % elementsPerSubArray === 0) {
                    k++;
                    matrix[k] = [];
                }

                matrix[k].push(list[i]);
            }
            for (var i = 0; i < matrix.length; i++) {
                bi.push(matrix[i][matriz.idVariable]);
                matrix[i].pop();
            }
            A = matrix;
            b = bi;


        }

        //console.log(directosData);

        var jacobiOutput = {
            '"A"': A,
            '"b"': b,
            '"iteraciones"': iteraciones,
            '"tolerancia"': tolerancia
        }
        if (method === 'jacobi') {
            url = 'http://74.208.132.152/practica/sistemas_ecuaciones/jacobi'
        } else if (method === 'gauss') {
            url = 'http://74.208.132.152/practica/sistemas_ecuaciones/gauss_seidel'
        }
        $.ajax({
            url: url,
            type: "POST",
            data: JSON.stringify({ "A": A, "b": b, "iteraciones": iteraciones, "tolerancia": tolerancia }),
            contentType: 'application/json',
            success: function (response) {
                //mostrar resultado
                if (method === 'jacobi') {
                    show.jacobi(JSON.parse(response), 'Jacobi')
                } else if (method === 'gauss') {
                    show.jacobi(JSON.parse(response), 'Gauss')
                }
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

    },
    interpolacion: function (className) {
        var interpolacionData = [];
        $(className).each(function () {
            var data = ($(this).val());
            interpolacionData.push(data)
        });

        listToMatrix1(interpolacionData, 2)

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


    }


}