// src/pages/Corridas/Corridas.jsx

import React, { useEffect } from "react";
import "./corridas.css";

// Importações das imagens dos circuitos
import circuitoMexico from "../../assets/circuito-mexico.png";
import circuitoArabia from "../../assets/cirucito-arabia.png";
import circuitoSP from "../../assets/circuito-sp.png";
import circuitoToquio from "../../assets/circuito-toquio.png";
import circuitoItalia from "../../assets/circuito-italia.png";
import pistamonaco1 from "../../assets/pistamonaco 1.png";
import pistaBerlim from "../../assets/pistaBerlim.png";
import pistaXangai from "../../assets/pistaXangai.png";
import euapista from "../../assets/euapista.png";
import londrespista from "../../assets/londrespista.png";

// Importações das imagens das bandeiras
import flagMexico from "../../assets/Flag_of_Mexico.png";
import flagArabia from "../../assets/bandeira-da-arabia-saudita.png";
import flagBrasil from "../../assets/bandeira-brasil.png";
import flagJapan from "../../assets/japan-flag-icons-png.webp";
import flagItalia from "../../assets/ilustracao-de-bandeira-italia_53876-27098.avif";
import flagMonaco from "../../assets/monaco.png";
import flagAlemanha from "../../assets/alemanha.png";
import flagReino from "../../assets/reino.webp";

function Corridas() {
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
    <section className="rolagem">
      <div className="corpo">
        <h1>CALENDÁRIO 2024</h1>
        <div className="events">
          {/* RODADA 1 */}
          <div className="event">
            <div className="event-container">
              <img src={circuitoMexico} alt="Circuito Cidade do México" />
              <h2>RODADA 1</h2>
              <p>13 de janeiro de 2024</p>
              <hr />
              <div className="location">
                <img src={flagMexico} alt="Cidade do México" />
                <span>CIDADE DO MÉXICO</span>
              </div>
            </div>
          </div>

          {/* RODADA 2 */}
          <div className="event">
            <div className="event-container">
              <img src={circuitoArabia} alt="Circuito Diriyah" />
              <h2>2ª RODADA</h2>
              <p>26 de janeiro de 2024</p>
              <hr />
              <div className="location">
                <img src={flagArabia} alt="Diriyah" />
                <span>DIRIYAH</span>
              </div>
            </div>
          </div>

          {/* RODADA 3 */}
          <div className="event">
            <div className="event-container">
              <img src={circuitoArabia} alt="Circuito Diriyah" />
              <h2>RODADA 3</h2>
              <p>27 de janeiro de 2024</p>
              <hr />
              <div className="location">
                <img src={flagArabia} alt="Diriyah" />
                <span>DIRIYAH</span>
              </div>
            </div>
          </div>

          {/* RODADA 4 */}
          <div className="event">
            <div className="event-container">
              <img src={circuitoSP} alt="Circuito São Paulo" />
              <h2>RODADA 4</h2>
              <p>16 de março de 2024</p>
              <hr />
              <div className="location">
                <img src={flagBrasil} alt="São Paulo" />
                <span>SÃO PAULO</span>
              </div>
            </div>
          </div>

          {/* RODADA 5 */}
          <div className="event">
            <div className="event-container">
              <img src={circuitoSP} alt="Circuito São Paulo" />
              <h2>RODADA 5</h2>
              <p>16 de março de 2024</p>
              <hr />
              <div className="location">
                <img src={flagBrasil} alt="São Paulo" />
                <span>SÃO PAULO</span>
              </div>
            </div>
          </div>

          {/* RODADA 6 */}
          <div className="event">
            <div className="event-container">
              <img src={circuitoToquio} alt="Circuito Tóquio" />
              <h2>RODADA 6</h2>
              <p>30 de março de 2024</p>
              <hr />
              <div className="location">
                <img src={flagJapan} alt="Tóquio" />
                <span>TÓQUIO</span>
              </div>
            </div>
          </div>

          {/* RODADA 7 */}
          <div className="event">
            <div className="event-container">
              <img src={circuitoItalia} alt="Circuito Misano" />
              <h2>RODADA 7</h2>
              <p>13 de abril de 2024</p>
              <hr />
              <div className="location">
                <img src={flagItalia} alt="Misano" />
                <span>MISANO</span>
              </div>
            </div>
          </div>

          {/* RODADA 8 */}
          <div className="event">
            <div className="event-container">
              <img src={circuitoItalia} alt="Circuito Misano" />
              <h2>RODADA 8</h2>
              <p>14 de abril de 2024</p>
              <hr />
              <div className="location">
                <img src={flagItalia} alt="Misano" />
                <span>MISANO</span>
              </div>
            </div>
          </div>

          {/* RODADA 9 */}
          <div className="event">
            <div className="event-container">
              <img src={pistamonaco1} alt="Circuito Mônaco" />
              <h2>RODADA 9</h2>
              <p>27 de abril de 2024</p>
              <hr />
              <div className="location">
                <img src={flagMonaco} alt="Mônaco" />
                <span>MÔNACO</span>
              </div>
            </div>
          </div>

          {/* RODADA 10 */}
          <div className="event">
            <div className="event-container">
              <img src={pistaBerlim} alt="Circuito Berlim" />
              <h2>RODADA 10</h2>
              <p>11 de maio de 2024</p>
              <hr />
              <div className="location">
                <img src={flagAlemanha} alt="Berlim" />
                <span>BERLIM</span>
              </div>
            </div>
          </div>

          {/* RODADA 11 */}
          <div className="event">
            <div className="event-container">
              <img src={pistaBerlim} alt="Circuito Berlim" />
              <h2>RODADA 11</h2>
              <p>12 de maio de 2024</p>
              <hr />
              <div className="location">
                <img src={flagAlemanha} alt="Berlim" />
                <span>BERLIM</span>
              </div>
            </div>
          </div>

          {/* RODADA 12 */}
          <div className="event">
            <div className="event-container">
              <img src={pistaXangai} alt="Circuito Xangai" />
              <h2>RODADA 12</h2>
              <p>25 de maio de 2024</p>
              <hr />
              <div className="location">
                <img src={flagMexico} alt="Xangai" />
                <span>XANGAI</span>
              </div>
            </div>
          </div>

          {/* RODADA 13 */}
          <div className="event">
            <div className="event-container">
              <img src={pistaXangai} alt="Circuito Xangai" />
              <h2>RODADA 13</h2>
              <p>26 de maio de 2024</p>
              <hr />
              <div className="location">
                <img src={flagMexico} alt="Xangai" />
                <span>XANGAI</span>
              </div>
            </div>
          </div>

          {/* RODADA 14 */}
          <div className="event">
            <div className="event-container">
              <img src={euapista} alt="Circuito Portland" />
              <h2>RODADA 14</h2>
              <p>29 de junho de 2024</p>
              <hr />
              <div className="location">
                <img src={flagReino} alt="Portland" />
                <span>PORTLAND</span>
              </div>
            </div>
          </div>

          {/* RODADA 15 */}
          <div className="event">
            <div className="event-container">
              <img src={euapista} alt="Circuito Portland" />
              <h2>RODADA 15</h2>
              <p>30 de junho de 2024</p>
              <hr />
              <div className="location">
                <img src={flagReino} alt="Portland" />
                <span>PORTLAND</span>
              </div>
            </div>
          </div>

          {/* RODADA 16 */}
          <div className="event">
            <div className="event-container">
              <img src={londrespista} alt="Circuito Londres" />
              <h2>RODADA 16</h2>
              <p>20 de julho de 2024</p>
              <hr />
              <div className="location">
                <img src={flagReino} alt="Londres" />
                <span>LONDRES</span>
              </div>
            </div>
          </div>

          {/* RODADA 17 */}
          <div className="event">
            <div className="event-container">
              <img src={londrespista} alt="Circuito Londres" />
              <h2>RODADA 17</h2>
              <p>21 de julho de 2024</p>
              <hr />
              <div className="location">
                <img src={flagReino} alt="Londres" />
                <span>LONDRES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Corridas;
