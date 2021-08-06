import React, { useState } from 'react';
import Web3 from 'web3';

import {
    addUser, getUserById, getUserByWalletAddress
} from "../controllers/userController";

const prefNetwork = { id: 4, name: "Rinkeby" };

/**
 * @param {string} walletAddress 
 * @returns userDetails
 */
const checkDbForUser = async (walletAddress) => {
    let userId;

    const userCheckQuery = await getUserByWalletAddress(walletAddress);
    console.log("[DEBUG]", "userCheckResult", userCheckQuery);

    if (userCheckQuery.status === 200) {

        userId = userCheckQuery.data;
    }
    else {
        // Add user
        const addUserQuery = await addUser(walletAddress);

        if (addUserQuery.status === 200) {
            // Check DB Again
            userId = await getUserByWalletAddress(walletAddress).data.userId;
            console.log("[DEBUG]", "userId", userId);
        }
        else {
            console.log("[ERROR] addUser() didn't work");
        }
    }

    return (await getUserById(userId)).data;
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
    const [user, setUser] = useState("");
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

                        const dbUser = await checkDbForUser(accounts[0]);
                        console.log("user", dbUser);

                        setUser(dbUser);

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
        <MetamaskContext.Provider value={{ account, balance, user, isMetamaskConnected, connect }}>
            {props.children}
        </MetamaskContext.Provider>
    )
}

export default MetamaskContext;
export { MetamaskProvider };