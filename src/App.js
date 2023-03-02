import './App.css';
import React from "react";
import { Header } from './components/header';
import { ProductList } from './components/products/index';
import 'boxicons';
import { Inicio } from './components/Inicio';
import { BrowserRouter as Router } from 'react-router-dom';
import { Paginas } from './components/pages';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <ProductList/>
      <Inicio/>
      <Paginas/>
      </Router>
    </div>
  );
}

export default App;
