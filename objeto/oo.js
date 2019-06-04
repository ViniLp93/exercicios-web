//objeto
const ex = {
    attr1 : "X",
    alooo(){
        console.log(this.attr1)
    }
}

//funcão construtora
function Carro(){
    const nome = "Uno"//atributo privado
    this.ano  = 2016//atributo publico
    this.alerta = function(x){
        console.log(`Carro modelo ${nome} - Ano: ${this.ano}  ${x}`);
    }
}
//instanciando objeto Carro
const carro = new Carro()

console.log(carro)

//classe

class Carro2{
    constructor(nome, ano){
        const nome_carro = nome
        this.ano  = ano
    }

    exibeDetalhes(){
        return `Modelo: ${this.nome} - Ano: ${this.ano}`
    }
}

class Carro3{
    constructor(nome, ano){
        this.nome_carro = nome
        this.ano  = ano
    }

    exibeDetalhes(){
        return `Modelo: ${this.nome_carro} - Ano: ${this.ano}`
    }
}

const carro2 = new Carro2("Ferrari", 2015)
const carro3 = new Carro3("Volvo", 2014)

console.log(carro3.exibeDetalhes())