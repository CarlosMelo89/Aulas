let medida = prompt('Qual medida vocẽ quer?, (K=kilometro), (M=milhas), (L=Léguas)');
medida = medida.toLocaleUpperCase;

let conversao = prompt('Qual medida vocẽ quer converter?, (K=kilometro), (M=milhas), (L=Léguas)');
medida = medida.toLocaleUpperCase;

let K = parseFloat(prompt("digite um valor")) ;
let M = parseFloat(prompt("digite um valor")) ;
let L = parseFloat(prompt("digite um valor")) ; 



var conver = M * 1.6; //milhas para km
var conver2 = K * 0.62;//km para milhas
var conver3 = L * 6.74;//leguas para km
var conver4 = K / 6.74;//km para leguas
var conver5 = M * 0.33;//milhas para leguas
var conver6 = L * 3;//leguas para milhas

if(medida == "M", conversao == "K"){
    alert(`Resultado é ${conver}`);

}else if(medida == "K", conversao =="M"){
    alert(`Resultado é ${conver2}`);

}else if(medida == "L", conversao == "K"){
    alert(`Resultado é ${conver3}`);

}else if(medida == "K", conversao == "L"){
    alert(`Resultado é ${conver4}`);

}else if(medida == "M", conversao == "L"){
    alert(`Resultado é ${conver5}`);

}else if(medida == "L", conversao == "M"){
    alert(`Resultado é ${conver6}`);

}else{
    alert("Erro")
};