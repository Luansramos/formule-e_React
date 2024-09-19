import React, { useEffect } from "react";
import './Times.css'; // Crie ou ajuste o arquivo de estilo correspondente

const teamsData = [
  {
    imgSrc: "../img/abt-cupra.png",
    name: "ABT CUPRA FORMULA E TEAM",
    victories: 14,
    podiums: 47,
    races: 109,
    link: "../pages/abt.html",
  },
  {
    imgSrc: "../img/andreti.png",
    name: "ANDRETTI FORMULA E",
    victories: 11,
    podiums: 36,
    races: 126,
    link: "../pages/andreti.html",
  },
  {
    imgSrc: "../img/DS PENSKE.png",
    name: "DS PENSKE",
    victories: 3,
    podiums: 16,
    races: 126,
    link: "../pages/ds.html",
  },
  {
    imgSrc: "../img/envision.png",
    name: "ENVISION RACING",
    victories: 16,
    podiums: 50,
    races: 126,
    link: "../pages/envision.html",
  },
  {
    imgSrc: "../img/ert.png",
    name: "ERT FORMULA E TEAM",
    victories: 2,
    podiums: 6,
    races: 126,
    link: "../pages/ert.html",
  },
  {
    imgSrc: "../img/jaguar.png",
    name: "JAGUAR TCS RACING",
    victories: 15,
    podiums: 41,
    races: 105,
    link: "../pages/jaguar.html",
  },
  {
    imgSrc: "../img/mahindracar.png",
    name: "MAHINDRA RACING",
    victories: 5,
    podiums: 24,
    races: 125,
    link: "../pages/mahindra.html",
  },
  {
    imgSrc: "../img/maserati.png",
    name: "MASERATI MSG RACING",
    victories: 10,
    podiums: 27,
    races: 126,
    link: "../pages/maserati.html",
  },
  {
    imgSrc: "../img/neon.png",
    name: "NEOM MCLAREN FORMULA E TEAM",
    victories: 8,
    podiums: 25,
    races: 81,
    link: "../pages/mclaren.html",
  },
  {
    imgSrc: "../img/nissan.png",
    name: "NISSAN FORMULA E TEAM",
    victories: 18,
    podiums: 46,
    races: 126,
    link: "../pages/nissan.html",
  },
  {
    imgSrc: "../img/porsche.png",
    name: "TAG HEUER PORSCHE FORMULA E TEAM",
    victories: 8,
    podiums: 16,
    races: 68,
    link: "../pages/porsche.html",
  },
];

const TeamCard = ({ team }) => (
  <div className="card">
    <div className="content">
      <div className="imgBx">
        <img src={team.imgSrc} alt={team.name} />
      </div>
      <div className="contentBx">
        <h3>{team.name}</h3>
        <br />
      </div>
    </div>
    <ul className="sci">
      <li>
        <p>Vitórias<br />{team.victories}</p>
      </li>
      <li>
        <p>Pódios<br />{team.podiums}</p>
      </li>
      <li>
        <p>Corridas<br />{team.races}</p>
        <p>
          <div className="saiba-mais">
            <a href={team.link}>
              <button>Saiba Mais</button>
            </a>
          </div>
        </p>
      </li>
    </ul>
  </div>
);

function Teams() {

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
    <main className="rolagem">
      <section className="container-times">
        <div className="container">
          {teamsData.map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Teams;
