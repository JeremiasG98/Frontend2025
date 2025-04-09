var _a;
var apiKey = 'dbdf06313bba1f54d854c3d4f71e8827';
var difKelvin = 273.15;
var urlBase = 'https://api.openweathermap.org/data/2.5/weather';
(_a = document.getElementById('botonBusqueda')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var ciudadInput = document.getElementById('ciudadEntrada');
    var ciudad = ciudadInput ? ciudadInput.value.trim() : '';
    if (ciudad) {
        fetchDatosClima(ciudad);
    }
});
function fetchDatosClima(ciudad) {
    fetch("".concat(urlBase, "?q=").concat(ciudad, "&appid=").concat(apiKey))
        .then(function (response) {
        if (!response.ok)
            throw new Error('Error al obtener datos del clima');
        return response.json();
    })
        .then(function (data) { return mostrarDatosClima(data); })
        .catch(function (error) { return console.error(error); });
}
function mostrarDatosClima(data) {
    var divDatosClima = document.getElementById('datosClima');
    if (!divDatosClima)
        return;
    divDatosClima.innerHTML = '';
    var ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = "".concat(data.name, ", ").concat(data.sys.country);
    var temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = "La temperatura es: ".concat(Math.floor(data.main.temp - difKelvin), "\u00B0C");
    var descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = "La descripci\u00F3n meteorol\u00F3gica es: ".concat(data.weather[0].description);
    var iconoInfo = document.createElement('img');
    iconoInfo.src = "https://openweathermap.org/img/wn/".concat(data.weather[0].icon, "@2x.png");
    iconoInfo.alt = 'Icono del clima';
    var humedadInfo = document.createElement('p');
    humedadInfo.textContent = "La humedad es: ".concat(data.main.humidity, "%");
    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(descripcionInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(humedadInfo);
}
