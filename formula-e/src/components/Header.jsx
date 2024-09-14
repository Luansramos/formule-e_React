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
                        <li><Link to ="/Corridas">CORRIDAS</Link></li>
                        <li><Link to ="/Noticias">NOTÍCIAS</Link></li>
                        <li><Link to ="/Jogo">JOGO</Link></li>
                        <li><Link to ="/Loja">LOJA</Link></li>
                        <li><Link to ="/Live">AO VIVO</Link></li>
                        <li><Link to ="/Contato">CONTATO</Link></li>
                        <li><Link to ="/Login">LOGIN</Link></li>
                    </ul>
                </nav>
            </div>
            <div class="nav-menu-mobile">
                <button onclick="toggleMenu()">☰</button>

{/*     ------------->>>>BOTEI ESSE MENU DENTRO DE UMA LISTA, PERGUNTAR PRO METHEUS SE PRECISA TIRAR<<<<-------------- */}

                <ul id="nav-menu-mobile-content" class="nav-menu-mobile-content">
                    <li><Link to ="/">HOME</Link></li>
                    <li><Link to ="/Times">TIMES</Link></li>
                    <li><Link to ="/Corridas">CORRIDAS</Link></li>
                    <li><Link to ="/Noticias">NOTÍCIAS</Link></li>
                    <li><Link to ="/Jogo">JOGO</Link></li>
                    <li><Link to ="/Loja">LOJA</Link></li>
                    <li><Link to ="/Live">AO VIVO</Link></li>
                    <li><Link to ="/Contato">CONTATO</Link></li>
                    <li><Link to ="/Login">LOGIN</Link></li>
                </ul>
            </div>
        </header>


    );
};
export default Header;