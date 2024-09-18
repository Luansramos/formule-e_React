function Noticias(){
    return(
        <>
        {/* TROCAAAAAR O LINK O A HREF PELO LINK */}
        <section className="noticia-1 rolagem">
        <div className="center">
            <div className="noticias-wraper-1">
                <div className="noticia-destaque">
                    <a href="#">
                        <div style="background-image: url('../img/Not.perfume.webp');" className="noticia-destaque-single">
                            <h3>PERFUME COM CHEIRO DE PNEU?</h3>
                        </div>
                    </a>
                </div>

                <div className="outras-noticias-1">
                    <div style="background-image: url('../img/Not.Cirquito.webp');" className="outras-noticias-1-single">
                        <a href="#">
                            <h3>Criação de Circuito</h3>
                        </a>
                    </div>

                    <div style="background-image: url('../img/Not.herança-Br.webp');" className="outras-noticias-1-single">
                        <a href="#">
                            <h3>Herança Brasileira no Automobilismo</h3>
                        </a>
                    </div>

                    <div style="background-image: url('../img/Not.dacostadefende.jpg');" className="outras-noticias-1-single">
                        <a href="#">
                            <h3>Da Costa Defende Título</h3>
                        </a>
                    </div>

                    <div style="background-image: url('../img/Not.lucas-volta.jpeg');" className="outras-noticias-1-single">
                        <a href="#">
                            <h3>Lucas di Grassi Volta à China</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>




        </>
    );
};

export default Noticias;