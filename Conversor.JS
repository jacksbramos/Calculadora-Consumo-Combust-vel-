let velocidade;
let distancia;
let resultado;

//FUNÇÃO DE CONVERSÃO
function conversor(){

    //ENTRADA DE DADOS:

    //VELOCIDADE
    temperatura = document.querySelector('#TXTvelocidade').value;
    
    //DISTÂNCIA
    escala  =document.querySelector('#slcdistancia').value;

    //IF 
    if(escala == 'Celsius'){
        resultado = (temperatura - 32) / 1.8
        document.querySelector('#LBLresultado').innerHTML = resultado;
    }

    if(di == 'Fahrenheit'){
        resultado = combustível = distância /12
        document.querySelector('#LBLresultado').innerHTML = resultado;
    }

}

    function limpar(){
        document.querySelector('#TXTvelocidade').value = '';
        document.querySelector('#slcdistncia').value = '';
        document.querySelector('#LBLresultado').innerHTML = '-';
    }