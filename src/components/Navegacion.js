import React, { Component } from 'react';

//Creo un componente navegacion y utilizo props para
//pasarle un titulo
class Navegacion extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="##" className="text-white">{this.props.titulo}</a>
            </nav> 
        );
    }
}

export default Navegacion;