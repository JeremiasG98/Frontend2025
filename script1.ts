const apiKey:string = 'dbdf06313bba1f54d854c3d4f71e8827';
const difKelvin:number = 273.15;
const urlBase:string = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('botonBusqueda')?.addEventListener('click', () => {
    const ciudadInput = document.getElementById('ciudadEntrada') as HTMLInputElement;
    const ciudad:string = ciudadInput ? ciudadInput.value.trim() : '';
    if (ciudad) {
        fetchDatosClima(ciudad);
    }
});

function fetchDatosClima(ciudad:any) {
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) throw new Error('Error al obtener datos del clima');
            return response.json();
        })
        .then(data => mostrarDatosClima(data))
        .catch(error => console.error(error));
}

function mostrarDatosClima(data:any) {
    const divDatosClima = document.getElementById('datosClima');
    if (!divDatosClima) return;
    divDatosClima.innerHTML = '';

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${data.name}, ${data.sys.country}`;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(data.main.temp - difKelvin)}°C`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripción meteorológica es: ${data.weather[0].description}`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    iconoInfo.alt = 'Icono del clima';

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es: ${data.main.humidity}%`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(descripcionInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(humedadInfo);
}
