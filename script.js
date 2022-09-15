/**
 * 3 formas de capturar elementos do html:
 *  - document.getElementById (retorna o elento ou undefined)
 *  - document.querySelector (retorna o primeiro elemento)
 *  - document.querySelectorAll (retorna um array de elementos)
 */

const bt1 = document.getElementById('bt_1');
const bt2 = document.getElementById('bt_2');
const bt3 = document.getElementById('bt_3');
const bt4 = document.getElementById('bt_4');
const bt5 = document.getElementById('bt_5');
const bt6 = document.getElementById('bt_6');
const bt7 = document.getElementById('bt_7');
const bt8 = document.getElementById('bt_8');
const bt9 = document.getElementById('bt_9');
const bt0 = document.getElementById('bt_0');
const btAdicao = document.getElementById('bt_+');
const btSubtracao = document.getElementById('bt_-');
const btMultiplicacao = document.getElementById('bt_*');
const btDivisao  = document.getElementById('bt_/');
const btIgual = document.getElementById('igual');

bt1.addEventListener('click', ()=>{escreveNoDisplay('1')});
bt2.addEventListener('click', ()=>{escreveNoDisplay('2')});
bt3.addEventListener('click', ()=>{escreveNoDisplay('3')});
bt4.addEventListener('click', ()=>{escreveNoDisplay('4')});
bt5.addEventListener('click', ()=>{escreveNoDisplay('5')});
bt6.addEventListener('click', ()=>{escreveNoDisplay('6')});
bt7.addEventListener('click', ()=>{escreveNoDisplay('7')});
bt8.addEventListener('click', ()=>{escreveNoDisplay('8')});
bt9.addEventListener('click', ()=>{escreveNoDisplay('9')});
bt0.addEventListener('click', ()=>{escreveNoDisplay('0')});
btAdicao.addEventListener('click', ()=>{escreveNoDisplay('+')});
btSubtracao.addEventListener('click', ()=>{escreveNoDisplay('-')});
btMultiplicacao.addEventListener('click', ()=>{escreveNoDisplay('*')});
btDivisao.addEventListener('click', ()=>{escreveNoDisplay('/')});

btIgual.addEventListener('click', ()=>{calcular()});

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