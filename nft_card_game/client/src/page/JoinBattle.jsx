import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { CustomButton, CustomInput, PageHOC } from '../components'
import styles from '../styles'

const JoinBattle = () => {
    const { gameData, setBattleName, contract, setShowAlert, walletAddress, setErrorMessage } = useGlobalContext();

    const navigate = useNavigate();

    const handleClick = async (battleName) => {
        setBattleName(battleName);

        try {
            await contract.joinBattle(battleName);

            setShowAlert({ 
                status: true, 
                type: 'success',
                 message: `Vous avez rejoint ${battleName}!` 
                });
        } catch (error) {
            setErrorMessage(error);
        }
    }

    return (
        <>
        <h2 className={styles.joinHeadText}>Partie disponibles:</h2>

        <div className={styles.joinContainer}>
            {gameData.pendingBattles.length 
            ? 
            gameData.pendingBattles.filter((battle) => !battle.players.includes(walletAddress)).map((battle, index) => (
                <div key={battle.name + index} className={styles.flexBetween}>
                    <p className={styles.joinBattleTitle}>{index + 1}. {battle.name}</p>
                    <CustomButton 
                        title="Rejoindre"
                        handleClick={() => handleClick(battle.name)}
                    />
                </div>
            ))
            : <p className={styles.joinLoading}>Recharger la page pour voir de nouvelle partie</p>
            }
        </div>

        <p className={styles.infoText} onClick={() => navigate('/create-battle')}>Ou crée une nouvelle partie</p>
        </>
    )
}

export default PageHOC(
    JoinBattle, 
    <>Rejoindre <br /> une partie</>,
    <>Rejoignez une partie en cours</>
    )