// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Descripcion from './Components/Description/Descripcion'
import Imagen from './Components/Images/Imagen_ex'
import Title from './Components/Titles/title'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Title text='Hola fans de HALO'></Title>

        {/* aqui dejariamos como RUTA siendo una propiedad */}
        <Imagen ruta='./haloo.jpg'></Imagen>

        <Descripcion Contenido = 'Master Chief, también conocido como John-117, es el protagonista principal de la saga de videojuegos *Halo*. Es un supersoldado de la serie SPARTAN-II, diseñado para ser una máquina de guerra altamente eficiente. Con su distintiva armadura Mjolnir y casco, Master Chief es un líder silencioso, valiente y táctico, que lucha incansablemente para proteger a la humanidad de amenazas alienígenas como el Covenant y los Flood. A lo largo de la saga, se destaca por su habilidad en combate, su sentido del deber y su lealtad hacia sus compañeros, especialmente hacia la inteligencia artificial Cortana.'></Descripcion>
        
      </div>
    </>
  )
}

export default App
