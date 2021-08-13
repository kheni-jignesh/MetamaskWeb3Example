import { useContext } from "react";
import { fmtBalance } from "../../utils/web3Utils";

import MetamaskContext from "../../context/metamask";

export default function Navbar() {
    const metamaskContext = useContext(MetamaskContext);

    const connectToMetamask = async () => {
        console.log("[DEBUG]", "Connecting to Metamask");
        await metamaskContext.connect();
    }

    /** @type {import("react").CSSProperties} navStyle */
    const navStyle = {
        padding: "10px",
        fontSize: "1.2em",
        fontWeight: "600"
    };

    return (
        <nav style={navStyle}>
            {
                metamaskContext.isMetamaskConnected
                    ?
                    <span>
                        UserID: {metamaskContext.user.userId} - Balance: {fmtBalance(metamaskContext.balance)}
                    </span>
                    :
                    <button onClick={connectToMetamask}>
                        Connect To Metamask (Rinkeby)
                    </button>
            }
        </nav>
    );
}