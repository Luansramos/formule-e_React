import "./Login.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
    useEffect(() => {
        const myObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        });

        const elements = document.querySelectorAll(".rolagem");
        elements.forEach((element) => myObserver.observe(element));

        return () => {
            elements.forEach((element) => myObserver.unobserve(element));
        };
    }, []);

    useEffect(() => {
        const btn = document.querySelector(".fa-eye");

        if (btn) {
            btn.addEventListener("click", () => {
                let inputSenha = document.querySelector("#senha");

                if (inputSenha.getAttribute("type") === "password") {
                    inputSenha.setAttribute("type", "text");
                } else {
                    inputSenha.setAttribute("type", "password");
                }
            });
        }

        return () => {
            if (btn) {
                btn.removeEventListener("click", () => {});
            }
        };
    }, []);

    function entrar() {
        const usuario = document.querySelector("#usuario");
        const userLabel = document.querySelector("#userLabel");
        const senha = document.querySelector("#senha");
        const senhaLabel = document.querySelector("#senhaLabel");
        const msgError = document.querySelector("#msgError");

        let listaUser = JSON.parse(localStorage.getItem("listaUser")) || [];
        let userValid = { nome: null, user: null, senha: null };

        listaUser.forEach((item) => {
            if (usuario.value === item.userCad && senha.value === item.senhaCad) {
                userValid = {
                    nome: item.nomeCad,
                    user: item.userCad,
                    senha: item.senhaCad,
                };
            }
        });

        if (usuario.value === userValid.user && senha.value === userValid.senha) {
            window.location.href = "/"; 

            let mathRandom = Math.random().toString(16).substr(2);
            let token = mathRandom + mathRandom;

            localStorage.setItem("token", token);
            localStorage.setItem("userLogado", JSON.stringify(userValid));
        } else {
            userLabel.setAttribute("style", "color: red");
            usuario.setAttribute("style", "border-color: red");
            senhaLabel.setAttribute("style", "color: red");
            senha.setAttribute("style", "border-color: red");
            msgError.setAttribute("style", "display: block");
            msgError.innerHTML = "Usuário ou senha incorretos";
            usuario.focus();
        }
    }

    return (
        <>
            <div className="tudo">
                <div className="coluna1"></div>
                <div className="coluna2"></div>
                <div className="conteudo">
                    <main className="rolagem">
                        <div className="container-login">
                            <div className="card-login">
                                <h1>Entrar</h1>

                                <div id="msgError"></div>

                                <div className="label-float">
                                    <input type="text" id="usuario" placeholder="" required />
                                    <label id="userLabel" htmlFor="usuario">Usuário</label>
                                </div>

                                <div className="label-float">
                                    <input type="password" id="senha" placeholder="" required />
                                    <label id="senhaLabel" htmlFor="senha">Senha</label>
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </div>

                                <div className="justify-center">
                                    <button onClick={entrar}>Entrar</button>
                                </div>

                                <div className="justify-center">
                                    <hr />
                                </div>

                                <p>
                                    Não tem uma conta?
                                    <Link to="/Cadastro">Cadastre-se</Link>
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Login;
