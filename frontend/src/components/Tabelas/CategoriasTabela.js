import React from "react";
import TabelaHeader from "./CategoriasHeader";
import TabelaFooter from "./CategoriasFooter";
import Categorias from "../Categorias/Categorias";

export default function Tabela(props) {


    const arrayDados = props.dados;
    console.log("Dados: " + props.dados)


    return (
        <div className="tabela">
            <table>
                <thead>
                    <tr>
                        <th scope="col"> Código </th>
                        <th scope="col"> Nome </th>
                        <th scope="col"> CPF </th>
                        <th scope="col"> Data Nascimento </th>
                        <th scope="col"> Nome Filho </th>
                        <th scope="col"> Escola </th>
                        <th scope="col"> Série </th>
                    </tr>
                </thead>

                <tbody>



                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.cpf}</td>
                        <td>{item.dtnascimento}</td>
                        <td>{item.filho}</td>
                        <td>{item.escola}</td>
                        <td>{item.serie}</td>


                        <td> <button className="btnEditar">Editar</button> </td>
                        <td> <button className="btnRemover">Remover</button> </td>
                    </tr>

                </tbody>
                <TabelaFooter registros={props.dados.length} />
            </table>
        </div>
    )


}

