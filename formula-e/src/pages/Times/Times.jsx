import React, { useEffect } from "react";
import './times.css'

function Times() {
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
          {/* Card 1 */}
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src=".//src/assets/abt-cupra.png" alt="ABT Cupra" />
              </div>
              <div className="contentBx">
                <h3>ABT CUPRA FORMULA E TEAM</h3>
                <br />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>Vitórias<br />14</p>
              </li>
              <li>
                <p>Pódios<br />47</p>
              </li>
              <li>
                <p>Corridas<br />109</p>
                <div className="saiba-mais">
                  <a href="../pages/abt.html">
                    <button>Saiba Mais</button>
                  </a>
                </div>
              </li>
            </ul>
          </div>

//           {/* Card 2 */}
//           <div className="card">
//             <div className="content">
//               <div className="imgBx">
//                 <img src=".//src/assets/andreti.png" alt="Andretti" />
//               </div>
//               <div className="contentBx">
//                 <h3>ANDRETTI FORMULA E</h3>
//                 <br />
//               </div>
//             </div>
//             <ul className="sci">
//               <li>
//                 <p>Vitórias<br />11</p>
//               </li>
//               <li>
//                 <p>Pódios<br />36</p>
//               </li>
//               <li>
//                 <p>Corridas<br />126</p>
//                 <div className="saiba-mais">
//                   <a href="../pages/andreti.html">
//                     <button>Saiba Mais</button>
//                   </a>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Card 3 */}
//           <div className="card">
//             <div className="content">
//               <div className="imgBx">
//                 <img src=".//src/assets/DS PENSKE.png" alt="DS PENSKE" />
//               </div>
//               <div className="contentBx">
//                 <h3>DS PENSKE</h3>
//                 <br />
//               </div>
//             </div>
//             <ul className="sci">
//               <li>
//                 <p>Vitórias<br />3</p>
//               </li>
//               <li>
//                 <p>Pódios<br />16</p>
//               </li>
//               <li>
//                 <p>Corridas<br />126</p>
//                 <div className="saiba-mais">
//                   <a href="../pages/ds.html">
//                     <button>Saiba Mais</button>
//                   </a>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Mais Cards */}
//           {/* Você pode repetir a estrutura de cartão para os outros times */}

//           {/* Card Final - Exemplo */}
//           <div className="card">
//             <div className="content">
//               <div className="imgBx">
//                 <img src=".//src/assets/porsche.png" alt="Porsche" />
//               </div>
//               <div className="contentBx">
//                 <h3>TAG HEUER PORSCHE FORMULA E TEAM</h3>
//                 <br />
//               </div>
//             </div>
//             <ul className="sci">
//               <li>
//                 <p>Vitórias<br />8</p>
//               </li>
//               <li>
//                 <p>Pódios<br />16</p>
//               </li>
//               <li>
//                 <p>Corridas<br />68</p>
//                 <div className="saiba-mais">
//                   <a href="../pages/porsche.html">
//                     <button>Saiba Mais</button>
//                   </a>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Times;
