
var cambio = { 
      
    cambioModal: function(metodo) {
        var incremental = "<div><p>The incremental search method is a numerical method that is used when is needed to find an interval of two values of ‘x’ where the root is supposed to be. The incremental search method starts with an initial value x0 and an interval between the points x0 and x1, that interval is going to be called a delta. It is supposed that we are going to search the root in the x-axis from left to right.<p></div>";
        var grupo1 = "<div><p><h4>Bisection</h4><br>The bisection method is a very simple numerical method; this method uses two initial values of ‘x’, then we evaluate those values on f(x), but there is a catch, those f(x1) and f(x2) values must have opposite sign so we can assure that a root exists between x1 and x2.<h4>Secant</h4><br>The Secant method is a numerical method for solving numerical equations of one variable, is usually known as a modified Newton method because uses almost the same iterative formula, the different thing is that the Secant method do not need the derivate of the function because we are going to approximate it.<h4>False Position</h4><br>False Position Method is a numerical method used when we need to find the root of an equation, this combines the bisection and secant methods.If you want to use this method you have to be sure that continuity exists between the intervals where the root is located. This method usually needs two values of x with opposite sign so the method can be sure that a root exist between those two values.</p></div>";
        var grupo2 = "<div><p><h4>Newton</h4><br>Newton's method is one of the most used root finder numerical method because of its fast and efficient design. Unlike the false position method, this method doesn't need an interval [a,b] with opposite signs. Newton's method just need an approximate value of the root.<h4>Multiple Roots</h4><br>We have studied two classes of functions for which there is additional difficulty in calculating their roots. The first of these are functions in which the desired root has a multiplicity greater than 1</p></div>";
        var punto = "<div><p>Fixed point method allows us to solve nonlinear one variable equations. We build an iterative method, using a sequence which converges to a fixed point of g(x), this fixed point is the exact solution of f(x)=0.</p></div>";
        var interpolacion = "<div><h4>Lagrange</h4><br>The Lagrange form of the interpolation polynomial shows the linear character of polynomial interpolation and the uniqueness of the interpolation polynomial. Therefore, it is preferred in proofs and theoretical arguments.<h4>Newton</h4><br> is the interpolation polynomial for a given set of data points in the Newton form. The Newton polynomial is sometimes called Newton's divided differences interpolation polynomial because the coefficients of the polynomial are calculated using divided differences.<h4>Linear Spline</h4><br> is often preferred over polynomial interpolation because the interpolation error can be made small even when using low degree polynomials for the spline. Spline interpolation avoids the problem of Runge's phenomenon, in which oscillation can occur between points when interpolating using high degree polynomials.<h4>Cubic Spline</h4><br> is a piecewise continuous curve, passing through each of the values in the table. There is a separate cubic polynomial for each interval, each with its own coefficients: together, these polynomial segments are denoted , the spline.</div>";
        
        if(metodo === 'busqueda'){
            $('#titulo').html("<h2>Incremental Search</h2>"),
            $('#texto').html(incremental)
        }else if(metodo === 'grupo1'){
             $('#titulo').html("<h2>Bisection | Secant | False Position</h2>"),
             $('#texto').html(grupo1)
        }else if(metodo === 'grupo2'){
             $('#titulo').html("<h2>Newton | Multiple Roots</h2>"),
             $('#texto').html(grupo2)
        }else if(metodo === 'punto'){
            $('#titulo').html("<h2>Fixed Point</h2>"),
             $('#texto').html(punto)
        }else if(metodo === 'interpolacion'){
             $('#titulo').html("<h2>Interpolation</h2>"),
             $('#texto').html(interpolacion)
        }     
    }
}
