document.addEventListener('DOMContentLoaded', function() {
    // Datos estáticos para la temperatura y la velocidad del viento
    var temperatureCelsius = 15; // Temperatura en Celsius
    var windSpeedKPH = 10; // Velocidad del viento en kilómetros por hora

    // Función para calcular la sensación térmica
    function calculateWindChill(temperature, windSpeed) {
        // Fórmula para calcular la sensación térmica en Celsius
        var windChillCelsius = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
        return Math.round(windChillCelsius); // Redondear el valor
    }

    // Mostrar la sensación térmica si las condiciones son válidas
    if (temperatureCelsius <= 10 && windSpeedKPH > 4.8) {
        var windChill = calculateWindChill(temperatureCelsius, windSpeedKPH);
        document.getElementById('wind-chill-summary').textContent = windChill + '°C';
    } else {
        document.getElementById('wind-chill-summary').textContent = 'N/A';
    }

    // Datos estáticos para summary dataSummary
    var dataSummary = {
        area: "20 km²",
        population: "245,137",
        capital: "Cajamarca",
        language: "Spanish",
        currency: "Sol",
        timezone: "GMT-5",
        callingCode: "+51",
        internetTLD: ".pe",
    };

    // Datos estáticos para summary weatherSummary
    var weatherSummary = {
        temperature: "17°C",
        condition: "Cloudy",
        windSpeed: "10Km/h",
        windChill: "N/A",
    };

    // Mostrar los datos en summary dataSummary
    document.getElementById('area').textContent = dataSummary.area;
    document.getElementById('population').textContent = dataSummary.population;
    document.getElementById('capital').textContent = dataSummary.capital;
    document.getElementById('language').textContent = dataSummary.language;
    document.getElementById('currency').textContent = dataSummary.currency;
    document.getElementById('timezone').textContent = dataSummary.timezone;
    document.getElementById('calling-code').textContent = dataSummary.callingCode;
    document.getElementById('internet-tld').textContent = dataSummary.internetTLD;

    // Mostrar los datos en summary weatherSummary
    document.getElementById('temperature').textContent = weatherSummary.temperature;
    document.getElementById('condition').textContent = weatherSummary.condition;
    document.getElementById('wind-speed').textContent = weatherSummary.windSpeed;

    // Actualizar el año actual en el pie de página
    var currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Obtener la fecha de la última modificación del documento
    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = lastModifiedDate;
});








document.getElementById("currentyear").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = document.lastModified;