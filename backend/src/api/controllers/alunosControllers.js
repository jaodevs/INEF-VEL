
const Alunos = require('../models/alunosModels.js');

module.exports = {

    async index(requisicao, resposta) {
        const alunos = await Alunos.findAll();
        return resposta.json(alunos);
    },

    async indexId(requisicao, resposta) {
        const { codigo_id } = requisicao.params;
        const alunos = await Alunos.findByPk(codigo_id
        );
        return resposta.json(alunos);
    },


    async store(req, res) {
        const alunos = await Alunos.create(req.body);
        return res.json({ message: "Registro criado com sucesso!" })
    },

    async update(req, res) {
        const { codigo_id } = req.params;
        const { nome } = req.params;
        const { cpf } = req.body;
        const { dtnascimento } = req.body;
        const { filho } = req.body;
        const { escola } = req.body;
        const { serie } = req.body;

    
        await Alunos.update({
            nome,
            cpf,
            dtnascimento,
            filho,
            escola,
            serie
    
        }, {
            where: { id: codigo_id }
        })
        return res.json({ message: "Registro atualizado com sucesso!" })
    },

    async delete(req, res) {
        const { codigo_id } = req.params;
        await Alunos.destroy({
            where: { id: codigo_id }
        }) 
        return res.status(200).send({
            status: 1,
            mensage: 'Aluno excluida com sucesso!'
        })
    }


}
