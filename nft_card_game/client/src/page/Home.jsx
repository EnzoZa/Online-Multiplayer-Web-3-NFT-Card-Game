import React from 'react';

import { PageHOC } from '../components';

const Home = () => {
  return (
    <div>
  
    </div>
  )
};

export default PageHOC(
  Home,
  <>Bienvenue sur AvaxGods <br /> un jeu de cartes NFT Web3</>,  
  <>Connectez votre porte-feuille pour commencer à jouer <br /> à l'ultime jeu de cartes Web3</>
  );