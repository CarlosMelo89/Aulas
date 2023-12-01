let val = parseInt(prompt("Digite um valor:"));
let val2 = parseInt(prompt("Digite outro valor:"));
var op = prompt("Digite uma operação"); 

var result = val + val2
var result2 = val - val2
var result3 = val * val2
var result4 = val / val2
var result5 = val ** val2



op = op.toUpperCase()
if (op =='DIVISÂO' && val2 == 0) {
    alert('kaksdhvshi')
}else if(op == "SOMA"){
    alert(`Seu resultado: ${result}`)
} else if (op == "SUBTRAÇÃO"){
    alert(`Seu resultado: ${result2}`)
} else if (op == "MULTIPLICAÇÃO"){
    alert(`Seu resultado: ${result3}`)
} else if (op == "DIVISÃO"){
    if(val2 == 0){
        alert('Erro')
    }else {
        alert(`Seu resultado: ${result4}`)
    }
}else if (op == "POTENCIA"){
    alert(`Seu resultado: ${result5}`)
}else{
    alert(`Erro!!!`)
};