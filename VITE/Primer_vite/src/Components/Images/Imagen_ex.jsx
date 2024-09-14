import React from 'react'
import './image.css'

// como propiedad le pasaremos la ruta de la imagen 
const Imagen = (Propiedad) => {
  console.log(Propiedad, 'props de la ruta');
  
  return (
    <div className='Imagen'>
      <h1 className='titulo'>Master Chief</h1>
      <img className='imagen' src={Propiedad.ruta} alt="Master chetos" />
    </div>
  )
}

// linea para poder exportar el componente

export default Imagen 