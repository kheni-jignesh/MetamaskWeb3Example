import Web3 from "web3";

export const fmtAddress = (acc) => acc.slice(0, 7) + "...";

export const fmtBalance = (balance) => Web3.utils.fromWei(balance, "ether").slice(0, 5) + " ETH"