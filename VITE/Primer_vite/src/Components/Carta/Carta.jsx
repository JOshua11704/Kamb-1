import React from 'react'
import Title from '../Titles/title'
import Imagen from '../Images/Imagen_ex'
import Descripcion from '../Description/Descripcion'

const Carta = (Propiedades) => {
  return (
    <>
      <div>
        <Title text={Propiedades.text}></Title>

        {/* aqui dejariamos como RUTA siendo una propiedad */}
        <Imagen ruta={Propiedades.ruta} Subtitle = {Propiedades.sub}></Imagen>

        <Descripcion Contenido = {Propiedades.Contenido}></Descripcion>
        
      </div>
    </>
  )
}

export default Carta