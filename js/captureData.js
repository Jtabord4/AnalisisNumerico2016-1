
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

    bisection: function (url) {
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
            url: url,
            type: "POST",
            data: JSON.stringify({ "eq": eq, "x0": x0, "x1": x1, "iteraciones": iteraciones, "tolerancia": tolerancia }),
            contentType: 'application/json',
            success: function (response) {
                //mostrar resultado
                show.bisection(JSON.parse(response));
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

        var eq = secanteData[0];
        var x0 = secanteData[1];
        var x1 = secanteData[2];
        var iteraciones = secanteData[3];
        var tolerancia = secanteData[4];

        $.ajax({
            url: 'http://74.208.132.152/practica/no_lineales/secante',
            type: "POST",
            data: JSON.stringify({ "eq": eq, "x0": x0, "x1": x1, "iteraciones": iteraciones, "tolerancia": tolerancia }),
            contentType: 'application/json',
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



        var eq = newtonData[0];
        var derivada = newtonData[1];
        var inicio = newtonData[2];
        var iteraciones = newtonData[3];
        var delta = newtonData[4];

        $.ajax({
            url: 'http://74.208.132.152/practica/no_lineales/newton',
            type: "POST",
            data: JSON.stringify({ "eq": eq, "x0": inicio, "derivate": derivada, "iteraciones": iteraciones, "delta": delta }),
            contentType: 'application/json',
            success: function (response) {
                //mostrar resultado
                show.newton(JSON.parse(response));
            }
        });
    },
    fijo: function () {
        var fijoData = [];

        $('.fijo').each(function () {
            var data = ($(this).val());
            fijoData.push(data)
        });

        var eqfx = fijoData[0];
        var eqfg = fijoData[1];
        var x0 = fijoData[2];
        var iteraciones = fijoData[3];
        var tolerancia = fijoData[4];



        $.ajax({
            url: 'http://74.208.132.152/practica/no_lineales/puntofijo',
            type: "POST",
            data: JSON.stringify({ "eqfx": eqfx, "x0": x0, "eqfg": eqfg, "iteraciones": iteraciones, "tolerancia": tolerancia }),
            contentType: 'application/json',
            success: function (response) {
                //mostrar resultado
                show.fijo(JSON.parse(response));
            }
        });

    },

    directos: function (className, method) {
        var directosData = [];
        var A = [];
        var b = [];
        var url;
        $(className).each(function () {
            var data = ($(this).val());
            directosData.push(data)
        });

        listToMatrix(directosData, (matriz.idVariable + 1))

        function listToMatrix(list, elementsPerSubArray) {
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


        //eliminacion gauss y parcial
        if (method === 'gauss') {
            url = 'http://74.208.132.152/practica/sistemas_ecuaciones/elim_gausiana'
        } else if (method === 'parcial') {
            url = 'http://74.208.132.152/practica/sistemas_ecuaciones/elim_gausiana_pivoteo/'
        }

        $.ajax({
            url: url,
            type: "POST",
            data: JSON.stringify({ "A": A, "b": b }),
            contentType: 'application/json',
            success: function (response) {
                //mostrar resultado
                show.eliminacionParcial(JSON.parse(response))
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

        if (method === 'jacobi') {
            url = 'http://74.208.132.152/practica/sistemas_ecuaciones/jacobi'
        } else if (method === 'gauss') {
            url = 'http://74.208.132.152/practica/sistemas_ecuaciones/gauss_seidel'
        } else if (method === 'completo') {
            url = 'http://74.208.132.152/practica/sistemas_ecuaciones/elim_gausiana_pivoteo_total'
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

    integracion: function (method) {
        //arreglo de datos
        var dataIntegracion = [];



        // obetener valores
        $('.integracionIn').each(function () {
            var data = ($(this).val());
            dataIntegracion.push(data)

        });
        //objeto json
        var eq = dataIntegracion[0];
        var inicial = dataIntegracion[1];
        var final = dataIntegracion[2];
        var iteraciones = dataIntegracion[3];
      
        if (method === 'simpson') {
            url = 'http://74.208.132.152/practica/integracion/simpson'
        } else if (method === 'trapecio') {
            url = 'http://74.208.132.152/practica/integracion/trapecio'
        }

        //envio de datos
        $.ajax({
            url: url,
            type: "POST",
            data: JSON.stringify({ "eq": eq, "limite_inferior": inicial, "limite_superior": final}),
            contentType: 'application/json',
            success: function (response) {
                //mostrar resultado
                if (method === 'simpson') {
                    show.interpolacionLagrange(JSON.parse(response), 'simpson')
                } else if (method === 'trapecio') {
                    show.interpolacionNewton(JSON.parse(response), 'trapecio')
                }
            }
        });

    },
    interpolacion: function (className, method) {
        var interpolacionData = [];
        var valor = $("#interpolacionValue");
        var coordenadas = [];
        var url;
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
            coordenadas = matrix;
        }

        if (method === 'lagrange') {
            url = 'http://74.208.132.152/practica/interpolacion/lagrange'
        } else if (method === 'newton') {
            url = 'http://74.208.132.152/practica/interpolacion/newton'
        }

        $.ajax({
            url: url,
            type: "POST",
            data: JSON.stringify({ "valor_interpolar": valor, "coordenadas": coordenadas }),
            contentType: 'application/json',
            success: function (response) {
                //mostrar resultado
                if (method === 'lagrange') {
                    show.interpolacionLagrange(JSON.parse(response))
                } else if (method === 'newton') {
                    show.interpolacionNewton(JSON.parse(response))
                }
            }
        });


    },
    methodLU: function (className, method) {
        var luData = [];
        var A = [];
        var b = [];
        var url = null;

        $(className).each(function () {
            var data = ($(this).val());
            luData.push(data)
        });

        listToMatrix1(luData, (matriz.idVariable + 1))

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

        if (method === 'croult') {
            url = 'http://74.208.132.152/practica/sistemas_ecuaciones/croult'
        } else if (method === 'doolittle') {
            url = 'http://74.208.132.152/practica/sistemas_ecuaciones/doolittle'
        } else if (method === 'cholesky') {
            url = 'http://74.208.132.152/practica/sistemas_ecuaciones/cholesky'
        } else if (method === 'LUgauss') {
            url = 'http://74.208.132.152/practica/sistemas_ecuaciones/elim_gausiana_pivoteo_total'
        } else if (method === 'LUparcial') {
            url = 'http://74.208.132.152/practica/sistemas_ecuaciones/elim_gausiana_pivoteo_total'
        }
        $.ajax({
            url: url,
            type: "POST",
            data: JSON.stringify({ "A": A, "b": b }),
            contentType: 'application/json',
            success: function (response) {
                //mostrar resultado
                if (method === 'croult') {
                    show.methodLU(JSON.parse(response), 'croult')
                } else if (method === 'doolittle') {
                    show.methodLU(JSON.parse(response), 'doolittle')
                } else if (method === 'cholesky') {
                    show.methodLU(JSON.parse(response), 'cholesky')
                }
            }
        });


    }


}