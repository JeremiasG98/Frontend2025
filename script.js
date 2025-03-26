let apiKey = 'dbdf06313bba1f54d854c3d4f71e8827';
let difKelvin = 273.15;
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
//let ciudad = 'Cordoba';



document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;
    if (ciudad){
        fetchDatosClima(ciudad)
    }
});

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
    .then(response => response.json())
    .then (response => mostrarDatosClima(response))

}

function mostrarDatosClima(data){
    //console.log(data);
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML= '';
    const ciudadNombre = data.name;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;
    const humedad = data.main.humidity;
    const icono = data.weather[0].icon;


    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°C`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripcion meteorológica es: ${descripcion}`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es: ${humedad}%`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(descripcionInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(humedadInfo);
}