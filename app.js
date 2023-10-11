
alert ('Bem vindo ao jogo do número secreto');

let numeroMax = 100;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
let chute ;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt(`Escolha um número de 1 a ${numeroMax}`);
    if (isNaN(chute)){
    alert(`Caractere invalido, para passarmos dessa parte o caractere digitado precisa ser um número`)
} else {
    if((chute > numeroMax) || (chute < 0)) {
        alert(`Esse número e invalido, número não se encontra dentro dos limites estabelecidos pelo jogo`)
    } else {
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
}
}

let concordancia = tentativas = 1 ? 'tentativa' : 'tentativas'; 
alert(`Parabens você acertou o numero ${numeroSecreto} com ${tentativas} ${concordancia} ` );
