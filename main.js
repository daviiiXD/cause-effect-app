for(i in nomes) {
    lista.innerHTML += '<tr><td onClick=\"select(this.id)\"' + 'id=\"' + i + '\"' + '>' + nomes[i] + '</td></tr>';
};
function select(identificador) {
    for(let i = identificador; i < nomes.length; i++) {
        if(identificador == pessoas[i].id){
            nome.innerText = pessoas[i].nome;
            endereco.innerText = pessoas[i].endereco;
            aniversario.innerText = pessoas[i].aniversario;
            telefone.innerText = pessoas[i].telefone;
            break;
        };
    };
};
