const pai = {
    nome: "Pedro",
    corCabelo: "preto"
}

const filha = Object.create(pai,{
    nome : {value: "Ana", enumerable: true, writable: false}
})

console.log(filha)

for(let key in filha){
    filha.hasOwnProperty(key) ?
        console.log(key) : console.log(`Herança ${key}`)
}