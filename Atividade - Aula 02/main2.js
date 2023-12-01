let nome = prompt("Qual o seu nome ?");
let idade = parseInt(prompt("Qual a sua idade ?"));
let ano = parseInt(prompt("Qual o ano atual ?"));
let niver = prompt("Você já fez aniversário esse ano?");
var result = ano - idade;


// Um igual (=) significa que esta quardando algio
// Dois iguais (==) significa que estou comparando os carateres
// Se eu uso três iguais (===) significa que estou comparando caracteres e o tipo de dado

if(niver == "Sim"){
    alert(`Você nasceu em: ${result}`);
}else{
    let result1 = result - 1;
    alert(`Você nasceus em: ${result1}`);
}

//Interpolação: Chama uma variável dentro de uma mensagem.
//Cocatenar: Unir elementos.