import React, { useEffect } from "react";
import "./Contato.css";

function Contato() {
    
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

    // Função que será executada ao clicar no botão "Enviar Mensagem"
    const clicarbotao = (event) => {
        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
    };

    return (
        <main className="rolagem">
           
            <div className="titulo-bg">
                <div className="titulo container">
                    <p className="font-2-l-b cor-12">Respostas em até 24h</p>
                    <h1 className="font-1-xxl cor-12">
                        Nosso contato<span className="cor-p1">.</span>
                    </h1>
                </div>
            </div>

            <div className="contato container">
                <section className="contato-dados" aria-label="Endereço">
                    <div className="contato-endereco font-2-s cor-4">
                        <p>Rua General, 35</p>
                        <p>São Paulo - SP</p>
                        <p>Brasil - Terra - Via Láctea</p>
                    </div>
                    <address className="contato-meios font-2-s cor-4">
                        <a href="mailto:contato@formulaE.com">contato@formulaE.com</a>
                        <a href="mailto:assistencia@formulaE.com">assistencia@formulaE.com</a>
                        <a href="tel:+551199999999">+55 11 9999-9999</a>
                    </address>
                </section>

                <section className="contato-formulario" aria-label="Formulário">
                    <form className="form" action="/contato">
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" placeholder="Seu nome" />
                        </div>
                        <div>
                            <label htmlFor="telefone">Telefone</label>
                            <input type="text" id="telefone" name="telefone" placeholder="(21) 9999-9999" />
                        </div>
                        <div className="col-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="contato@email.com" />
                        </div>
                        <div className="col-2">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea rows="5" id="mensagem" name="mensagem" placeholder="O que você precisa?" />
                        </div>
                        <button
                            id="botaoenviar"
                            type="button"
                            onClick={clicarbotao}
                            className="botao col-2 botaoEnviar">
                            Enviar Mensagem
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}

export default Contato;
