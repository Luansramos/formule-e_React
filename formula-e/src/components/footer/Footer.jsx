// import React from 'react';
import logo from '../../assets/logo.png';
import instaLogo from '../../assets/instalogo.png';
import faceLogo from '../../assets/facelogo.png';
import youtubeLogo from '../../assets/youtubelogo.png';
import '../footer/Footer.css'
function Footer() {
    return (
        <footer>
            <div className="footer container">
                <div className="container-logo-img">
                    <img src={logo} width="136" height="32" alt="logo FÓRMULA E" />
                </div>
                <div className="footer-contato">
                    <h3>Contato</h3>
                    <ul className="tel-contato">
                        <li><a href="tel:+552199999999">+55 11 9999-9999</a></li>
                        <li><a href="mailto:contato@bikcraft.com">contato@formuale.com</a></li>
                    </ul>
                    <div className="footer-redes">
                        <a href="https://www.instagram.com">
                            <img src={instaLogo} width="32" height="32" alt="Instagram" />
                        </a>
                        <a href="https://www.facebook.com">
                            <img src={faceLogo} width="32" height="32" alt="Facebook" />
                        </a>
                        <a href="https://www.youtube.com">
                            <img src={youtubeLogo} width="32" height="32" alt="Youtube" />
                        </a>
                    </div>
                </div>
                <div className="footer-informacoes">
                    <h3>INFORMAÇÕES</h3>
                    <nav>
                        <ul>
                            <li>
                                <a href="..//pages/corridas.html">CORRIDAS</a>
                            </li>
                            <li>
                                <a href="..//pages/noticias.html">NOTÍCIAS</a>
                            </li>
                            <li>
                                <a href="..//pages/jogo.html">JOGO</a>
                            </li>
                            <li>
                                <a href="..//pages/loja.html">LOJA</a>
                            </li>
                            <li>
                                <a href="..//pages/aovivo.html">AO VIVO</a>
                            </li>
                            <li>
                                <a href="..//pages/login.html">LOGIN</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <p className="footer-copy">FÓRMULA E © Alguns direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
