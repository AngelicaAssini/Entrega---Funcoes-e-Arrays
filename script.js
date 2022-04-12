
let competidores = ["Rafael", "Manoel", "Daniel"]

function position(firstPlace, secondPlace, lastPlace){
    if ("Daniel" === firstPlace){
        return [firstPlace, secondPlace, lastPlace]
    }
    else if ("Daniel" === secondPlace){
        return [secondPlace, firstPlace, lastPlace]
    }
    else{
        return [firstPlace, lastPlace, secondPlace]
           }
}


let colocacao = position(competidores[0], competidores[1], competidores[2])
console.log("1o Colocado: " + colocacao[0] +
            "   2o Colocado: " + colocacao[1] + 
            "   3o Colocado: " + colocacao[2])
