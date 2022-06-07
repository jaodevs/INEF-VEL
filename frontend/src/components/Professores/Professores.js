import React from "react";
import { useEffect, useState } from "react";
import Cabecalho from "../Cabecalho/Cabecalho.js";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal.js";

import api from "../../services/api.js"

import Moment from 'react-moment'

import "./Professores.css"
import Geral from "../Geral/Geral.js";

function Professores() {

  const [professores, setProfessores] = useState([])

  useEffect(() => {
    api.get('professores')
      .then(response => setProfessores(response.data))

  }, []
  )

  return (

    <div id="idProfessores" className="professores">
      <Cabecalho />
      <MenuHorizontal />
      
      <legend>Cadastro ALUNO</legend>

      <div className="tabela">
        <table className="table table-responsive">
          <thead>
            <tr id='titulo'>
              <th id='t_codigo'> Código </th>
              <th id='t_nome'> Nome </th>
              <th id='t_cpf'> CPF </th>
              <th id='t_data'> Matéria </th>
              <th id='t_data'> Data de imersão </th>
          
              <th id="novo"> <a class="btn btn-success btn-block">Novo Registro</a> </th>              
              <th id='t_sobra'></th>
              <th></th>
            </tr> 
          </thead>
          <br></br>

          <tbody>
            {professores.map((item, i) => {
              return (
                <>
                  <tr>
                    <td id='p_codigo'>{item.id}</td>
                    <td id='p_nome'>{item.nome_descricao}</td>
                    <td id='p_cpf'>{item.cpf}</td>
                    <td id='p_dtnascimento'>{item.materia}</td>
                    <td id='p_filho'>{item.createdAt}</td>
                    <td id='p_sobra'></td>
                    <td></td>
                  </tr>
                </>
              )
            })}
          </tbody>
          <tfoot>
            <tr id='registros'>
              <td>Quantidade de registros: {professores.length} </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )

}

export default Professores;

//<td id="editar"> <a class="btn btn-primary btn-block" href=<%="/autores/editar/" + obj_autores[i].aut_codigo %>> Editar </a></td>
//<td id="ativar"> <a class="btn btn-danger btn-block" href=<%="/autores/ativoInativo/" + obj_autores[i].aut_codigo %>> Inativar </a></td>
