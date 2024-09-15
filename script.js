const prompt = require('prompt-sync')();

function convertirCelsius() {
    let gradosCelsius = prompt("Ingresa la temperatira en grados Celsius:");

    // se convierte el valor a numero y se verifica si es valido
    while (isNaN(parseFloat(gradosCelsius))) {
        console.log("Por favor, ingresa un número válido.");
        gradosCelsius = prompt("Ingresa la temperatura en grados Celsius:");
    }

    // se convierte el valor a num despues de asegurarnos de que es valido
    gradosCelsius = parseFloat(gradosCelsius);
    
    // de velsius a fahrenheit
    let gradosFahrenheit = (gradosCelsius * 9/5) + 32;
    //  de celsius a kelvin
    let gradosKelvin = gradosCelsius + 273.15;

    // imprimimos los resultados
    console.log("Grados Fahrenheit: " + gradosFahrenheit);
    console.log("Grados Kelvin: " + gradosKelvin);
}
convertirCelsius();