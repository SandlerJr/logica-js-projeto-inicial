
alert ('Bem vindo ao jogo do número secreto');

let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute = ;
let tentativas = 1;

while (chute != numeroSecreto){
    prompt('Escolha um número de 1 a 100');
    if ( chute == numeroSecreto ) {
        break;
        } else {
        if (chute > numeroSecreto){
            alert ('O número secreto é menor que o ' + chute);
        } else{
            if(chute < numeroSecreto){
            alert ('O número secreto é maior que o ' + chute);
            }
            tentativas ++;
        }
    }
    
}

let concordancia = tentativas = 1 ? 'tentativa' : 'tentativas'; 
alert(`Parabens você acertou o numero ${numeroSecreto} com ${tentativas} ${concordancia} ` );

/*
if(tentativas =){
    alert(`Parabéns você acertou o número secreto ${numeroSecreto} na primeira tentativa`)
} else{
      alert (`Parabéns você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} 
*/
  
