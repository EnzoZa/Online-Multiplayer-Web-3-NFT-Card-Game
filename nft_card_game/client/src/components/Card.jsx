import React from 'react';
import Tilt from 'react-parallax-tilt';

import styles from '../styles';
import { allCards } from '../assets';

const generateRandomCardImage = () => allCards[Math.floor(Math.random() * (allCards.length - 1))];

const img1 = generateRandomCardImage();
const img2 = generateRandomCardImage();

const Card = ({ card, title, restStyles, cardRef, playerTwo }) => (
  <Tilt>
    <div className={`${styles.cardContainer} ${restStyles}`}>
      <img src={playerTwo ? img2 : img1} alt="ace_card" className={styles.cardImg} />

      <div className={`${styles.cardPointContainer} sm:left-[19.2%] left-[20%] ${styles.flexCenter}`}>
        <p className={`${styles.cardPoint} text-yellow-400`}>{card.att}</p>
      </div>
      <div className={`${styles.cardPointContainer} sm:right-[12.2%] right-[13%] ${styles.flexCenter}`}>
        <p className={`${styles.cardPoint} text-red-700`}>{card.def}</p>
      </div>

      <div className={`${styles.cardTextContainer} ${styles.flexCenter}`}>
        <p className={styles.cardText}>{title}</p>
      </div>
    </div>
  </Tilt>
);

export default Card;