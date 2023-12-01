/*
let val1 = parseInt(prompt('Qual sua idade'));
let val2 = prompt("Já possui habilitação");

if(val1 >= 18) {
    if(val2 == 'Sim') {
        alert("Pode dirigir")
    } else{
        alert("Não pode dirigir")
    }
}else if(val1 < 18) {
    alert("Não pode!!")
};


Portas Logicas:

NOT (!=)   ->   Porta de negação, nega uma condição
    Exemplo:
                2 != 3 => true
                5 != 5 => false

AND (&&) -> Porta AND, precisa que todas as condições sejam verdadeiras para ser true
    Exemplo:
                nota = 7
                frequencia = 70

                nota >= 7 && frequencia >= 75 -> false
                nota >= 7 && frequencia >= 50 -> true

OR (||) -> porta OR, precisa que pelo menos uma condição seja verdadeira para ser true

*/
               

let v = prompt("Você é comum, idoso, gestante, pcd")
v = v.toLowerCase()

if(v == 'Comun') {
    alert('Vaga comun')
}else if(v == 'pcd' || v == 'gestante' || v == 'idoso') {
    alert('Vaga especial para pessoas especiais')
};