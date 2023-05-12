import React, { useEffect, useState } from 'react';

import { PageHOC, CustomInput, CustomButton } from '../components';
import { useGlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { contract, walletAddress, setShowAlert, gameData, setErrorMessage } = useGlobalContext();
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const playerExists = await contract.isPlayer(walletAddress); 
      if(!playerExists) {
        await contract.registerPlayer(playerName, playerName, {
          gasLimit: 200000
      });

        setShowAlert({
          status: true,
          type: 'info',
          message: `${playerName} est invoqué(e) !`
        });
      }
    } catch (error) {
      setErrorMessage(error);
    }
  }

  useEffect(() => {
    const checkForPlayerToken = async () => {
      const playerExists = await contract.isPlayer(walletAddress);
      const playerTokenExist = await contract.isPlayerToken;
      console.log(contract);
      console.log(playerTokenExist);
      if(playerExists && playerTokenExist) navigate('/create-battle');
    }

    if(contract) checkForPlayerToken();
  }, [contract]);

  useEffect(() => {
    if(gameData.activeBattle) {
      navigate(`/battle/${gameData.activeBattle.name}`);
    }
  }, [gameData]);

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