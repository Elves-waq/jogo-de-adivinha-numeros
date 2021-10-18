let numero1 = document.getElementById('numero1');
numero1= Math.floor(Math.random()* 11);

let numeroArea = document.getElementById('n2_area');
let numero2 = numeroArea.value;

function compararNumero(){
    let numeroArea = document.getElementById('n2_area');
    let numero2 = numeroArea.value;

    if (numero1 == numero2) {
        let result = document.getElementById('mensagem');
        result.classList.add('messagem_acerto');
        result.classList.remove('messagem_erro')

        result.innerHTML= `Parabéns o número é ${numero2} Voçê Acertou!!!`;
        
    } else if(numero1 < numero2 ){
        let result = document.getElementById('mensagem');
        result.classList.add('mensagem_vl_maior');
        result.classList.remove('messagem_acerto')
        result.innerHTML= `Tente novamente Número menor que ${numero2} !!!`;
    }else{
        let result = document.getElementById('mensagem');
        result.classList.add('mensagem_vl_maior');
        result.classList.remove('messagem_acerto')
        result.innerHTML= `Tente novamente Número maior que ${numero2} !!!`;
        
    }
    
    }
