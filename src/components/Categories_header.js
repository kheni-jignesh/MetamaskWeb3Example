import React from 'react'
import { Link } from 'react-router-dom'

function Categories_header() {

    return (
        <>
              {/* Categories Header  */}
              <section className="cat-header">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light bg-white p-0">
                        <button className="navbar-toggler navbar-toggler-left x collapsed" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-2 animated fadeInDown"><Link to="#" className="nav-item nav-link">All</Link></li>
                                <li className="nav-item mx-2 animated fadeInDown"><Link to="#" className="nav-item nav-link">Art</Link></li>
                                <li className="nav-item mx-2 animated fadeInDown"><Link to="#" className="nav-item nav-link">Virtual Worlds</Link></li>
                                <li className="nav-item mx-2 animated fadeInDown"><Link to="#" className="nav-item nav-link">Trading Cards</Link></li>
                                <li className="nav-item mx-2 animated fadeInDown"><Link to="#" className="nav-item nav-link">Collectibles</Link></li>
                                <li className="nav-item mx-2 animated fadeInDown"><Link to="#" className="nav-item nav-link">Sports</Link></li>
                                <li className="nav-item mx-2 animated fadeInDown"><Link to="#" className="nav-item nav-link">Utility</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Categories_header

