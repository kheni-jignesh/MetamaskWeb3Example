import React from 'react';
// images
import Social1 from '../images/social1.png';
import Social2 from '../images/social2.png';
import Social3 from '../images/social3.png';
import Social4 from '../images/social4.png';
import FooterLogo from '../images/logo-footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className="footer">
                <footer>
                    <div className="container">
                        <div className="row m-0 d-flex justify-content-between">
                            <Link to="/" className="navbar-brand"><img src={FooterLogo} alt="" /></Link>
                            <div className="row d-flex align-items-center f-menu">
                                <Link to="#" className="nav-link">Blog</Link>
                                <Link to="#" className="nav-link">About</Link>
                                <Link to="#" className="nav-link">FAQ</Link>
                                <Link to="#" className="nav-link">Privacy</Link>
                                <Link to="#" className="nav-link">Terms of Use</Link>
                                <Link to="#" className="nav-link">Help Center</Link>
                            </div>
                            <div className="row d-flex align-items-center f-social">
                                <Link to="#" className="nav-link"><img src={Social1} alt="" /></Link>
                                <Link to="#" className="nav-link"><img src={Social2} alt="" /></Link>
                                <Link to="#" className="nav-link"><img src={Social3} alt="" /></Link>
                                <Link to="#" className="nav-link"><img src={Social4} alt="" /></Link>
                            </div>
                        </div>
                        <div className="row m-0 mt-4 d-flex justify-content-center copyright">
                            <p>© NFTPrime All rights reserved. 2021</p>
                        </div>

                    </div>
                </footer>
            </section>
        </>
    )
}

export default Footer
