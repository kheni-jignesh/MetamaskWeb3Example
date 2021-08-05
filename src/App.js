import { useContext } from "react";

import Navbar from "./components/views/Navbar";
import AssetsPage from "./components/views/AssetsPage";

import MetamaskContext from "./context/metamask";

function App() {
  const metamaskContext = useContext(MetamaskContext);

  return (
    <div>
      <Navbar />
      {
        metamaskContext.isMetamaskConnected
          ? (
            <AssetsPage />
          )
          : (
            <AssetsPage />
          )
      }
    </div>
  );
}

export default App;
