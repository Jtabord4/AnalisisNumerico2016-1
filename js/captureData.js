
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
        $.ajax({
            url: '...',
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
            'eq': dataIncremental[0],
            'inicio': dataIncremental[1],
            'iteraciones': dataIncremental[3],
            'delta': dataIncremental[2],

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

    }


}