import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import LogoHeader from '../../assets/logo.png'


function Header () {
        // Função para alternar o menu móvel
        const toggleMenu = () => {
            const menuContent = document.getElementById("nav-menu-mobile-content");
            if (menuContent.style.display === "flex") {
                menuContent.style.display = "none";
            } else {
                menuContent.style.display = "flex";
            }
        };
    return (
        <header>
            <div className="header-container">
                <nav className="menu">
                    <img src={LogoHeader} alt="Logo Formula E" />
                    <ul className="nav-menu">
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
            <div className="nav-menu-mobile">
                <button onClick={toggleMenu}>☰</button>

                <ul id="nav-menu-mobile-content" className="nav-menu-mobile-content">
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