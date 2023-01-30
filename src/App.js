import './App.css';
import React from "react";
import { Header } from './components/header';
import { ProductList } from './components/products/index';
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;
