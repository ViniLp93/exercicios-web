//com promise

const http = require("http")

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((sucesso, erro) => {
        http.get(url, res => {
            let resultado = ""
    
            res.on("data", dados => {
                resultado += dados
            })
    
            res.on("end", () => {
                try{
                    sucesso(JSON.parse(resultado))
                }catch(e){
                    erro(e)
                }
            })
        })
    })
    
}
let nomes = []
getTurma("A").then(alunos => {
    nomes = alunos.map(nome => nome.nome)
    getTurma("B").then(alunos => {
        nomes = nomes.concat(alunos.map(nome => nome.nome))
        getTurma("C").then(alunos => {
            nomes = nomes.concat(alunos.map(nome => nome.nome))            
            console.log(nomes)
        })
    })
})