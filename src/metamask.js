import React, { useState } from 'react';
import Web3 from 'web3';

import * as mockDB from "./mock/mockUserIdDatabase";

const prefNetwork = { id: 4, name: "Rinkeby" };

const checkDbForUserId = (userAddress) => {
    if (mockDB.checkUserAddress(userAddress)) {
        return mockDB.getExistingId(userAddress);
    }

    return mockDB.getNewUserId(userAddress);
}


const MetamaskContext = React.createContext();

/**
 * @param {{ children: any }} props 
 * @returns {React.Context<any>.Provider<any>} Metamask Provider
 * 
 * @dev React application must be wrapped between MetamaskProvider
 */
function MetamaskProvider(props) {
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState("");
    const [userId, setUserId] = useState("");
    const [isMetamaskConnected, setMetamaskConnected] = useState(false);
    let accounts = "";
    let _balance = "";
    let web3;

    async function connect() {
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            try {
                window.ethereum.enable().then(async function () {
                    // User has allowed account access to DApp...
                    const networkId = await web3.eth.net.getId();
                    if (networkId !== prefNetwork.id) {
                        alert('Only available on ' + prefNetwork.name);
                        return;
                    } else {
                        // Everything OK
                        accounts = await web3.eth.getAccounts();
                        setAccount(accounts[0]);
                        _balance = web3.utils.toWei(String(await web3.eth.getBalance(accounts[0])), "wei");

                        setUserId(checkDbForUserId(accounts[0]));

                        setBalance(_balance);
                        setMetamaskConnected(true);
                    }

                });
            } catch (e) {
                // User has denied account access to DApp...
                alert('Please confirm your wallet from MetaMask');
            }
        }
        // Legacy DApp Browsers
        else if (window.web3) {
            web3 = new Web3(window.web3.currentProvider);
        }
        // Non-DApp Browsers
        else {
            alert('You have to install MetaMask !');
        }
    }

    return (
        <MetamaskContext.Provider value={{ account, balance, userId, isMetamaskConnected, connect }}>
            {props.children}
        </MetamaskContext.Provider>
    )
}

export default MetamaskContext;
export { MetamaskProvider };