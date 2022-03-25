module.exports = {
    pagina,
    pagina2,
    pagina3
}

function pagina (req,res) {
    res.render('corpo/frm_corpoCadastro.ejs',
        {title: 'Notícias Menu',
            mensagem: 'Iniciando com NodeJS e Express',
            titulo: 'Aula do Neto é as segundas',
            conteudo: 'Para reduzir a evasão escolar de estudantes com filhos (criança*), é proposto a criação de uma Rede de Apoio, nomeada de PROGRAMA INEFÁVEL, composto por amparo à estudante do ciclo básico de ensino público (ensino fundamental e médio) com:\n1 – Suporte físico e social, no qual a rede pública de ensino disponibilizará uma sala com as devidas instalações, dentro da escola, com cuidadores para que as mães possam deixar seus filhos, durante o período das aulas, enquanto assistem às aulas com os demais colegas.\n2 – Também fará parte do PROGRAMA INEFÁVEL a disponibilização de um canal online via Website que os estudantes com filhos poderão formular suas dúvidas, que serão respondidas por professores em regime de plantão.',
            autor: '2° DSM - Web II'
    })
}


function pagina2 (req,res) {
    res.render('corpo/frm_corpoInformacoes.ejs',
        {title: 'Noticias Esportes',
            mensagem: 'Iniciando com NodeJS e Express',
            titulo: 'Aula do Neto é as segundas',
            conteudo: 'Corpo da página - vh x vw',
            autor: '2° DSM - Web II'
    })
}

function pagina3 (req,res) {
    res.render('corpo/frm_corpoProfessor.ejs',
        {title: 'Noticias de Futebol - Campeonatos Brasileiro',
            mensagem: 'Iniciando com NodeJS e Express',
            titulo: 'Aula do Neto é as segundas',
            conteudo: 'O Campeonato Brasileiro de Futebol, também conhecido como Campeonato Brasileiro, Brasileirão e Série A, é a liga brasileira de futebol profissional entre clubes do Brasil, sendo a principal competição futebolística no país. ',
            autor: '2° DSM - Matheus'
    })
}