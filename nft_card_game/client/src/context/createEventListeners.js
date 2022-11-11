import { ethers } from 'ethers';
import { arrayify } from 'ethers/lib/utils';
import { ABI } from '../contract';
import { playAudio, sparcle } from '../utils/animation';
import { defenseSound } from '../assets';

const emptyAccount = '0x0000000000000000000000000000000000000000';

const AddNewEvent = (eventFilter, provider, cb) => {
    //Not have multiple listener for same event
    provider.removeListener(eventFilter);

    provider.on(eventFilter, (log) => {
        const parsedLog = (new ethers.utils.Interface(ABI)).parseLog(log);

        cb(parsedLog);
    });
    
}

const getCoords = (cardRef) => {
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();

    return {
        pageX: left + width / 2,
        pageY: top + height / 2
    }
} 

export const createEventListeners = ({ navigate, contract, provider, walletAddress, setShowAlert, setUpdateGameData, player1Ref, player2Ref }) => {
    const NewPlayerEventFilter = contract.filters.NewPlayer();
    AddNewEvent(NewPlayerEventFilter, provider, ({ args }) => {
        console.log('New player created!', args);

        if(walletAddress == args.owner) {
            setShowAlert({
                status:true,
                type:'success',
                message: 'Le joueur a bien été enregistré(e).'
            });
        }
    });

    const newGameTokenEventFilter = contract.filters.NewGameToken();
    AddNewEvent(newGameTokenEventFilter, provider, ({ args }) => {
        console.log('New game token created!', args);

        if(walletAddress.toLowerCase() === args.owner.toLowerCase()) {
            setShowAlert({
                status:true,
                type:'success',
                message: 'Votre token a bien été enregistrée.'
            });

            navigate('/create-battle');
        }
    });

    const NewBattleEventFilter = contract.filters.NewBattle();
    AddNewEvent(NewBattleEventFilter, provider, ({ args }) => {
        console.log('New battle created!', args, walletAddress);

        if(walletAddress.toLowerCase() === args.player1.toLowerCase() || walletAddress.toLowerCase() === args.player2.toLowerCase()) {
            navigate(`/battle/${args.battleName}`);
            setUpdateGameData((prevUpdateGameData) => prevUpdateGameData + 1);
        }
    });

    const BattleMoveEventFilter = contract.filters.BattleMove();
    AddNewEvent(BattleMoveEventFilter, provider, ({ args }) => {
        console.log('Battle', args);
    });

    const RoundEndedEventFilter = contract.filters.RoundEnded();
    AddNewEvent(RoundEndedEventFilter, provider, ({ args }) => {
        console.log('Round ended', args, walletAddress);

        for(let i = 0; i < args.damagedPlayers.length; i += 1){
            if(args.damagedPlayers[i] != emptyAccount){
                if(args.damagedPlayers[i].toLowerCase() === walletAddress.toLowerCase()){
                    sparcle(getCoords(player1Ref));
                } else {
                    sparcle(getCoords(player2Ref));
                }
            } else {
                playAudio(defenseSound);
            }
        }
        setUpdateGameData((prevUpdateGameData) => prevUpdateGameData + 1);
    });

    const BattleEndedEventFilter = contract.filters.BattleEnded();
    AddNewEvent(BattleEndedEventFilter, provider, ({ args }) => {
        console.log('Battle ended', args, walletAddress);

        if(args.winner.toLowerCase() === walletAddress.toLowerCase()){
            setShowAlert({
                status:true,
                type:'success',
                message: 'Vous avez gagné(e) !'
            });
        } else if(args.loser.toLowerCase() === walletAddress.toLowerCase()){
            setShowAlert({
                status:true,
                type:'failure',
                message: 'Vous avez perdu(e) !'
            });
        } else if (args.winner == emptyAccount) {
            setShowAlert({
                status:true,
                type:'warning',
                message: 'Match nul !'
            });
        } 

        navigate('/create-battle');
    });     
}