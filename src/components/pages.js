import React from "react";
import { Switch, Router } from 'react-router-dom';
import { Inicio } from "./Inicio";
import { ProductList } from "./products/index";
export const Paginas= () => {
return(
    <section>
        {/* <Switch>
            <Router path="/" exact component = {Inicio}/>
            <Router path="/products" exact component = {ProductList}/>
        </Switch> */}
    </section>
)
}