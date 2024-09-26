import "./Noticias.css"
import React, { useEffect } from "react";

function Noticias() {
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
    

    return (

        <div className="noticia-1 rolagem">
            <div className="center">
                <div className="noticias-wraper-1">
                    <div className="noticia-destaque">
                        <a href="#!">
                            <div
                                className="noticia-destaque-single"
                                style={{ backgroundImage: 'url(..//src/assets/Not.perfume.webp)' }} // Adicione a URL correta da imagem aqui.
                            >
                                <h3>PERFUME COM CHEIRO DE PNEU?</h3>
                            </div>
                        </a>
                    </div>

                    <div className="outras-noticias-1">
                        <div
                            className="outras-noticias-1-single"
                            style={{ backgroundImage: 'url(..//src/assets/Not.Cirquito.webp)' }} // Adicione a URL correta da imagem aqui.
                        >
                            <a href="#!">
                                <h3>Criação de Circuito</h3>
                            </a>
                        </div>

                        <div
                            className="outras-noticias-1-single"
                            style={{ backgroundImage: 'url(..//src/assets/Not.herança-Br.webp)' }} // Adicione a URL correta da imagem aqui.
                        >
                            <a href="#!">
                                <h3>Herança Brasileira no Automobilismo</h3>
                            </a>
                        </div>

                        <div
                            className="outras-noticias-1-single"
                            style={{ backgroundImage: 'url(..//src/assets/Not.dacostadefende.jpg)' }} // Adicione a URL correta da imagem aqui.
                        >
                            <a href="#!">
                                <h3>Da Costa Defende Título</h3>
                            </a>
                        </div>

                        <div
                            className="outras-noticias-1-single"
                            style={{ backgroundImage: 'url(..//src/assets/Not.lucas-volta.jpeg)' }} // Adicione a URL correta da imagem aqui.
                        >
                            <a href="#!">
                                <h3>Lucas di Grassi Volta à China</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Noticias;
