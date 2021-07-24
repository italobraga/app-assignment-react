import React from "react";
import Home from "./components/Theme/Home";
import DadosLogin from "./components/Login/DadosLogin";
import Tarefas from "./components/Tarefas/Tarefas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/reset.css";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import { validarCPF, validarNomes, validarEmail } from "./models/Validacoes";
import { usuarioAutenticado } from "./auth";
import PrivateRoute from "./components/Routes/PrivateRoute";

function App() {
  const nada = "Opa";
  return (
    <>
      <ValidacoesCadastro.Provider
        value={{
          email: validarEmail,
          senha: validarNomes,
          cpf: validarCPF,
          nome: validarNomes,
          sobrenome: validarNomes,
          token: usuarioAutenticado,
        }}
      >
        
        <Router>
          <Switch>
            <Route component={FormularioCadastro} exact path="/" />
            <Route component={DadosLogin} path="/login" />
            <Route component={Home} path="/home" />
            <Route component={Tarefas} path="/tarefas" />
          </Switch>
        </Router>
      </ValidacoesCadastro.Provider>
    </>
  );
}

export default App;
