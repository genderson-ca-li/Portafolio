// librerias
import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
// componentes
import Contacto from '../Contacto/Contacto'
import Experiencia from '../Experiencia/Experiencia'
import AcercaDeMi from '../AcercaDeMi/AcercaDeMi'
import Home from '../Home/Home'
//css
import './Navegador.css'
class Navegador extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='navegador' >
        <Grid
          container
          direction='row'
          alignItems='center'
          justify='space-between'
        >
          <Grid
            item
            xs={12} md={4} lg={3}
            justify='flex-start'
            alignItems='center'
          >
            <div>Menu</div>
          </Grid>
          <Grid
            item
            xs={12} md={8} lg={9}
            justify='flex-end'
            alignItems='center'
          >
            <Link to='/'>Home</Link>
            <Link to='/experiencia/'>Experiencia</Link>
            <Link to='/acercademi/'> Acerca de mi </Link>
            <Link to='/contacto/'>Contacto</Link>
          </Grid>
        </Grid>
        </div>
        <Route path='/' exact component={Home} />
        <Route path='/experiencia' component={Experiencia} />
        <Route path='/acercademi' component={AcercaDeMi} />
        <Route path='/contacto' component={Contacto} />
      </BrowserRouter>
    )
  }
}
export default Navegador