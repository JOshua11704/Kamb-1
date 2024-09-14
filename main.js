const apiUrl = 'https://randomuser.me/api/'; // Corregido el nombre de la variable para mantener la convención camelCase
const boton = document.getElementById('boton'); // Obtiene el elemento con el id 'boton'
const clase = document.querySelector('#Resultado'); // Obtiene el elemento con el id 'Resultado' utilizando querySelector

// FORMA ANTIGUA

// const imprimirDatos = () => {
//     console.log("Entramos a la función");

//     // El fetch realiza una solicitud a la API utilizando la URL especificada
//     fetch(apiUrl)
//         .then(res => res.json()) // La primera promesa convierte la respuesta en un objeto JSON

//         .then(data => {
//             console.log(data, 'Datos obtenidos');
//             console.log(data.results[0], 'Primer resultado del array');

//             // Aquí se actualiza el contenido del elemento con id 'Resultado'
//             // Se inserta una imagen utilizando la URL obtenida del primer resultado del array 'results'
//             clase.innerHTML = `<img src="${data.results[0].picture.large}" alt="Imagen del usuario">
//             <p>${data.results[0].name.first}</p>`;
//         })
//         .catch(error => console.error('Error al obtener los datos:', error)); // Captura y maneja cualquier error en la solicitud
// };



// Esto será una funcion  asincrona la cual espera a que se ejecuten los procesos para ejecutarse 
const imprimirDatos = async () => {
    const res = await fetch(apiUrl);
    // la respuesta 

    const data = await res.json();

    console.log(data);
    clase.innerHTML = `<img src="${data.results[0].picture.large}" alt="Imagen del usuario">
    <br> <p>${data.results[0].name.first}</p>`;
}

// como podemos ver por medio del asincronismo podemos ejecutar rápidamente el y en pocas lineas de codigo los datos de la appi




// Corregido para que la función `imprimirDatos` se pase como referencia sin ejecutarse de inmediato
boton.addEventListener('click', imprimirDatos); // Escucha el evento 'click' en el botón y ejecuta la función 'imprimirDatos'


// El await es un operador clave en JavaScript que se usa dentro de funciones declaradas con async para esperar la resolución de una promesa antes de continuar con la ejecución del código. Cuando una expresión precedida por await se evalúa, la ejecución de la función se pausa hasta que la promesa se resuelve (ya sea con éxito o con error). Una vez que la promesa se resuelve, se devuelve su valor, y el código continúa ejecutándose.