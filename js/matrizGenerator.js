
/*Matriz Generator*/






var matriz = {
    idVariable: 0,

    generate: function (idMatriz, idTitulo, idInput, className) {
        $(idMatriz).html("");
        $(idTitulo).html("");
        matriz.idVariable = 0;
        var variables = $(idInput).val();

        var td = '<td><input class=' + className + ' type="number"></input></td>'
        var th = '<td>X' + matriz.idVariable + '</td>'
        for (var i = 0; i < variables; i++) {
            td = td + '<td><input class=' + className + ' type="number"></input></td>';
            th = th + '<td>X' + (matriz.idVariable + 1) + '</td>'
            matriz.idVariable++;
            /*if (matriz.idVariable = variables) {
                th = th + '<td> B </td>';
            }*/
        }
        if (variables > 0) {
            $(idTitulo).append(th);
            // td * (variables + 1) 

            for (var i = 0; i < variables; i++) {
                $(idMatriz).append('<tr>' + td + '</tr>')

            }

        } else {

        }

    },


    tablaInterpolacion: function () {
        $("#matrizInterpolacion").html("");
        $("#interpolacionTitulos").html("");
        var variablesInterpolacion = $("#variablesInterpolacion").val();
        var row = '<td><input class"" type="number"></input></td><td><input class"" type="number"></input></td>'
        $("#interpolacionTitulos").append('<td>x</td><td>f(x)</td>');
        for (var i = 0; i < variablesInterpolacion; i++) {
            $("#matrizInterpolacion").append('<tr>' + row + '</tr>')

        }
    }
}