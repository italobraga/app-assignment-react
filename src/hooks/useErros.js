import { useState } from "react";

const useErros = (validacoes) => {
  const [formValido, setFormValido] = useState("");
  const [erros, setErros] = useState({
    email: { valido: true, mensagem: "" },
    senha: { valido: true, mensagem: "" },
    cpf: { valido: true, mensagem: "" },
    nome: { valido: true, mensagem: "" },
    sobrenome: { valido: true, mensagem: "" },
  });

  const validarCampoAvancar = () => {

    for (let erro in erros) {
      if (erros[erro].valido === false) {
        setFormValido("Falso");
       return false;
      }
    }
    setFormValido("/login");
  };

  const validarCampos = (event) => {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  };

  const validarAvancar = () => {
    for (let erro in erros) {
      if (erros[erro].valido === false) {
        console.log("invalido");
        return false;
      }
    }
     
    return true;
  };

  return [erros, validarCampos, validarAvancar, validarCampoAvancar, formValido];
};

export default useErros;
