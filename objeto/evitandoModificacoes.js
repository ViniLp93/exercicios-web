//Object.preventExtensions

const produto = Object.preventExtensions({//previne que novos atributos sejam adicionados
    nome : "Qualquer",
    preco : 1.99
})


console.log(produto, Object.isExtensible(produto))

//Object.seal
const pessoa = {nome : "Juliana", idade: 15}

Object.seal(pessoa)//nao permite excluir atrr ou criar - permite alterar valores

console.log("Selado maluco", Object.isSealed(pessoa))

//Object.freeze = seal + impede modificar valores

