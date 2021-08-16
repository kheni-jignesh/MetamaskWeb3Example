import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// img
import bannerbg from '../images/color-img.jpg';
import { getHeroAuction } from '../redux/actions';
import { connect } from 'react-redux'
const Banner = (props) => {
    const { response } = props;
    useEffect(() => {
        props.getHeroAuction()
    }, [])

    return (
        <>
            <section className="banner pt-5 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 b-content">
                            <h1>Discover, collect <br /> and sell NFTs</h1>
                            <p>Everything you need is here, are you ready to dive into the new decentralized world of NFTs?</p>
                            <Link className="btn btn1" to="/explorer">Start Explore</Link>
                            <Link className="btn btn2" to="#">Become a creator</Link>
                        </div>
                        <Link to={{ pathname: "/single_item", state: { assetId: response && response.assetId, auctionId: response && response.auctionId } }} className="col-lg-6 col-md-6 col-sm-12 col-xs-12 b-img">
                            <div className="b-card card-banner">
                                <img className="img-fluid" src={response && response.previewLink != null ? response.previewLink : bannerbg} alt="banner-img" />
                                <div className="row card-outer">
                                    <div className="col-6 card-title">
                                        <p>{response && response.title && response.title} <span>Edition {response && response.numberOfCopies} of 1</span></p>
                                    </div>
                                    <div className="col-6 d-flex align-items-center justify-content-end">
                                        <div className="card-price"><p><span>Current bid</span>{`$${response && response.price}`}</p></div>
                                        <div className="card-btn"><Link className="btn btn2" to="#">Place a bid</Link></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}



const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, { getHeroAuction })(Banner)
