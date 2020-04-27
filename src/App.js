import React from 'react';
import logo from './logo.svg';
import './App.css';

//Importo el componente de navegacion 
import Navegacion from './components/Navegacion';

function App() {
  return (
    <div className="App">

      <Navegacion titulo='Tareas App' />
      <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;
