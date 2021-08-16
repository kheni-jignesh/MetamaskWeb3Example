import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// img
import MetamaskLogo from '../images/metamask-logo 1.png';
import Dots from '../images/dots.png';
import Logo from '../images/logo-header.png';
import social1 from '../images/social1.png';
import social2 from '../images/social2.png';
import social3 from '../images/social3.png';
import social4 from '../images/social4.png';
import MetamaskContext from "../context/metamask";
import AssetsPage from "./views/AssetsPage";
import Navbar from "./views/Navbar";


const Header = () => {
    const metamaskContext = useContext(MetamaskContext);
    return (
        <>
            <section className="header">
                <header className="main-header">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light bg-white p-0">
                            <Link to="/" className="navbar-brand"><img alt="" src={Logo} /></Link>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <label htmlFor="check">
                                    <input type="checkbox" id="check" />
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </label>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <form className="form-inline h-left">
                                    <div className="input-group">
                                        <div className="input-group-append">
                                            <button type="button" className="btn"><i className="fa fa-search"></i></button>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Search by creator or collectible" />
                                    </div>
                                </form>
                                <div className="navbar-nav h-right">
                                    <div className="navbar-nav h-middle">
                                        <Link to="/explorer" className="nav-item nav-link">Explore</Link>
                                        <Link to="/auctions" className="nav-item nav-link">Auctions</Link>
                                        <Link to="/my-items" className="nav-item nav-link">My items</Link>
                                        <Link to="/create-my-items" className="nav-item nav-link">Create</Link>
                                    </div>
                                    <Navbar />
                                    {
                                        metamaskContext.isMetamaskConnected
                                            ? (
                                                <AssetsPage />
                                            )
                                            : (
                                                <div />
                                            )
                                    }
                                    <div className="h-center">32 AVAX <span>0x9b07...f6EA <img alt="" src={MetamaskLogo} /></span></div>
                                    <div className="nav-item dropdown">
                                        <Link to="#" className="nav-link" data-toggle="dropdown"><img alt="" src={Dots} /></Link>
                                        <div className="dropdown-menu">
                                            <Link to="#" className="dropdown-item">Help Center</Link>
                                            <Link to="#" className="dropdown-item">Blog</Link>
                                            <Link to="#" className="dropdown-item">FAQ</Link>
                                            <Link to="#" className="dropdown-item">Subscribe</Link>
                                            <div className="dropdown-menu d-flex justify-content-between f-social">
                                                <Link to="#" className="nav-link"><img alt="" src={social1} /></Link>
                                                <Link to="#" className="nav-link"><img alt="" src={social2} /></Link>
                                                <Link to="#" className="nav-link"><img alt="" src={social3} /></Link>
                                                <Link to="#" className="nav-link"><img alt="" src={social4} /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </section>

        </>
    )
}

export default Header
