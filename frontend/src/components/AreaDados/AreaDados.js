import React from "react";
import "./AreaDados.css"



export default function AreaDados() {
  return (
    <div className="areaDados">
      <div class="album py-5 bg-light">
        <div class="container">

        <div class="alert alert-secondary" role="alert">
           <h3> Materias - Ensino Fundamental </h3>
          </div>
          <hr/>
          <hr/>
            <div class="d-flex justify-content-between">
              <input class="btn btn-primary" type="button" value="Matemática"></input>
              <input class="btn btn-primary" type="submit" value="Português"></input>
              <input class="btn btn-primary" type="reset" value="História"></input>
              <input class="btn btn-primary" type="reset" value="ResetCiências"></input>
            </div>

            <hr/>
            <hr/>
            <div class="alert alert-secondary" role="alert">
           <h3> Materias - Ensino Médio </h3>
          </div>
          <hr/>
          <hr/>
            <div class="d-flex justify-content-between">
              <input class="btn btn-primary" type="button" value="Matemática"></input>
              <input class="btn btn-primary" type="submit" value="Português"></input>
              <input class="btn btn-primary" type="reset" value="História"></input>
              <input class="btn btn-primary" type="reset" value="ResetCiências"></input>
            </div>

            <hr/>
            <hr/>
        </div>
      </div>
    </div>
  );
}
