//Código del cuadrado.
console.group("Cuadrado");
    // const lado_cuadrado = 5;
    // console.log("Los lados del cuadrado miden: " + lado_cuadrado +  "cm.");

    //Perímetro
    function perimetro_cuadrado (lado)
    {
        return lado * 4;
    }
    //console.log("El perímetro del cuadrado es: " +  perimetro_cuadrado + "cm.");

    //Area
    function area_cuadrado (lado)
    { 
        return lado * lado;
    }
    //console.log("El area del cuadrado es: " + area_cuadrado + "cm^2.");
console.groupEnd();


//Código del triangulo
console.group("Triangulo");
    // const lado_triangulo1 = 6;
    // const lado_triangulo2 = 6;
    // const base_triangulo = 4;
    // const altura_triangulo = 5.5;
    // console.log("Los lados del triangulo miden: " 
    //     + lado_triangulo1 
    //     + "cm, " 
    //     + lado_triangulo2 
    //     + "cm, " 
    //     + base_triangulo 
    //     + "cm."
    // );
    // console.log("La altura del triangulo es de: " + altura_triangulo + "cm.");

    //Perímetro
    function perimetro_triangulo (lado1, lado2, base)
    {
        return lado1 + lado2 + base;
    }
    //console.log("El perímetro del triangulo es: " +  perimetro_triangulo + " cm.");

    //Area
    function area_triangulo (base, altura)
    {
        return (base * altura) /2
    } 
    //console.log("El area del triangulo es de: " + area_triangulo + "cm^2.");
console.groupEnd();

//Código del triangulo
console.group("Circulo");
    //const radio_circulo = 4;
    function diametro_circulo (radio)
    {
        return radio * 2;
    }

    const PI = Math.PI;

    function perimetro_circulo (radio)
    {
        const diametro = diametro_circulo(radio);
        return diametro * PI;
    }

    function area_ciculo(radio)
    {
        return (radio * radio) * PI;
    }
    //const perimetro_circulo = diametro_circulo * PI;
    // const area_ciculo = (radio_circulo * radio_circulo) * PI;

    // console.log("El radio del ciculo es: " +  radio_circulo + " cm.");

    // console.log("El diametro del circulo es: " + diametro_circulo + " cm.");

    // console.log("El perímetro del circulo es: " + perimetro_circulo + " cm.");

    // console.log("El area del circulo es: " + area_ciculo + " cm^2.");
console.groupEnd();


//Conectar con HTML
function calcular_perimetro_cuadrado()
{
    const input = document.getElementById("input_cuadrado");
    const valor = input.value;

    const perimetro = perimetro_cuadrado(valor);
    alert("El perimetro del cuadrado es: " + perimetro);
}

function calcular_area_cuadrado()
{
    const input = document.getElementById("input_cuadrado");
    const valor = input.value;

    const area = area_cuadrado(valor);
    alert("El area del cuadrado es: " + area);
}