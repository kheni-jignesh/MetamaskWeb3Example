import { useContext } from "react";

import Navbar from "./components/views/Navbar";
import AssetsPage from "./components/views/AssetsPage";

import MetamaskContext from "./context/metamask";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// css
import './css/style.css';
// page
import Home from './page/Home';
import UsersProfilesDetails from './page/UsersProfilesDetails';
import MyItems from './page/MyItems';
import CreateMyItems from './page/CreateMyItems';
import Explorer from './page/Explorer';
import Auctions from './page/Auctions';
import Single_item from './page/Single_item';
import Create from './page/Create';
import Create_profile from './page/Create_profile';
import Edit_profile from './page/Edit_profile';
import Search from './page/Search';
function App() {
  const metamaskContext = useContext(MetamaskContext);

  return (
    <>
      {/* <Navbar />
      {
        metamaskContext.isMetamaskConnected
          ? (
            <AssetsPage />
          )
          : (
            <div />
          )
      } */}
       <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={UsersProfilesDetails} />
          <Route exact path="/my-items" component={MyItems} />
          <Route exact path="/create-my-items" component={CreateMyItems} />
          <Route exact path="/explorer" component={Explorer} />
          <Route exact path="/auctions" component={Auctions} />
          <Route exact path="/single_item" component={Single_item} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/create_profile" component={Create_profile} />
          <Route exact path="/edit_profile" component={Edit_profile} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
