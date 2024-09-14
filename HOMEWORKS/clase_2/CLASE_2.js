const apiUrl = 'https://randomuser.me/api/'; // Corregido el nombre de la variable para mantener la convención camelCase
const boton = document.getElementById('boton'); // Obtiene el elemento con el id 'boton'
const clase = document.querySelector('#Resultado'); // Obtiene el elemento con el id 'Resultado' utilizando querySelector


const imprimirDatos = async () => {
    const res = await fetch(apiUrl);
    // la respuesta 

    const data = await res.json();

    console.log(data);
    clase.innerHTML = `<img src="${data.results[0].picture.large}" alt="Imagen del usuario">
    <br> <p>${data.results[0].name.first + ''+  data.results[0].name.last}</p> 
    <br> <p>${data.results[0].cell}</p>
    <br><p>${data.results[0].email}</p>
    <br><p>${data.results[0].gender}</p>

    `;
}

boton.addEventListener('click', imprimirDatos); // Escucha el evento 'click' en el botón y ejecuta la función 'imprimirDatos'
