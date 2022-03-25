module.exports = {
    inicial,
}

function inicial (req,res) {
    res.render('pagina/frm_paginaInicial.ejs',
        {title: 'Receita',
            mensagem: 'Iniciando com NodeJS e Express',
            titulo: 'Aula do Neto é as segundas',
            conteudo: 'Corpo da página - vh x vw',
            autor: '2° DSM - Web II'


    })
}