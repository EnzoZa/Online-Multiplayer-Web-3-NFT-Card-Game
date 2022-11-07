import { ethers } from 'ethers';
import { ABI } from '../contract';

const AddNewEvent = (eventFilter, provider, cb) => {
    //Not have multiple listener for same event
    provider.removeListener(eventFilter);

    provider.on(eventFilter, (log) => {
        const parsedLog = (new ethers.utils.Interface(ABI)).parseLog(log);

        cb(parsedLog);
    });
    
}

export const createEventListeners = ({ navigate, contract, provider, walletAddress, setShowAlert, setUpdateGameData }) => {
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

    const NewBattleEventFilter = contract.filters.NewBattle();

    AddNewEvent(NewBattleEventFilter, provider, ({ args }) => {
        console.log('New battle created!', args, walletAddress);

        if(walletAddress.toLowerCase() === args.player1.toLowerCase() || walletAddress.toLowerCase() === args.player2.toLowerCase()) {
            navigate(`/battle/${args.battleName}`);
            setUpdateGameData((prevUpdateGameData) => prevUpdateGameData + 1);
        }
    });
}