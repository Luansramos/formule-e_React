import React, { useEffect } from "react";
import './times.css'; 
import abtCupra from '../../assets/abt-cupra.png';
import andreti from '../../assets/andreti.png';
import dspenske from '../../assets/DSPENSKE.png';
import envision from '../../assets/envision.png';
import ert from '../../assets/ert.png';
import jaguar from '../../assets/jaguar.png';
import mahindra from '../../assets/mahindracar.png';
import maserati from '../../assets/maserati.png';
import neon from '../../assets/neon.png';
import nissan from '../../assets/nissan.png';
import porsche from '../../assets/porsche.png';




const teamsData = [
  {
    imgSrc: abtCupra,
    name: "ABT CUPRA FORMULA E TEAM",
    victories: 14,
    podiums: 47,
    races: 109,
    link: "../pages/abt.html",
  },
  {
    imgSrc: andreti,
    name: "ANDRETTI FORMULA E",
    victories: 11,
    podiums: 36,
    races: 126,
    link: "../pages/andreti.html",
  },
  {
    imgSrc: dspenske,
    name: "DS PENSKE",
    victories: 3,
    podiums: 16,
    races: 126,
    link: "../pages/ds.html",
  },
  {
    imgSrc: envision,
    name: "ENVISION RACING",
    victories: 16,
    podiums: 50,
    races: 126,
    link: "../pages/envision.html",
  },
  {
    imgSrc: ert,
    name: "ERT FORMULA E TEAM",
    victories: 2,
    podiums: 6,
    races: 126,
    link: "../pages/ert.html",
  },
  {
    imgSrc: jaguar,
    name: "JAGUAR TCS RACING",
    victories: 15,
    podiums: 41,
    races: 105,
    link: "../pages/jaguar.html",
  },
  {
    imgSrc: mahindra,
    name: "MAHINDRA RACING",
    victories: 5,
    podiums: 24,
    races: 125,
    link: "../pages/mahindra.html",
  },
  {
    imgSrc: maserati,
    name: "MASERATI MSG RACING",
    victories: 10,
    podiums: 27,
    races: 126,
    link: "../pages/maserati.html",
  },
  {
    imgSrc: neon,
    name: "NEOM MCLAREN FORMULA E TEAM",
    victories: 8,
    podiums: 25,
    races: 81,
    link: "../pages/mclaren.html",
  },
  {
    imgSrc: nissan,
    name: "NISSAN FORMULA E TEAM",
    victories: 18,
    podiums: 46,
    races: 126,
    link: "../pages/nissan.html",
  },
  {
    imgSrc: porsche,
    name: "TAG HEUER PORSCHE FORMULA E TEAM",
    victories: 8,
    podiums: 16,
    races: 68,
    link: "../pages/porsche.html",
  },
];

const TeamCard = ({ team }) => (
  <div className="card-times">
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
        <div className="sub-container">
          {teamsData.map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Teams;
