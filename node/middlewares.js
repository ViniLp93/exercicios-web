// middleware pattern (chain of responsibility)
function passo1(next) {
    ctx.valor1 = "mid1"//manipula o ctx criado no escopo global, pois não houve a atribuição de outro objeto internamente
    next()
}

const passo2 = (next) => {
    ctx.valor2 = "mid2"//manipula o ctx criado no escopo global, pois não houve a atribuição de outro objeto internamente
    next()
}

const passo3 = () => {
    ctx.valor3 = "mid3"//manipula o ctx criado no escopo global, pois não houve a atribuição de outro objeto internamente
}

const exec = (ctx, ...middlewares) =>{
    const execPasso = indice => {
        middlewares && indice < middlewares.length && 
            middlewares[indice](() => execPasso(indice + 1))
    }
    execPasso(0)
}
let ctx = {}

exec(ctx, passo1, passo2, passo3)

console.log(ctx)