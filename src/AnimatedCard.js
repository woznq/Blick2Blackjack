import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AnimatedCard.css'; // Importuj plik CSS

import tenOfClubs from './karty/10_of_clubs.png';
import tenOfDiamonds from './karty/10_of_diamonds.png';
import tenOfHearts from './karty/10_of_hearts.png';
import tenOfSpades from './karty/10_of_spades.png';
import twoOfClubs from './karty/2_of_clubs.png';
import twoOfDiamonds from './karty/2_of_diamonds.png';
import twoOfHearts from './karty/2_of_hearts.png';
import twoOfSpades from './karty/2_of_spades.png';
import threeOfClubs from './karty/3_of_clubs.png';
import threeOfDiamonds from './karty/3_of_diamonds.png';
import threeOfHearts from './karty/3_of_hearts.png';
import threeOfSpades from './karty/3_of_spades.png';
import fourOfClubs from './karty/4_of_clubs.png';
import fourOfDiamonds from './karty/4_of_diamonds.png';
import fourOfHearts from './karty/4_of_hearts.png';
import fourOfSpades from './karty/4_of_spades.png';
import fiveOfClubs from './karty/5_of_clubs.png';
import fiveOfDiamonds from './karty/5_of_diamonds.png';
import fiveOfHearts from './karty/5_of_hearts.png';
import fiveOfSpades from './karty/5_of_spades.png';
import sixOfClubs from './karty/6_of_clubs.png';
import sixOfDiamonds from './karty/6_of_diamonds.png';
import sixOfHearts from './karty/6_of_hearts.png';
import sixOfSpades from './karty/6_of_spades.png';
import sevenOfClubs from './karty/7_of_clubs.png';
import sevenOfDiamonds from './karty/7_of_diamonds.png';
import sevenOfHearts from './karty/7_of_hearts.png';
import sevenOfSpades from './karty/7_of_spades.png';
import eightOfClubs from './karty/8_of_clubs.png';
import eightOfDiamonds from './karty/8_of_diamonds.png';
import eightOfHearts from './karty/8_of_hearts.png';
import eightOfSpades from './karty/8_of_spades.png';
import nineOfClubs from './karty/9_of_clubs.png';
import nineOfDiamonds from './karty/9_of_diamonds.png';
import nineOfHearts from './karty/9_of_hearts.png';
import nineOfSpades from './karty/9_of_spades.png';
import aceOfClubs from './karty/ace_of_clubs.png';
import aceOfDiamonds from './karty/ace_of_diamonds.png';
import aceOfHearts from './karty/ace_of_hearts.png';
import aceOfSpades from './karty/ace_of_spades.png';
import jackOfClubs from './karty/jack_of_clubs.png';
import jackOfDiamonds from './karty/jack_of_diamonds.png';
import jackOfHearts from './karty/jack_of_hearts.png';
import jackOfSpades from './karty/jack_of_spades.png';
import kingOfClubs from './karty/king_of_clubs.png';
import kingOfDiamonds from './karty/king_of_diamonds.png';
import kingOfHearts from './karty/king_of_hearts.png';
import kingOfSpades from './karty/king_of_spades.png';
import queenOfClubs from './karty/queen_of_clubs.png';
import queenOfDiamonds from './karty/queen_of_diamonds.png';
import queenOfHearts from './karty/queen_of_hearts.png';
import queenOfSpades from './karty/queen_of_spades.png';

const initialCardImages = [
  tenOfClubs, tenOfDiamonds, tenOfHearts, tenOfSpades,
  twoOfClubs, twoOfDiamonds, twoOfHearts, twoOfSpades,
  threeOfClubs, threeOfDiamonds, threeOfHearts, threeOfSpades,
  fourOfClubs, fourOfDiamonds, fourOfHearts, fourOfSpades,
  fiveOfClubs, fiveOfDiamonds, fiveOfHearts, fiveOfSpades,
  sixOfClubs, sixOfDiamonds, sixOfHearts, sixOfSpades,
  sevenOfClubs, sevenOfDiamonds, sevenOfHearts, sevenOfSpades,
  eightOfClubs, eightOfDiamonds, eightOfHearts, eightOfSpades,
  nineOfClubs, nineOfDiamonds, nineOfHearts, nineOfSpades,
  aceOfClubs, aceOfDiamonds, aceOfHearts, aceOfSpades,
  jackOfClubs, jackOfDiamonds, jackOfHearts, jackOfSpades,
  kingOfClubs, kingOfDiamonds, kingOfHearts, kingOfSpades,
  queenOfClubs, queenOfDiamonds, queenOfHearts, queenOfSpades
];

const AnimatedCard = () => {
  const [cards, setCards] = useState([]);
  const [remainingCards, setRemainingCards] = useState(initialCardImages);

  const handleAnimateFromTopRightToCenter = () => {
    if (remainingCards.length === 0) return; // No more cards to draw

    setCards(prevCards => {
      // Randomly select an image from the remainingCards array
      const randomIndex = Math.floor(Math.random() * remainingCards.length);
      const selectedImage = remainingCards[randomIndex];

      // Remove the selected card from the remainingCards array
      const newRemainingCards = remainingCards.filter((_, index) => index !== randomIndex);
      setRemainingCards(newRemainingCards);

      // Calculate the new left and top positions for all existing cards
      const updatedCards = prevCards.map((card, index) => ({
        ...card,
        left: card.left - 80, // Shift each card 80px to the left
        top: card.top - 20 // Shift each card 20px down
      }));

      // Add the new card at the center with the selected image
      return [
        ...updatedCards,
        { id: prevCards.length, top: window.innerHeight / 2, left: window.innerWidth / 2, image: selectedImage } // New card starts at the center
      ];
    });
  };

  return (
    <div className="animation-container" style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {cards.map(card => (
        <motion.div
          key={card.id}
          className="card"
          initial={{ opacity: 0, top: 0, left: '100%' }} // Start from top right
          animate={{ opacity: 1, top: card.top, left: card.left, transform: 'translate(-50%, -50%)' }}
          transition={{ duration: 0.3, ease: "easeOut" }} // Smooth animation
          style={{ position: 'absolute' }}
        >
          <img src={card.image} alt="Card" /> {/* Use selected image */}
        </motion.div>
      ))}
      
      <button className="button" onClick={handleAnimateFromTopRightToCenter}>Rozdaj z Prawego Górnego na Środek</button>
    </div>
  );
};

export default AnimatedCard;
//duh