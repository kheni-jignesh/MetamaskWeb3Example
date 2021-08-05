import { useContext } from "react";

import Navbar from "./components/views/Navbar";
import AddAsset from "./components/views/AddAsset";

import MetamaskContext from "./context/metamask";

function App() {
  const metamaskContext = useContext(MetamaskContext);

  return (
    <div>
      <Navbar />
      {
        metamaskContext.isMetamaskConnected
          ? (
            <AddAsset />
          )
          : (
            <div />
          )
      }
    </div>
  );
}

export default App;
