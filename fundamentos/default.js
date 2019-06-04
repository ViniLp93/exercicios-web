function tratarErro(erro){
    // throw new Error("...")
    return 'xx'
}

function imprimirnomeGritado(obj){
    try{
        console.log(obj.idade.toUpperCase()+"!!")
        console.log(obj.name.toUpperCase()+"!!")
    }catch (e){
        console.log(tratarErro(e))
    }
}
imprimirnomeGritado({name : "Vinni"})