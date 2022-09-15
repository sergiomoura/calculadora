/**
 * 3 formas de capturar elementos do html:
 *  - document.getElementById (retorna o elento ou undefined)
 *  - document.querySelector (retorna o primeiro elemento)
 *  - document.querySelectorAll (retorna um array de elementos)
 */

// Captura dos botões
const botoes = document.querySelectorAll('button');

// Associar os eventos click de cada botão à execução da função onButtonClick
for(let bt of botoes){
    bt.addEventListener('click', onButtonClick);
}

function onButtonClick(evt){

    // Capturar o caractere do botão clicado
    let caractere = evt.target.innerHTML;

    // Se o botão clicado tiver '=' dentro, chama a função calcular
    // Caso contrário, escrever no display o caractere do botão.
    if(caractere == '='){
        calcular();
    } else {
        escreveNoDisplay(caractere);
    }
}

function escreveNoDisplay(caractere){
    
    // Capturar o input display
    const inputDisplay = document.getElementById('display');

    // Adicionar ao conteúdo do input display o caractere ( .value );
    inputDisplay.value += caractere;

}

function calcular(){

    // Capturar o input display
    const inputDisplay = document.getElementById('display');

    // Fazendo a conta e mostrando o resultado
    inputDisplay.value = eval(inputDisplay.value);

}