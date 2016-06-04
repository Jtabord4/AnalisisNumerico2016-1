
var cambio = { 
      
    cambioModal: function(metodo) {
        var incremental = "<div><p>The incremental search method is a numerical method that is used when is needed to find an interval of two values of ‘x’ where the root is supposed to be. The incremental search method starts with an initial value x0 and an interval between the points x0 and x1, that interval is going to be called a delta. It is supposed that we are going to search the root in the x-axis from left to right.<p></div>";
        var grupo1 = "<div><p><h4>Bisection</h4><br>The bisection method is a very simple numerical method; this method uses two initial values of ‘x’, then we evaluate those values on f(x), but there is a catch, those f(x1) and f(x2) values must have opposite sign so we can assure that a root exists between x1 and x2.<h4>Secant</h4><br>The Secant method is a numerical method for solving numerical equations of one variable, is usually known as a modified Newton method because uses almost the same iterative formula, the different thing is that the Secant method do not need the derivate of the function because we are going to approximate it.<h4>False Position</h4><br>False Position Method is a numerical method used when we need to find the root of an equation, this combines the bisection and secant methods.If you want to use this method you have to be sure that continuity exists between the intervals where the root is located. This method usually needs two values of x with opposite sign so the method can be sure that a root exist between those two values.</p></div>";
        var grupo2 = "<div></div>";
        var punto = "<div></div>";
        
        if(metodo === 'busqueda'){
            $('#titulo').html("<h2>Incremental Search</h2>"),
            $('#texto').html(incremental)
        }else if(metodo === 'grupo1'){
             $('#titulo').html("<h2>Bisection | Secant | False Position</h2>"),
             $('#texto').html(grupo1)
        }else if(metodo = grupo2){
            
        }else if(metodo = grupo3){
            
        }else if(metodo = grupo4){
            
        }
        
    }
}
