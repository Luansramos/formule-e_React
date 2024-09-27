import React, { useState, useEffect } from 'react';
import './MemoryGame.css'; // Arquivo CSS para estilos
import jakeMclaren from '../../assets/pilotos/jake-mclaren.png';
import mclarenLogo from '../../assets/McLaren_Racing_logo.png';
import pascalPorsche from '../../assets/pilotos/pascal-porsche.png';
import porscheLogo from '../../assets/porschelogo.png';
import oliver from '../../assets/pilotos/oliver-nissan.png';
import nissanLogo from '../../assets/nissan-logo.png';
import lucasAbt from '../../assets/pilotos/lucas-abt.png';
import abtLogo from '../../assets/abtlogo.png';
import stoffelDs from '../../assets/pilotos/stoffel-ds.png';
import dsLogo from '../../assets/dslogo.png';
import edoardoMahindra from '../../assets/pilotos/edoardo-mahindra.png';
import mahindraLogo from '../../assets/mahindralogo.png';
import cardBack from '../../assets/logo.png';

// Dados das cartas
const cardsData = [
  { id: 1, name: 'jake', front: jakeMclaren },
  { id: 2, name: 'jake', front: mclarenLogo },
  { id: 3, name: 'pascal', front: pascalPorsche },
  { id: 4, name: 'pascal', front: porscheLogo },
  { id: 5, name: 'oliver', front: oliver },
  { id: 6, name: 'oliver', front: nissanLogo },
  { id: 7, name: 'lucas', front: lucasAbt },
  { id: 8, name: 'lucas', front: abtLogo },
  { id: 9, name: 'stoffel', front: stoffelDs },
  { id: 10, name: 'stoffel', front: dsLogo },
  { id: 11, name: 'edoardo', front: edoardoMahindra },
  { id: 12, name: 'edoardo', front: mahindraLogo }
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [movements, setMovements] = useState(0);
  const [winCount, setWinCount] = useState(0);

  // Embaralha e inicializa as cartas
  useEffect(() => {
    const shuffledCards = [...cardsData, ...cardsData] // Duplicando as cartas para pares
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, flipped: false, id: Math.random() }));
    setCards(shuffledCards);
  }, []);

  // Lógica quando duas cartas são viradas
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.name === secondCard.name) {
        // Encontrou par
        setWinCount((prevCount) => prevCount + 1);
        setFlippedCards([]);
      } else {
        // Não encontrou par
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, flipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
      setMovements((prevMovements) => prevMovements + 1);
    }
  }, [flippedCards]);

  // Exibe tela de vitória
  useEffect(() => {
    if (winCount === cardsData.length) {
      setTimeout(() => {
        alert(`Parabéns! Você ganhou com ${movements} movimentos.`);
        resetGame();
      }, 500);
    }
  }, [winCount]);

  const handleClick = (card) => {
    if (flippedCards.length === 2 || card.flipped) return;

    setCards((prevCards) =>
      prevCards.map((c) =>
        c.id === card.id ? { ...c, flipped: true } : c
      )
    );
    setFlippedCards((prev) => [...prev, card]);
  };

  const resetGame = () => {
    const shuffledCards = [...cardsData, ...cardsData]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, flipped: false, id: Math.random() }));
    setCards(shuffledCards);
    setFlippedCards([]);
    setMovements(0);
    setWinCount(0);
  };

  return (


    
      <div className="game-container">
        <h1>Jogo da Memória - Fórmula E</h1>
        <div className="stats">
          <h2>Movimentos: {movements}</h2>
          <button className='botao-jogo' onClick={resetGame}>Reiniciar Jogo</button>
        </div>
        <div className="cards-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${card.flipped ? 'flipped' : ''}`}
              onClick={() => handleClick(card)}
            >
              <img
                className="front"
                src={card.front}
                alt="card front"
                style={{ display: card.flipped ? 'block' : 'none' }}
              />
              <img
                className="back"
                src={cardBack}
                alt="card back"
                style={{ display: card.flipped ? 'none' : 'block' }}
              />
            </div>
          ))}
        </div>
      </div>

  );
}

export default MemoryGame;