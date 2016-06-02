
/*Matriz Generator*/


var matriz = {
    idVariable: 0,

    generate: function () {
        $("#matrizEcuaciones").html("");
        $("#variablesId").html("");
        matriz.idVariable = 0;
        var variables = $("#numeroVariables").val();

        var td = '<td><input class="inputMatriz" type="number"></input></td>'
        var th = '<td>X' + matriz.idVariable + '</td>'
        for (var i = 0; i < variables; i++) {
            td = td + '<td><input class="inputMatriz" type="number"></input></td>';
            th = th + '<td>X' + (matriz.idVariable + 1) + '</td>'
            matriz.idVariable++;
            /* if (i = variables) {
                 th = th + '<td> B </td>';
             }*/
        }
        if (variables > 0) {
            $("#variablesId").append(th);
            // td * (variables + 1) 

            for (var i = 0; i < variables; i++) {
                $("#matrizEcuaciones").append('<tr>' + td + '</tr>')

            }

        } else {

        }

    },


    getValue: function () {

    }


}