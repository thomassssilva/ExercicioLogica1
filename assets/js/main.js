//1. Obtendo o elemento form de HTML
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputUm = e.target.querySelector('#inputUm');
    const inputDois = e.target.querySelector('#inputDois');

    const valorUm = Number(inputUm.value);
    const valorDois = Number(inputDois.value);
    if (!valorUm) {
        setResultado('Valor 1 Inválido', false);
        return; 
    }

    if (!valorDois) {
        setResultado('Valor 2 Inválido', false);
        return;
    }

    const msg = getResultado(valorUm, valorDois);

    setResultado(msg, true);
});

function getResultado (a, b) {
    if (a>b){
        return `O maior valor é o ${a}`;
    } else if ( a<b){
        return `O maior valor é o ${b}`;
    } else if (a===b){
        return 'Os valores são iguais.';
    } else {
        return 'Algo deu errado, tente novamente.';
    }
}



function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    
    if (msg==='Os valores são iguais.'){
        p.classList.add('yellow');
        p.innerHTML = msg;
        resultado.appendChild(p);
        return
    } 

    if (isValid) {
        p.classList.add('green')
    } else {
        p.classList.add('red')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}