import "../styles/SaibaMais.css"


const Titulo = () => {
    return(
        <div className="titulo">
        <h1>INFORMAÇÕES SOBRE A FÓRMULA E </h1>
      </div>
    );
};

const OqueE = () => {
    return(
        <section className="oque">
      <h2>O QUE É A FÓRMULA E ?</h2>
      <p> A fórmula E é uma categoria de automobilismo que envolve corridas de carro elétricos. Foi criada para promover a inovação e a sustentabilidade no esporte a motor</p>
    </section>
    );
};


const Calendario = () => {
    return(
        <section className="calendario2"> 
      <h2>Calendário de Corridas e circuitos</h2>
      <p>A fórmula E tem um calendário de corridas que acontecem em diferentes cidades ao redor do mundo. Você pode encontrar mais informações sobre o nosso calendário atual na nossa página <a href="Corridas">CORRIDAS</a></p>
    </section>
    )
}

const Tec = () => {
    return(
        <section className="tec">
      <h2>Tecnologia e Inovação</h2>
      <p> Os carros da Fórmula E são alimentados por baterias elétricas e usam tecnologias avançadas para maximizar a eficiência e o desempenho dos carros. A categoria serve como um campo de testes para o desenvolvimento de veículos elétricos de rua.</p>
    </section>
    );
};

const Equipes = () => {
    return(
        <section className="equipes">
      <h2>Participantes e Equipes</h2>
      <p>Confira abaixo as equipes participantes da Fórmula E:</p>
      <a href="Times">TIMES</a>
      </section>
    )
}

const MainPage = () => {
    return (
      <div>
        <Titulo/>
        <OqueE/>
        <Calendario/>
        <Tec/>
        <Equipes/>
      </div>
    );
  };
  
  export default MainPage;