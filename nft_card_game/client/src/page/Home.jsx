import React, { useState } from 'react';

import { PageHOC, CustomInput, CustomButton } from '../components';
import { useGlobalContext } from '../context';

const Home = () => {
  const { contract, walletAddress, setShowAlert } = useGlobalContext();
  const [playerName, setPlayerName] = useState('');

  const handleClick = async () => {
    try {
      const playerExists = await contract.isPlayer(walletAddress); 
      if(!playerExists) {
        await contract.registerPlayer(playerName, playerName);

        setShowAlert({
          status: true,
          type: 'info',
          message: `${playerName} est invoqué(e) !`
        });
      }
    } catch (error) {
      setShowAlert({
        status: true,
        type: "failure",
        message: "Une erreur s'est produite !"
      });
    }
  }

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
        handleClick = {handleClick}
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