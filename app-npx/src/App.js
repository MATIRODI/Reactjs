import React from 'react';
import ItemListContainer from './components/ItemListContainer.jsx';
import ResponsiveAppBar from './components/ResponsiveAppBar.jsx';

import './style.css';


export default function App() {
  return (
    <>
      <ResponsiveAppBar/>

      <h1> HOLA JUAN CARLOS QUERES TOMAR UNA BIRRA?</h1>

      <ItemListContainer/>

      </>
  );
}
