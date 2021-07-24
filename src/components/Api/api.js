import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const cadastrarUsuario = async (dadosCadastro) => {
  console.log(dadosCadastro);
  try {
    const resposta = await api.post("http://localhost:5000/register", {
      ...dadosCadastro,
    });
    return resposta.data;
  } catch (error) {
    console.log("Erro: ", error);
  }
};

export default api;
