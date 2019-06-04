const produtos = [
    {nome: "Ipad", preco: 2500, fragil: true},
    {nome: "Iphone", preco: 3200, fragil: true},
    {nome: "S8", preco: 3200, fragil: false }
]

const filtraDaora = produto => produto.preco > 2600 && produto.fragil === false

console.log(produtos.filter(filtraDaora))

