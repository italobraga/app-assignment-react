const validarCPF = (cpf) => {
    const regex = new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/);

    if(regex.test(cpf) || cpf.length === 0){
        return { valido: true, mensagem: ""};
    }
    else {
        return { valido: false, mensagem: "CPF deve ter 11 digitos!"};
    }  
} 

const validarEmail = (email) => {
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if(regex.test(email) || email.length === 0){
        return { valido: true, mensagem: ""}
    }
    else {
        return { valido: false, mensagem: "E-mail inválido"}
    }
}

const validarNomes = (nomes) => {
    
    if(nomes.length > 3 || nomes.length === 0){
        return { valido: true, mensagem: ""};
    }
    else {
        return { valido: false, mensagem: "O campo deve ter no mínimo 3 digitos!"};
    }
}

export { validarCPF, validarNomes, validarEmail };