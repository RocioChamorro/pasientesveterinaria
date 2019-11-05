import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

//import './App.css';

class App extends Component {
  state = {
    citas : []
  }
  //Cuando la aplicación carga
  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    console.log(citasLS);
    if(citasLS) {
      this.setState({
        citas : JSON.parse(citasLS)
      })
    }

  }
  //cuando agregamos o eliminamos una nueva cita
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }
  crearNuevaCita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas, datos] //[,{cita}]??
    //agregar el nuevo state
    this.setState({
      citas
    })
  }

  //eliminar las citas del state
  eliminarCita = id => {
    //tomar una copia del state
    const citasActuales = [...this.state.citas];

    //utilizar filter para sacar el elemneto "id" del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id)
 
    this.setState({
      citas
    })
  }
  render() {
    return (
      <div className="container">
        <Header
          titulo='Administrador Pacientes Veterinaria' //props
        />
        <div className="row">
          <div className="col-md-8 mx-auto">
            <NuevaCita
            crearNuevaCita={this.crearNuevaCita}
            />
          </div>
        </div>
        <div className="mt-5 col-md-8 mx-auto">
        <ListaCitas
          citas={this.state.citas}
          eliminarCita={this.eliminarCita}
        />
        </div>

      </div>
      
    );
  }

}

export default App;
