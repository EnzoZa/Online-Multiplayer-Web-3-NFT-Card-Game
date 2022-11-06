import React, { useState } from 'react';

import { PageHOC, CustomInput, CustomButton } from '../components';
import { useGlobalContext } from '../context';

const Home = () => {
  const { contract, walletAddress } = useGlobalContext();
  const [playerName, setPlayerName] = useState('');
  return (
    <div className="flex flex-col">
      <CustomInput
        label="Nom"
        placeholder="Entrez votre nom"
        value={playerName}
        handleValueChange={setPlayerName}
      />

      <CustomButton
        title="S'inscrire"
        handleClick = {() => {}}
        restStyles = "mt-6"
      />
    </div>
  )
};

export default PageHOC(
  Home,
  <>Bienvenue sur AvaxGods <br /> un jeu de cartes NFT Web3</>,  
  <>Connectez votre porte-feuille pour commencer à jouer <br /> à l'ultime jeu de cartes Web3</>
  );