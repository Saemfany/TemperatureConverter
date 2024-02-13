function convertTemperature() {
    var temperatureInput = document.getElementById("temperature");
    var temperature = parseFloat(temperatureInput.value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var resultElement = document.getElementById("result");
  
    // Reset previous errors
    document.getElementById("temperatureError").textContent = "";
  
    if (isNaN(temperature)) {
      document.getElementById("temperatureError").textContent = "Please enter a valid number.";
      return;
    }
  
    var result;
    switch (fromUnit) {
      case "celcius":
        switch (toUnit) {
          case "celcius":
            result = temperature;
            break;
          case "fahrenheit":
            result = (temperature * 9/5) + 32;
            break;
          case "kelvin":
            result = temperature + 273.15;
            break;
        }
        break;
      case "fahrenheit":
        switch (toUnit) {
          case "celcius":
            result = (temperature - 32) * 5/9;
            break;
          case "fahrenheit":
            result = temperature;
            break;
          case "kelvin":
            result = (temperature - 32) * 5/9 + 273.15;
            break;
        }
        break;
      case "kelvin":
        switch (toUnit) {
          case "celcius":
            result = temperature - 273.15;
            break;
          case "fahrenheit":
            result = (temperature - 273.15) * 9/5 + 32;
            break;
          case "kelvin":
            result = temperature;
            break;
        }
        break;
    }
  
    resultElement.textContent = "Result: " + result.toFixed(2) + " " + toUnit;

    // switch (unit) {
    //     case "celsius":
    //         explanation.innerHTML = "Celcius = " + temperature + "°C<br>";
    //         explanation.innerHTML += "Reamur = Celcius × 4/5 = " + temperature + " × 4/5 = " + (temperature * 4/5) + "°R<br>";
    //         explanation.innerHTML += "Fahrenheit = (" + temperature + " x 9/5) + 32 = " + ((temperature * 9/5) + 32) + "°F<br>";
    //         explanation.innerHTML += "Kelvin = " + (temperature + 273.15) + "°K";
    //         break;
    //     case "reamur":
    //         explanation.innerHTML = "Reamur = " + temperature + "°R<br>";
    //         explanation.innerHTML += "Celsius = " + (temperature * 5/4) + "°C<br>";
    //         explanation.innerHTML += "Fahrenheit = " + ((temperature * 9/4) + 32) + "°F<br>";
    //         explanation.innerHTML += "Kelvin = " + ((temperature * 5/4) + 273.15) + "°K";
    //         break;
    //     case "fahrenheit":
    //         explanation.innerHTML = "Fahrenheit = " + temperature + "°F<br>";
    //         explanation.innerHTML += "Celsius = " + ((temperature - 32) * 5/9) + "°C<br>";
    //         explanation.innerHTML += "Reamur = " + ((temperature - 32) * 4/9) + "°R<br>";
    //         explanation.innerHTML += "Kelvin = " + ((temperature - 32) * 5/9 + 273.15) + "°K";
    //         break;
    //     case "kelvin":
    //         explanation.innerHTML = "Kelvin = " + temperature + "°K<br>";
    //         explanation.innerHTML += "Celsius = " + (temperature - 273.15) + "°C<br>";
    //         explanation.innerHTML += "Reamur = " + ((temperature - 273.15) * 4/5) + "°R<br>";
    //         explanation.innerHTML += "Fahrenheit = " + ((temperature - 273.15) * 9/5 + 32) + "°F";
    //         break;
    //     default:
    //         explanation.textContent = "Invalid unit.";
    // }
}