const distances = document.getElementById('distance');
const flag = document.getElementById('flag');
const taxi = document.getElementById('taxi');
const desconto = document.getElementById('desconto');
const butao = document.getElementById('btn');

let valorFlag;
let porcent;

butao.addEventListener("click", function (e) {

    if(distances.value != '' && taxi.value != '' && desconto.value != ''){

    if(flag.value == 1){

        valorFlag = 1.8;

    }else if (flag.value == 20){

        valorFlag = 2.34;

    }    

    if (desconto.value>=0 && desconto.value<=100){
        porcent = desconto.value/100
    }else if(desconto.value == 0){
        porcent = 0
    }

    const valor = 3.2 + (distances.value * valorFlag)
    const desconte = valor - (valor*porcent)

    if( desconte == taxi.value){
        const saida = document.getElementById('saida').innerHTML = `O valor do taximetro corresponde com o valor da conta`
    }else{
        const saida = document.getElementById('saida').innerHTML = `O valor do taximetro é de ${taxi.value}; ja o da conta é de ${desconte}; ou seja o valor não corresponde.`
    }

}else{
    const saida = document.getElementById('saida').innerHTML = `Insira um valor`
}

  });