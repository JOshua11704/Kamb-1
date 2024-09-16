// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Carta from './Components/Carta/Carta'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Carta text='Hola fans de HALO' ruta='./haloo.jpg' sub = 'Master Chief' Contenido = 'Master Chief, también conocido como John-117, es el protagonista principal de la saga de videojuegos *Halo*. Es un supersoldado de la serie SPARTAN-II, diseñado para ser una máquina de guerra altamente eficiente. Con su distintiva armadura Mjolnir y casco, Master Chief es un líder silencioso, valiente y táctico, que lucha incansablemente para proteger a la humanidad de amenazas alienígenas como el Covenant y los Flood. A lo largo de la saga, se destaca por su habilidad en combate, su sentido del deber y su lealtad hacia sus compañeros, especialmente hacia la inteligencia artificial Cortana.'/>
          <br/>
          <br/>
        <Carta text='HALO REACH' ruta='/emile.jpg' sub = 'Emile-A239'Contenido = 'Es uno de los personajes más memorables de Halo: Reach. Miembro del equipo Noble, es conocido por su actitud desafiante y su espíritu combativo. Siempre lleva una calavera grabada en su visor, lo que refleja su naturaleza temeraria y su falta de miedo ante la muerte. Emile es un soldado letal en el combate cuerpo a cuerpo y un usuario experto de la escopeta, lo que lo convierte en un guerrero temible en el campo de batalla. Aunque es reservado y brusco, demuestra una lealtad inquebrantable hacia su equipo y un profundo compromiso con la misión.'/>
          <br/>
          <br/>
        <Carta text='HALO REACH' ruta='/noble 6.jpg' sub = 'Noble 6'Contenido = 'El personaje controlado por el jugador, es el protagonista silencioso de Halo: Reach. También es un miembro del equipo Noble, conocido por su versatilidad y capacidad en combate. Noble 6 es un SPARTAN-III altamente habilidoso, con un pasado lleno de misiones encubiertas. Aunque no tiene diálogo, su historia se desarrolla a través de sus acciones heroicas durante la defensa del planeta Reach. Su sacrificio al final del juego refleja el tema de lucha y pérdida, marcando uno de los momentos más emotivos en la franquicia Halo.' />
      </div>
    </>
  )
}

export default App
