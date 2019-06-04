//sem promise

const http = require("http")

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ""

        res.on("data", dados => {
            resultado += dados
        })

        res.on("end", () => {
            callback(JSON.parse(resultado))
        })
    })
}
let nomes = []
getTurma("A", alunos => {
    nomes = alunos.map(nome => nome.nome)
    getTurma("B", alunos => {
        nomes = nomes.concat(alunos.map(nome => nome.nome))
        getTurma("C", alunos => {
            nomes = nomes.concat(alunos.map(nome => nome.nome))            
            console.log(nomes)
        })
    })
})