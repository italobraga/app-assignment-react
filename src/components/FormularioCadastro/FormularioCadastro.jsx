import React, { useState, useContext } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AppleIcon from "@material-ui/icons/Apple";
import "../../assets/cadastro.css";
import { cadastrarUsuario } from "../Api/api";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";
import { useHistory } from "react-router";

const FormularioCadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, validarAvancar] = useErros(validacoes);
  const history = useHistory();

  const dadosCadastro = {
    email: email,
    password: senha,
    cpf: cpf,
    nome: nome,
    sobrenome: sobrenome,
  };

  return (
    <div className="tela-cadastro">
      <div className="div-lado-esquerdo">
        <div className="textos-lado-esquerdo">
          <h1 className="titulo-lado-esquerdo">Bem vindo de volta!</h1>
          <p className="paragrafo-lado-esquerdo">
            Para se manter conectado conosco
            <br /> faça o login com suas informações pessoais
          </p>
        </div>
        <Link className="link-btn" to="/login">
          <button className="btn-entrar">Entrar</button>
        </Link>
      </div>
      <div className="div-lado-direito">
        <form
          className="div-formulario"
          onSubmit={(event) => {
            event.preventDefault();
            if (validarAvancar()) {
              cadastrarUsuario(dadosCadastro);
            }
            history.push("/login");
          }}
        >
          <div className="header-cadastro">
            <Typography variant="h3" align="center">
              Cadastrar Usuário
            </Typography>
            <div className="icones-cadastro">
              <FacebookIcon color="primary" fontSize="large"></FacebookIcon>
              <LinkedInIcon color="primary" fontSize="large"></LinkedInIcon>
              <AppleIcon color="primary" fontSize="large"></AppleIcon>
            </div>
            <Typography variant="h6">
              ou use seu e-mail para registrar.
            </Typography>
          </div>
          <div className="input-email">
            <TextField
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              onBlur={validarCampos}
              required
              fullWidth
              error={!erros.email.valido}
              helperText={erros.email.mensagem}
              id="email"
              type="email"
              name="email"
              label="E-mail"
              margin="normal"
              variant="outlined"
            />
          </div>

          <div className="margin-inputs">
            <TextField
              onChange={(event) => {
                setSenha(event.target.value);
              }}
              onBlur={validarCampos}
              required
              error={!erros.senha.valido}
              helperText={erros.senha.mensagem}
              className="textfield-input"
              id="senha"
              type="password"
              name="senha"
              label="Senha"
              margin="normal"
              variant="outlined"
            />
            <TextField
              onChange={(event) => {
                setCpf(event.target.value);
              }}
              onBlur={validarCampos}
              required
              error={!erros.cpf.valido}
              helperText={erros.cpf.mensagem}
              className="textfield-input"
              id="cpf"
              name="cpf"
              value={cpf}
              label="CPF"
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="margin-inputs">
            <TextField
              onChange={(event) => {
                setNome(event.target.value);
              }}
              onBlur={validarCampos}
              required
              error={!erros.nome.valido}
              helperText={erros.nome.mensagem}
              className="textfield-input"
              id="nome"
              name="nome"
              label="Nome"
              margin="normal"
              variant="outlined"
            />
            <TextField
              onChange={(event) => {
                setSobrenome(event.target.value);
              }}
              onBlur={validarCampos}
              required
              error={!erros.sobrenome.valido}
              helperText={erros.sobrenome.mensagem}
              className="textfield-input"
              id="sobrenome"
              name="sobrenome"
              label="Sobrenome"
              margin="normal"
              variant="outlined"
            />
          </div>
          <Button fullWidth color="primary" type="submit" variant="contained">
            Concluir
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormularioCadastro;
