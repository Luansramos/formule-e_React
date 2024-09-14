import React from 'react';
import '../components/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div class="header-container">
                <nav class="menu">
                    <ul class="nav-menu">
                        <li><Link to ="/">HOME</Link></li>
                        <li><Link to ="/Times">TIMES</Link></li>
                        <li><Link to =".//pages/corridas.html">CORRIDAS</Link></li>
                        <li><Link to =".//pages/noticias.html">NOTÍCIAS</Link></li>
                        <li><Link to =".//pages/jogo.html">JOGO</Link></li>
                        <li><Link to =".//pages/loja.html">LOJA</Link></li>
                        <li><Link to =".//pages/aovivo.html">AO VIVO</Link></li>
                        <li><Link to =".//pages/contato.html">CONTATO</Link></li>
                        <li><Link to =".//pages/login.html">LOGIN</Link></li>
                    </ul>
                </nav>
            </div>
            <div class="nav-menu-mobile">
                <button onclick="toggleMenu()">☰</button>
                <div id="nav-menu-mobile-content" class="nav-menu-mobile-content">
                   <Link to ="../index.html">HOME</Link>
                   <Link to =".//pages/times.html">TIMES</Link>
                   <Link to =".//pages/corridas.html">CORRIDAS</Link>
                   <Link to =".//pages/noticias.html">NOTÍCIAS</Link>
                   <Link to =".//pages/jogo.html">JOGO</Link>
                   <Link to =".//pages/loja.html">LOJA</Link>
                   <Link to =".//pages/aovivo.html">AO VIVO</Link>
                   <Link to =".//pages/contato.html">CONTATO</Link>
                   <Link to =".//pages/login.html">LOGIN</Link>
                </div>
            </div>
        </header>


    );
};
export default Header;