let cor = prompt("Digite uma cor:");
//cor = cor.toUpperCase();
cor = cor.toUpperCase();

console.log(cor.toUpperCase());
console.log(cor);

// O toUpperCase transforma a string para maiusculo
// O toLowerCase transforma a string para minusculo

if(cor == "VERMELHO"){
      alert(`Pare por favor evite o amor`)
} else if (cor == `Verde`){
    alert("Prossiga!")
} else if (cor == `Amarelo`){
    alert("Atenção! Se continuar vai dá ruim")
} else {
    alert("Sem tempo irmão")
};
