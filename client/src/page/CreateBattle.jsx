import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles';
import { useGlobalContext } from '../context';
import { CustomButton, CustomInput, PageHOC, GameLoad } from '../components';

const CreateBattle = () => {
  const { contract, battleName, setBattleName, gameData, setErrorMessage } = useGlobalContext();
  const [waitBattle, setWaitBattle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('gameData', gameData);
    if(gameData.activeBattle?.battleStatus === 1) {
      navigate(`/battle/${gameData.activeBattle.name}`);
    } else if(gameData?.activeBattle?.battleStatus === 0) setWaitBattle(true);
  }, [gameData]);

  const handleClick = async () => {
    if(!battleName || !battleName.trim()) return null;

    try {
      await contract.createBattle(battleName, {
        gasLimit: 200000
    });

      setWaitBattle(true);
    } catch (error) {
      setErrorMessage(error); 
    }
  }

  return (
    <> {waitBattle && <GameLoad />}
     
          <div className="flex flex-col mb-5">
            <CustomInput
              label="Combat"
              placeholder="Nom du combat"
              value={battleName}
              handleValueChange={setBattleName}
            />

            <CustomButton
              title="Créer"
              handleClick={handleClick} 
              restStyles="mt-6"
            />
          </div>

          <p className={ styles.infoText } onClick={() => navigate('/join-battle')}>
            Ou rejoindre un combat existant
          </p>
    </>
  )
};

export default PageHOC(
    CreateBattle,
  <>Crée <br /> une nouvelle partie</>,  
  <>Crée votre partie et attendez que d'autres joueurs vous rejoignent</>
  );