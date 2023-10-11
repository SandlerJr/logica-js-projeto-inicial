
alert ('Bem vindo ao jogo do número secreto');

let numeroSecreto = 29;
let chute = ;
let tentativas = 1;

while (chute != numeroSecreto){
    prompt('Escolha um número de 1 a 30');
    if ( chute == numeroSecreto ) {
        alert (`Parabéns você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
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
