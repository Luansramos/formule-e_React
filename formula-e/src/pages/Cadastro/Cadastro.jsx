import React, { useState, useEffect, useRef } from "react";
import "./Cadastro.css";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [validNome, setValidNome] = useState(false);
  const [validUsuario, setValidUsuario] = useState(false);
  const [validSenha, setValidSenha] = useState(false);
  const [validConfirmSenha, setValidConfirmSenha] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");

  const nomeRef = useRef(null);
  const usuarioRef = useRef(null);
  const senhaRef = useRef(null);
  const confirmSenhaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const elements = document.querySelectorAll(".rolagem");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  useEffect(() => {
    if (nome.length > 2) {
      setValidNome(true);
    } else {
      setValidNome(false);
    }
  }, [nome]);

  useEffect(() => {
    if (usuario.length > 4) {
      setValidUsuario(true);
    } else {
      setValidUsuario(false);
    }
  }, [usuario]);

  useEffect(() => {
    if (senha.length > 5) {
      setValidSenha(true);
    } else {
      setValidSenha(false);
    }
  }, [senha]);

  useEffect(() => {
    if (senha === confirmSenha && validSenha) {
      setValidConfirmSenha(true);
    } else {
      setValidConfirmSenha(false);
    }
  }, [senha, confirmSenha, validSenha]);

  const cadastrar = () => {
    if (validNome && validUsuario && validSenha && validConfirmSenha) {
      let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

      listaUser.push({
        nomeCad: nome,
        userCad: usuario,
        senhaCad: senha,
      });

      localStorage.setItem("listaUser", JSON.stringify(listaUser));

      setMsgSuccess("Cadastrando usuário...");
      setMsgError("");

      setTimeout(() => {
        window.location.href = "/Login";
      }, 3000);
    } else {
      setMsgError("Preencha todos os campos corretamente antes de cadastrar");
      setMsgSuccess("");
    }
  };

  const toggleSenhaVisibility = (inputRef) => {
    const input = inputRef.current;
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };

  return (
    <div className='centralizando'>
      <div className="cardCadastro">
        <h1>Cadastrar</h1>

        {msgError && <div id="msgError" style={{ color: "red" }}>{msgError}</div>}
        {msgSuccess && (
          <div id="msgSuccess" style={{ color: "green" }}>{msgSuccess}</div>
        )}

        <div className="label-float">
          <input
            type="text"
            id="nome"
            placeholder=" "
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            ref={nomeRef}
            required
          />
          <label id="labelNome" htmlFor="nome" style={{ color: validNome ? "green" : "red" }}>
            Nome {validNome ? "" : "*Insira no mínimo 3 caracteres"}
          </label>
        </div>

        <div className="label-float">
          <input
            type="text"
            id="usuario"
            placeholder=" "
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            ref={usuarioRef}
            required
          />
          <label id="labelUsuario" htmlFor="usuario" style={{ color: validUsuario ? "green" : "red" }}>
            Usuário {validUsuario ? "" : "*Insira no mínimo 5 caracteres"}
          </label>
        </div>

        <div className="label-float">
          <input
            type="password"
            id="senha"
            placeholder=" "
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            ref={senhaRef}
            required
          />
          <label id="labelSenha" htmlFor="senha" style={{ color: validSenha ? "green" : "red" }}>
            Senha {validSenha ? "" : "*Insira no mínimo 6 caracteres"}
          </label>
          <i
            id="verSenha"
            className="fa fa-eye"
            aria-hidden="true"
            onClick={() => toggleSenhaVisibility(senhaRef)}
          ></i>
        </div>

        <div className="label-float">
          <input
            type="password"
            id="confirmSenha"
            placeholder=" "
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            ref={confirmSenhaRef}
            required
          />
          <label
            id="labelConfirmSenha"
            htmlFor="confirmSenha"
            style={{ color: validConfirmSenha ? "green" : "red" }}
          >
            Confirmar Senha {validConfirmSenha ? "" : "*As senhas não conferem"}
          </label>
          <i
            id="verConfirmSenha"
            className="fa fa-eye"
            aria-hidden="true"
            onClick={() => toggleSenhaVisibility(confirmSenhaRef)}
          ></i>
        </div>

        <div className="justify-center">
          <button type="button" onClick={cadastrar}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );

};

export default Cadastro;
