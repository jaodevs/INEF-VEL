
const Professores = require('../models/professoresModels.js');

module.exports = {

    async index(requisicao, resposta) {
        const professores = await Professores.findAll();
        return resposta.json(professores);
    },

    async indexId(requisicao, resposta) {
        const { codigo_id } = requisicao.params;
        const professores = await Professores.findByPk(codigo_id
        );
        return resposta.json(professores);
    },


    async store(req, res) {
        const professores = await Professores.create(req.body);
        return res.json({ message: "Registro criado com sucesso!" })
    },

    async update(req, res) {
        const { codigo_id } = req.params;
        const { nome_descricao } = req.body;
        const { cpf } = req.body;
        const { materia } = req.body;


        await Professores.update({
            nome_descricao,
            cpf,
            materia,
        }, {
            where: { id: codigo_id }
        })
        return res.json({ message: "Registro atualizado com sucesso!" })
    },

    async delete(req, res) {
        const { codigo_id } = req.params;
        await Professores.destroy({
            where: { id: codigo_id }
        })
        return res.status(200).send({
            status: 1,
            mensage: 'Professor excluida com sucesso!'
        })
    }


}
