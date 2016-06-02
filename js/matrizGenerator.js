
/*Matriz Generator*/


var matriz = {

    generate: function () {
        $("#matrizEcuaciones").html("");
        var variables = $("#numeroVariables").val();
        var td = '<td><input></input></td>'
        for (var i = 0; i < variables; i++) {
            td = td + '<td><input type="number"></input></td>';
        }
        if (variables > 0) {
            // td * (variables + 1) 
            for (var i = 0; i < variables; i++) {
                $("#matrizEcuaciones").append('<tr>' + td + '</tr>')
            }

        }




    },


    getValue: function () {
        $("#iconAlert").click(function () {
            $("#alertModal").modal('hide');
            $(".panel-danger").show(500);
        });
    }


}