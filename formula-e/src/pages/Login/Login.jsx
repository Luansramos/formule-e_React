import "./Login.css"
import React, { useEffect } from "react";


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

    function entrar() {
        // Função de login (a implementar)
    };
    return (

        <>


            <main className="rolagem">
                <div className="container">
                    <div className="card">
                        <h1>Entrar</h1>

                        <div id="msgError"></div>

                        <div className="label-float">
                            <input type="text" id="usuario" placeholder="" required />
                            <label htmlFor="usuario">Usuario</label>
                        </div>

                        <div className="label-float">
                            <input type="password" id="senha" placeholder="" required />
                            <label htmlFor="senha">Senha</label>
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
                            <a href="../pages/cadastre.html">Cadastre-se</a>
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Login;