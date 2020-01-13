import React from 'react';

import './App.css';

import Routes from './routes';

import logo from './assets/logo.png'


function App() {
  return (
    // Logo e texto superior
    <div className="container">
      <img className="logo" src={logo} alt="V4 Company" />
      <p className="title"> Ferramentas uteis para se lembrar. </p>

    {/* Conteúdo da pagina */}
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
