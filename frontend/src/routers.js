import React from "react";
import Geral from "./components/Geral/Geral.js"
import Categorias from "./components/Categorias/Categorias.js"
import Professores from "./components/Professores/Professores.js"

import { Route, Routes } from "react-router-dom"

function Routers() {
    return ( 
        <Routes>
            <Route exact path="/" element={<Geral />} />
            <Route exact path="/alunos" element={<Categorias />} />
            <Route exact path="/professores" element={<Professores />} />
        </Routes>
    )
}

export default Routers

