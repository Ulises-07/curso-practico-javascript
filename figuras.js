//Código del cuadrado.
console.group("Cuadrado");
    const lado_cuadrado = 5;
    console.log("Los lados del cuadrado miden: " + lado_cuadrado +  "cm.");

    //Perimetro
    const perimetro_cuadrado = lado_cuadrado * 4;
    console.log("El perímetro del cuadrado es: " +  perimetro_cuadrado + "cm.");

    //Area
    const area_cuadrado = lado_cuadrado * lado_cuadrado;
    console.log("El area del cuadrado es: " + area_cuadrado + "cm^2.");
console.groupEnd();


//Código del triangulo
console.group("Triangulo");
    const lado_triangulo1 = 6;
    const lado_triangulo2 = 6;
    const base_triangulo = 4;
    const altura_triangulo = 5.5;
    console.log("Los lados del triangulo miden: " 
        + lado_triangulo1 
        + "cm, " 
        + lado_triangulo2 
        + "cm, " 
        + base_triangulo 
        + "cm."
    );
    console.log("La altura del triangulo es de: " + altura_triangulo + "cm.");

    //Perimetro
    const perimetro_triangulo = lado_triangulo1 + lado_triangulo2 + base_triangulo;
    console.log("El perímetro del triangulo es: " +  perimetro_triangulo + " cm.");

    //Area
    const area_triangulo = (base_triangulo * altura_triangulo) / 2;
    console.log("El area del triangulo es de: " + area_triangulo + "cm^2.");
console.groupEnd();

//Código del triangulo
console.group("Circulo");
    const radio_circulo = 4;
    const diametro_circulo = radio_circulo * 2;
    const PI = Math.PI;

    const perimetro_circulo = diametro_circulo * PI;
    const area_ciculo = (radio_circulo * radio_circulo) * PI;

    console.log("El radio del ciculo es: " +  radio_circulo + " cm.");

    console.log("El diametro del circulo es: " + diametro_circulo + " cm.");

    console.log("El perímetro del circulo es: " + perimetro_circulo + " cm.");

    console.log("El area del circulo es: " + area_ciculo + " cm^2.");
console.groupEnd();