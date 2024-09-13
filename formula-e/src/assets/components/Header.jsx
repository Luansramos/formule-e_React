import React from 'react';
import '../components/Header.css'

const Header = () => {
    return (
        <header>
            <div class="header-container">
                <nav class="menu">
                    <ul class="nav-menu">
                        <li>
                            <a href="../index.html">HOME</a>
                        </li>
                        <li>
                            <a href=".//pages/times.html">TIMES</a>
                        </li>
                        <li>
                            <a href=".//pages/corridas.html">CORRIDAS</a>
                        </li>
                        <li>
                            <a href=".//pages/noticias.html">NOTÍCIAS</a>
                        </li>
                        <li>
                            <a href=".//pages/jogo.html">JOGO</a>
                        </li>
                        <li>
                            <a href=".//pages/loja.html">LOJA</a>
                        </li>
                        <li>
                            <a href=".//pages/aovivo.html">AO VIVO</a>
                        </li>
                        <li>
                            <a href=".//pages/contato.html">CONTATO</a>
                        </li>
                        <li>
                            <a href=".//pages/login.html">LOGIN</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="nav-menu-mobile">
                <button onclick="toggleMenu()">☰</button>
                <div id="nav-menu-mobile-content" class="nav-menu-mobile-content">
                    <a href="../index.html">HOME</a>
                    <a href=".//pages/times.html">TIMES</a>
                    <a href=".//pages/corridas.html">CORRIDAS</a>
                    <a href=".//pages/noticias.html">NOTÍCIAS</a>
                    <a href=".//pages/jogo.html">JOGO</a>
                    <a href=".//pages/loja.html">LOJA</a>
                    <a href=".//pages/aovivo.html">AO VIVO</a>
                    <a href=".//pages/contato.html">CONTATO</a>
                    <a href=".//pages/login.html">LOGIN</a>
                </div>
            </div>
        </header>


    );
};
export default Header;