import React, { useState, useContext, useEffect } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import "../../assets/login.css";
import api from "../Api/api";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

const DadosLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [token, setToken] = useState("");
  const history = useHistory();
  const validacoes = useContext(ValidacoesCadastro);
  validacoes.token(token);
 /* Função de autenticação Login */
  const LogarSistema = async (dadosLogin) => {
    try {
      const resposta = await api.post("http://localhost:5000/login", {
        ...dadosLogin,
      });
      if (resposta.status === 200) {
        setToken(resposta.data);
        history.push("/Home");
        return resposta.data;
      }
    } catch (error) {
      alert("Usuário Inválido!")
      console.log("Erro: ", error);
    }
  };

 /* Enviar dados de login para API */
  const dadosLogin = {
    email: email,
    password: senha,
  };

  return (
    <div className="div-principal-login">
      <div className="div-login">
        <form
          className="div-formulario-login"
          onSubmit={(event) => {
            event.preventDefault();
            LogarSistema(dadosLogin);
          }}
        >
          <Typography variant="h3" align="center">
            Faça seu login
          </Typography>
          <div>
            <TextField
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              fullWidth
              required
              id="email"
              name="email"
              label="E-mail"
              margin="normal"
              variant="outlined"
            />
            <TextField
              onChange={(event) => {
                setSenha(event.target.value);
              }}
              fullWidth
              required
              type="password"
              id="senha"
              name="senha"
              label="Senha"
              margin="normal"
              variant="outlined"
            />
          </div>
          <div class="link-width">
            <Button fullWidth color="primary" type="submit" variant="contained">
              Entrar
            </Button>
            <div className="rodape-login">
              <Typography variant="h6">Ainda não tem conta?</Typography>
              <Link to="/">
                <Typography align="center" variant="h6">
                  Cadastre-se
                </Typography>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DadosLogin;
