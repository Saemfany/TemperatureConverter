function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");
  
    if (isNaN(temperature)) {
      result.textContent = "Please enter a valid number for temperature.";
      return;
    }
  
    switch (unit) {
        case "celsius":
            result.innerHTML = "Celcius = " + temperature + "°C<br>";
            result.innerHTML += "Reamur = " + (temperature * 4/5) + "°R<br>";
            result.innerHTML += "Fahrenheit = " + ((temperature * 9/5) + 32) + "°F<br>";
            result.innerHTML += "Kelvin = " + (temperature + 273.15) + "°K";
            break;
        case "reamur":
            result.innerHTML = "Reamur = " + temperature + "°R<br>";
            result.innerHTML += "Celsius = " + (temperature * 5/4) + "°C<br>";
            result.innerHTML += "Fahrenheit = " + ((temperature * 9/4) + 32) + "°F<br>";
            result.innerHTML += "Kelvin = " + ((temperature * 5/4) + 273.15) + "°K";
            break;
        case "fahrenheit":
            result.innerHTML = "Fahrenheit = " + temperature + "°F<br>";
            result.innerHTML += "Celsius = " + ((temperature - 32) * 5/9) + "°C<br>";
            result.innerHTML += "Reamur = " + ((temperature - 32) * 4/9) + "°R<br>";
            result.innerHTML += "Kelvin = " + ((temperature - 32) * 5/9 + 273.15) + "°K";
            break;
        case "kelvin":
            result.innerHTML = "Kelvin = " + temperature + "°K<br>";
            result.innerHTML += "Celsius = " + (temperature - 273.15) + "°C<br>";
            result.innerHTML += "Reamur = " + ((temperature - 273.15) * 4/5) + "°R<br>";
            result.innerHTML += "Fahrenheit = " + ((temperature - 273.15) * 9/5 + 32) + "°F";
            break;
        default:
            result.textContent = "Invalid unit.";
    }

    switch (unit) {
        case "celsius":
            explanation.innerHTML = "Celcius = " + temperature + "°C<br>";
            explanation.innerHTML += "Reamur = Celcius × 4/5 = " + temperature + " × 4/5 = " + (temperature * 4/5) + "°R<br>";
            explanation.innerHTML += "Fahrenheit = (" + temperature + " x 9/5) + 32 = " + ((temperature * 9/5) + 32) + "°F<br>";
            explanation.innerHTML += "Kelvin = " + (temperature + 273.15) + "°K";
            break;
        case "reamur":
            explanation.innerHTML = "Reamur = " + temperature + "°R<br>";
            explanation.innerHTML += "Celsius = " + (temperature * 5/4) + "°C<br>";
            explanation.innerHTML += "Fahrenheit = " + ((temperature * 9/4) + 32) + "°F<br>";
            explanation.innerHTML += "Kelvin = " + ((temperature * 5/4) + 273.15) + "°K";
            break;
        case "fahrenheit":
            explanation.innerHTML = "Fahrenheit = " + temperature + "°F<br>";
            explanation.innerHTML += "Celsius = " + ((temperature - 32) * 5/9) + "°C<br>";
            explanation.innerHTML += "Reamur = " + ((temperature - 32) * 4/9) + "°R<br>";
            explanation.innerHTML += "Kelvin = " + ((temperature - 32) * 5/9 + 273.15) + "°K";
            break;
        case "kelvin":
            explanation.innerHTML = "Kelvin = " + temperature + "°K<br>";
            explanation.innerHTML += "Celsius = " + (temperature - 273.15) + "°C<br>";
            explanation.innerHTML += "Reamur = " + ((temperature - 273.15) * 4/5) + "°R<br>";
            explanation.innerHTML += "Fahrenheit = " + ((temperature - 273.15) * 9/5 + 32) + "°F";
            break;
        default:
            explanation.textContent = "Invalid unit.";
    }
}