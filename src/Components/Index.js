// import a librerias
import React, { Component } from 'react'

// import a los componentes
import Contacto from './Contacto/Contacto'
import Experiencia from './Experiencia/Experiencia'
import AcercaDeMi from './AcercaDeMi/AcercaDeMi'
import Navegador from './Header/Navegador'
import Home from './Home/Home'
import './index.css'
import { BrowserRouter, Route } from 'react-router-dom'
class Index extends Component {
  render() {
    return (
      <div>
        <div className='container ' >
          <Navegador/>
        </div>
      </div>
    )
  }
}
export default Index