import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ethers, Signer } from 'ethers';
import Web3Modal from 'web3modal';
import { useNavigate } from 'react-router-dom';

import { ABI, ADDRESS } from '../contract';
import { createEventListeners } from './createEventListeners';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState('');
    const [provider, setProvider] = useState('');
    const [contract, setContract] = useState('');
    const [showAlert, setShowAlert] = useState({ status: false, type: 'info', message: '' });

    const navigate = useNavigate();

    //* Set the wallet address to the state
    const updateCurrentWalletAddress = async () => {
        const account = await window.ethereum.request({ method: 'eth_requestAccounts' });

        if(account) setWalletAddress(account[0]);
    };

    useEffect(() => {
        updateCurrentWalletAddress();

        window.ethereum.on('accountsChanged', updateCurrentWalletAddress);
    }, []);

    //* Set the smart contract the provider to the state
    useEffect(() => {
        const setSmartContractAndProvider = async () => {
           const web3Modal = new Web3Modal();
           const connection = await web3Modal.connect();
           const newProvider = new ethers.providers.Web3Provider(connection);
           const signer = newProvider.getSigner();
           const newContract = new ethers.Contract(ADDRESS, ABI, signer);
            
           setProvider(newProvider);
           setContract(newContract);
        }

        const timer = setTimeout(() => setSmartContractAndProvider(), [1000]);
        //setSmartContractAndProvider();

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if(contract){
            createEventListeners({
                navigate, contract, provider, 
                walletAddress, setShowAlert
            })
        }
    }, [contract]);

    useEffect(() => {
        if(showAlert?.status) {
            const timer = setTimeout(() => {
                setShowAlert({ status: false, type: 'info', message: '' })
            }, [5000])

            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    return (
        <GlobalContext.Provider value ={{
            contract, walletAddress,
            showAlert, setShowAlert
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext);