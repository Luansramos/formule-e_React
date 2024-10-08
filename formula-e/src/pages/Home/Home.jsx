import React, { useEffect } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

// Importações das imagens
import mahindra1 from '../../assets/carro mahindra.jpg';
import mahindra2 from '../../assets/carro mahindra2.webp';
import china from '../../assets/china.png';
import EUA1 from '../../assets/EUA.png';
import EUA2 from '../../assets/EUA.png'; // Se for a mesma imagem, pode reutilizar
import reino1 from '../../assets/reino.webp';
import reino2 from '../../assets/reino.webp'; // Se for a mesma imagem, pode reutilizar
import pistaXangai from '../../assets/pistaXangai.png';
import pistaEUA1 from '../../assets/euapista.png';
import pistaEUA2 from '../../assets/euapista.png'; // Se for a mesma imagem, pode reutilizar
import pistaLondres1 from '../../assets/londrespista.png';
import pistaLondres2 from '../../assets/londrespista.png'; // Se for a mesma imagem, pode reutilizar
import noticia1 from '../../assets/noticia 1.webp';
import noticia2 from '../../assets/noticia 2.webp';
import noticia3 from '../../assets/noticia3.webp';
import pascal from '../../assets/pascal.png';
import nickJaguar from '../../assets/pilotos/nick-jaguar.png';
import oliverNissan from '../../assets/pilotos/oliver-nissan.png';
import fotoJogo from '../../assets/fotojogo.png';

function Home() {
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
    <>
      <section className="rolagem">
        <div className="noticia-container">
          <div className="container-imagem">
            <img src={mahindra1} alt="Carro Mahindra" className="imagem1" />
            <img src={mahindra2} alt="Carro Mahindra 2" className="imagem2" />
          </div>
          <h2>Descubra o Futuro das Corridas Automobilísticas: Bem-vindo à Fórmula E!</h2>
          <p>
            Você já imaginou um mundo onde a velocidade e a sustentabilidade se encontram na pista de corrida? Bem-vindo à Fórmula E, o ápice da inovação no mundo automobilístico. Aqui, a adrenalina das corridas de carros se une à tecnologia de ponta e ao compromisso com um futuro mais limpo e sustentável.
            Junte-se a nós nesta jornada emocionante pelo futuro das corridas. Explore nossos circuitos urbanos deslumbrantes, conheça os pilotos mais talentosos do mundo e mergulhe na emoção das corridas elétricas mais eletrizantes da atualidade.
            Prepare-se para uma experiência única, onde cada curva, cada ultrapassagem e cada momento nos leva mais perto de um amanhã melhor. Não perca a oportunidade de fazer parte dessa revolução. Siga em frente e descubra por que a Fórmula E está mudando o jogo das corridas automobilísticas para sempre.
            O futuro está aqui. O futuro é elétrico. O futuro é Fórmula E.
          </p>
          <div className="saiba">
            <Link to="SaibaMais"><button>Saiba Mais</button></Link>
          </div>
        </div>
      </section>

      <section className="calendario-pistas rolagem">
        <h2>PRÓXIMAS CORRIDAS</h2>
        <div className="calendario-container">
          <div className="calendario">
            <ul className="calendario-list">
              <li>
                <img src={china} alt="China" />
                <p>Rodada 13. 26 de maio de 2024</p>
              </li>
              <li>
                <img src={EUA1} alt="EUA" />
                <p>Rodada 14. 29 de junho de 2024</p>
              </li>
              <li>
                <img src={EUA2} alt="EUA" />
                <p>Rodada 15. 30 de junho de 2024</p>
              </li>
              <li>
                <img src={reino1} alt="Reino Unido" />
                <p>Rodada 16. 20 de julho de 2024</p>
              </li>
              <li>
                <img src={reino2} alt="Reino Unido" />
                <p>Rodada 17. 21 de julho de 2024</p>
              </li>
            </ul>
          </div>
          <div className="container-pistas">
            <ul className="calendario-list">
              <li>
                <img src={pistaXangai} alt="Pista Xangai" />
                <p>CIRCUITO XANGAI.</p>
              </li>
              <li>
                <img src={pistaEUA1} alt="Pista EUA" />
                <p>CIRCUITO PORTLAND.</p>
              </li>
              <li>
                <img src={pistaEUA2} alt="Pista EUA" />
                <p>CIRCUITO PORTLAND.</p>
              </li>
              <li>
                <img src={pistaLondres1} alt="Pista Londres" />
                <p>CIRCUITO LONDRES.</p>
              </li>
              <li>
                <img src={pistaLondres2} alt="Pista Londres" />
                <p>CIRCUITO LONDRES.</p>
              </li>
            </ul>
          </div>
          <div className="saiba">
            <Link to="Corridas"><button>Saiba Mais</button></Link>
          </div>
        </div>
      </section>

      <section className="principais-noticias rolagem">
        <h2>PRINCIPAIS NOTÍCIAS</h2>
        <div className="containaer-principais-noticias">
          <div className="primeira-noticia">
            <a href="#">
              <img src={noticia1} alt="Imagem Alemanha" />
            </a>
            <p>WEHRLEIN VENCE CORRIDA 2 EM MISANO APÓS ROWLAND FICAR SEM BATERIA</p>
          </div>
          <div className="segunda-noticia">
            <a href="#">
              <img src={noticia2} alt="Imagem Jogos" />
            </a>
            <p>Fórmula E: Confira horários e como assistir ao ePrix de Mônaco</p>
          </div>
          <div className="terceira-noticia">
            <a href="#">
              <img src={noticia3} alt="Notícia 3" />
            </a>
            <p>F-E: Equipe de Di Grassi, Abt usará trem de força Lola / Yamaha a partir de 2025</p>
          </div>
        </div>
      </section>

      <section className="container-podio rolagem">
        <h2>Destaque da última corrida</h2>
        <div className="podio">
          <div className="primeiro colocado">
            <img src={pascal} alt="Pascal Wehrlein" />
            <h3>2° Colocado:</h3>
            <h4>Pascal Wehrlein</h4>
            <p>Pontos: 124</p>
            <br />
            <p>Equipe: TAG Heuer Porsche</p>
          </div>
          <div className="segundo colocado">
            <img src={nickJaguar} alt="Nick Cassidy" />
            <h3>1° Colocado:</h3>
            <h4>Nick Cassidy</h4>
            <p>Pontos: 140</p>
            <br />
            <p>EQUIPE: Jaguar TCS Racing</p>
          </div>
          <div className="terceiro colocado">
            <img src={oliverNissan} alt="Oliver Rowland" />
            <h3>3° Colocado:</h3>
            <h4>Oliver Rowland</h4>
            <p>Pontos: 118</p>
            <br />
            <p>EQUIPE: Nissan Formula E Team</p>
          </div>
        </div>
      </section>

      <section className="container-classificacao rolagem">
        <h2>CLASSIFICAÇÃO</h2>
        <div className="table-container">
          <table id="inicio-tabela" className="classificacao">
            <thead>
              <tr>
                <th>Posição</th>
                <th>Nome do Piloto</th>
                <th>Equipe</th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody id="corpo-tabela">
              <tr>
                <td>1</td>
                <td>Nick Cassidy</td>
                <td>Jaguar TCS Racing</td>
                <td>140</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Pascal Wehrlein</td>
                <td>TAG Heuer Porsche</td>
                <td>124</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Oliver Rowland</td>
                <td>Nissan Formula E Team</td>
                <td>118</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Jake Dennis</td>
                <td>Andretti Formula E</td>
                <td>102</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Mitch Evans</td>
                <td>Jaguar TCS Racing</td>
                <td>97</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Jean-Eric</td>
                <td>DS Automobiles Penske</td>
                <td>84</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Maximilian Gunther</td>
                <td>Maserati MSG Racing</td>
                <td>65</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Antonio Felix Da Costa</td>
                <td>TAG Heuer Porsche</td>
                <td>59</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Toffel Vandoorne</td>
                <td>DS Automobiles Penske</td>
                <td>43</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Sam Bird</td>
                <td>NEOM MCLAREN FORMULA E TEAM</td>
                <td>38</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Sacha Fenestraz</td>
                <td>Nissan Formula E Team</td>
                <td>26</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Jake Hughes</td>
                <td>NEOM MCLAREN FORMULA E TEAM</td>
                <td>25</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Norman Nato</td>
                <td>Andretti Formula E</td>
                <td>24</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Robin Frijins</td>
                <td>Envision Racing Formula E Team</td>
                <td>21</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Sebastien Buemi</td>
                <td>Envision Racing Formula E Team</td>
                <td>20</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Nico Muller</td>
                <td>Abt Formula E</td>
                <td>18</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Dan Ticktum</td>
                <td>ERT Formula E Team</td>
                <td>12</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Sergio Sette Camara</td>
                <td>ERT Formula E Team</td>
                <td>11</td>
              </tr>
              <tr>
                <td>19</td>
                <td>Jehan Daruvala</td>
                <td>Maserati MSG Racing</td>
                <td>385</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Edorado Mortara</td>
                <td>Mahindra Race</td>
                <td>7</td>
              </tr>
              <tr>
                <td>21</td>
                <td>Taylor Barnard</td>
                <td>NEOM MCLAREN FORMULA E TEAM</td>
                <td>385</td>
              </tr>
              <tr>
                <td>22</td>
                <td>Lucas Di Grassi</td>
                <td>Abt Formula E</td>
                <td>1</td>
              </tr>
              <tr>
                <td>23</td>
                <td>Kelvin Van Der Linde</td>
                <td>Abt Formula E</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container-videos rolagem">
        <h2>VÍDEOS EM DESTAQUE</h2>
        <div className="container-videos-destaque">
          <div className="video">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/wFgGID0RwVU?si=NWTgydU7OmMAsh1X" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
            <p>MELHORES MOMENTOS</p>
          </div>
          <div className="video">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/unI-Id9QQ7o?si=k-eY5cDXT1DiMk6i" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
            <p>VÍDEO POV</p>
          </div>
          <div className="video">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/lIBpuL--6To?si=JnLRvyPrrpSNtxs_" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
            <p>VÍDEO DE APRESENTAÇÃO</p>
          </div>
        </div>
      </section>

      <section className="jogo-home rolagem">
        <h2>ÁREA GAMIFICADA</h2>
        <div className="container-imgjogo">
          <Link to="Jogo">
            <img 
              className="imgjogo" 
              width="300" 
              height="400" 
              src={fotoJogo} 
              alt="Jogo" 
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
