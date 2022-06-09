import React from "react";
import { useEffect, useState } from "react";
import Cabecalho from "../Cabecalho/Cabecalho.js";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal.js";

import api from "../../services/api.js"

import Moment from 'react-moment'

import "./Categorias.css"
import Geral from "../Geral/Geral.js";

function Categorias() {

  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    api.get('alunos')
      .then(response => setAlunos(response.data))

  }, []
  )

  return (

    <div id="idCategorias" className="categorias">
      <Cabecalho />
      <MenuHorizontal />
      
      <legend className="li">Cadastro ALUNO</legend>

      <div className="tabela">
        <table className="table table-responsive">
          <thead>
            <tr id='titulo'>
              <th id='t_codigo'> Código </th>
              <th id='t_nome'> Nome </th>
              <th id='t_cpf'> CPF </th>
              <th id='t_data'> Data de Nascimento </th>
              <th id='t_filho'> Nome do filho </th>
              <th id='t_escola'> Escola </th>
              <th id='t_serie'> Serie </th>
              <th id="novo"> <a class="btn btn-success btn-block">Novo Registro</a> </th>              
              <th id='t_sobra'></th>
              <th></th>
            </tr> 
          </thead>
          <br></br>

          <tbody>
            {alunos.map((item, i) => {
              return (
                <>
                  <tr>
                    <td id='p_codigo'>{item.id}</td>
                    <td id='p_nome'>{item.nome}</td>
                    <td id='p_cpf'>{item.cpf}</td>
                    <td id='p_dtnascimento'>{item.dtnascimento}</td>
                    <td id='p_filho'>{item.filho}</td>
                    <td id='p_escola'>{item.escola}</td>
                    <td id='p_serie'>{item.serie}</td>
                    <td id='p_sobra'></td>




                    <td id="editar"> <a class="btn btn-primary btn-block"> Editar </a></td>
                    <td id="remover"> <a class="btn btn-danger btn-block"> Remover </a></td>

                    <td></td>
                  </tr>
                </>
              )
            })}
          </tbody>
          <tfoot>
            <tr id='registros'>
              <td>Quantidade de registros: {alunos.length} </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )

}

export default Categorias;

//<td id="editar"> <a class="btn btn-primary btn-block" href=<%="/autores/editar/" + obj_autores[i].aut_codigo %>> Editar </a></td>
//<td id="ativar"> <a class="btn btn-danger btn-block" href=<%="/autores/ativoInativo/" + obj_autores[i].aut_codigo %>> Inativar </a></td>
