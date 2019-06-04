const fs = require("fs")
const caminho = __dirname + "/arquivo.json"

//sincrono
const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

//assincrono
fs.readFile(caminho, "utf-8", (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    // console.log(`${config.db.host}:${config.db.port}`)
})

const config2 = require("./arquivo.json")//ja converte em ojbeto

console.log(config2.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log("Conteudo da pasta..")
    console.log(arquivos)
})