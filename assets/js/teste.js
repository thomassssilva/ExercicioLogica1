function setResultado (msg, isValid) { //9.1 Função para adicionar conteudo no paragrafo adicionado, onde msg é a mensagem exibida
    const resultado = document.querySelector('#resultado');//9.2 selecionando o id resultado no HTML
    resultado.innerHTML = ''; //9.3 Zerando o conteudo anterior
    const p = criaP(); //9.4 Executando a função que cria Paragrafo
    
    if (isValid) {//9.5 Se isValid for incluido como true 
        p.classList.add('green') //Obesidade   
    } else {//Se isValid for incluido como false
        p.classList.add('red') //Adiciona a Classe bad (CSS Configurado como fundo vermelgo)
    }
    p.innerHTML = msg;//9.6 Definindo o texto em p (Passo 8)
    resultado.appendChild(p);
}

const msg = setResultado('mensagem', true);
console.log(msg);