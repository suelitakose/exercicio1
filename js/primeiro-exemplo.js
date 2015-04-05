
// Comentário de 1 linha...

/* O Código abaixo demonstra
como exibir uma mensagem na tela do usuário, utilizando "alert";*/

alert("Olá Mundo!!!");
console.log("Iniciando")

// function nomeDaMinhaFuncao(){
// 	console.log("Passe1")
// };

// nomeDaMinhaFuncao();

// var novaFuncao=function(){
// 	console.log("passe2");
// };

// novaFuncao();

var idade = 18;

if(idade >= 18){
	console.log("Maior de Idade...");
}else{
    console.log("Menor de Idade...");	
}

//Posso criar variaveis

var carro1={
	modelo:"BMW",
	cor: "Preta"
};

var carro2={
	modelo: "HB20",
	cor:"Cinza"
};

var carros = [];
carros.push(carro1);
carros.push(carro2);

for (i = 0; i < carros.length; i++) {
	console.log(carros[i].modelo);
};

var i = 0;
while(i < carros.length){
	console.log(carros[i].modelo);
	i++;
};