import React from "react";
import { Link } from "react-router-dom"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

import "./MenuHorizontal.css"

function MenuHorizontal() {
  return (
    <div className="menuHorizontal">
      <nav className="navMenu" >
        <ul  class="d-flex bd-highlight">
          <li><button type="button" className="btn btn-primary"> <Link to="/">Início </Link> </button> </li>          
          <li><button type="button" className="btn btn-primary"> <Link to="/alunos">Aluno </Link> </button></li>
          <li><button type="button" className="btn btn-primary"> <Link to="/professores">Professor </Link> </button></li>         
          
        </ul>
       
      </nav>
    </div> 
  );
}

export default MenuHorizontal;
