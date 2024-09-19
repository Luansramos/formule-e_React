import React, { useEffect } from "react";
import './corridas.css'

 function Corridas(){
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
    return(

    <section className="rolagem">
      <div className="corpo">
        <h1>CALENDÁRIO 2024</h1>
        <div className="events">
          {/* RODADA 1 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/circuito-mexico.png" alt="Circuito 1" />
              <h2>RODADA 1</h2>
              <p>13 de janeiro de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/Flag_of_Mexico.png" alt="Cidade do México" />
                <span>CIDADE DO MÉXICO</span>
              </div>
            </div>
          </div>
          {/* RODADA 2 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/cirucito-arabia.png" alt="Circuito 2" />
              <h2>2ª RODADA</h2>
              <p>26 de janeiro de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/bandeira-da-arabia-saudita.png" alt="Diriyah" />
                <span>DIRIYAH</span>
              </div>
            </div>
          </div>
          {/* RODADA 3 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/cirucito-arabia.png" alt="Circuito 3" />
              <h2>RODADA 3</h2>
              <p>27 de janeiro de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/bandeira-da-arabia-saudita.png" alt="Diriyah" />
                <span>DIRIYAH</span>
              </div>
            </div>
          </div>
          {/* RODADA 4 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/circuito-sp.png" alt="Circuito 4" />
              <h2>RODADA 4</h2>
              <p>16 de março de 2024</p>
              <hr />
              <div className="location">
                <img src="..//src/assets/bandeira-brasil.png" alt="São Paulo" />
                <span>SÃO PAULO</span>
              </div>
            </div>
          </div>
          {/* RODADA 5 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/circuito-sp.png" alt="Circuito 5" />
              <h2>RODADA 5</h2>
              <p>16 de março de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/bandeira-brasil.png" alt="São Paulo" />
                <span>SÃO PAULO</span>
              </div>
            </div>
          </div>
          {/* RODADA 6 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/circuito-toquio.png" alt="Circuito 6" />
              <h2>RODADA 6</h2>
              <p>30 de março de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/japan-flag-icons-png.webp" alt="Tóquio" />
                <span>TÓQUIO</span>
              </div>
            </div>
          </div>
          {/* RODADA 7 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/circuito-italia.png" alt="Circuito 7" />
              <h2>RODADA 7</h2>
              <p>13 de abril de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/ilustracao-de-bandeira-italia_53876-27098.avif" alt="Misano" />
                <span>MISANO</span>
              </div>
            </div>
          </div>
          {/* RODADA 8 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/circuito-italia.png" alt="Circuito 8" />
              <h2>RODADA 8</h2>
              <p>14 de abril de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/ilustracao-de-bandeira-italia_53876-27098.avif" alt="Misano" />
                <span>MISANO</span>
              </div>
            </div>
          </div>
          {/* RODADA 9 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/pistamonaco 1.png" alt="Circuito 9" />
              <h2>RODADA 9</h2>
              <p>27 de abril de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/monaco.png" alt="Mônaco" />
                <span>MÔNACO</span>
              </div>
            </div>
          </div>
          {/* RODADA 10 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/pistaBerlim.png" alt="Circuito 10" />
              <h2>RODADA 10</h2>
              <p>11 de maio de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/alemanha.png" alt="Berlim" />
                <span>BERLIM</span>
              </div>
            </div>
          </div>
          {/* RODADA 11 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/pistaBerlim.png" alt="Circuito 11" />
              <h2>RODADA 11</h2>
              <p>12 de maio de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/alemanha.png" alt="Berlim" />
                <span>BERLIM</span>
              </div>
            </div>
          </div>
          {/* RODADA 12 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/pistaXangai.png" alt="Circuito 12" />
              <h2>RODADA 12</h2>
              <p>25 de maio de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/china.png" alt="Xangai" />
                <span>XANGAI</span>
              </div>
            </div>
          </div>
          {/* RODADA 13 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/pistaXangai.png" alt="Circuito 13" />
              <h2>RODADA 13</h2>
              <p>26 de maio de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/china.png" alt="Xangai" />
                <span>XANGAI</span>
              </div>
            </div>
          </div>
          {/* RODADA 14 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/euapista.png" alt="Circuito 14" />
              <h2>RODADA 14</h2>
              <p>29 de junho de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/EUA.png" alt="Portland" />
                <span>PORTLAND</span>
              </div>
            </div>
          </div>
          {/* RODADA 15 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/euapista.png" alt="Circuito 15" />
              <h2>RODADA 15</h2>
              <p>30 de junho de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/EUA.png" alt="Portland" />
                <span>PORTLAND</span>
              </div>
            </div>
          </div>
          {/* RODADA 16 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/londrespista.png" alt="Circuito 16" />
              <h2>RODADA 16</h2>
              <p>20 de julho de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/reino.webp" alt="Londres" />
                <span>LONDRES</span>
              </div>
            </div>
          </div>
          {/* RODADA 17 */}
          <div className="event">
            <div className="event-container">
              <img src=".//src/assets/londrespista.png" alt="Circuito 17" />
              <h2>RODADA 17</h2>
              <p>21 de julho de 2024</p>
              <hr />
              <div className="location">
                <img src=".//src/assets/reino.webp" alt="Londres" />
                <span>LONDRES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corridas;
