import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// images
import NextIcon from '../images/next-icon.png';
import Profile from '../images/profile.png';
import Hashmask from '../images/Hashmask_15753 22.png';
import { connect } from 'react-redux';
import { getTopItems } from '../redux/actions'

const ArtworksLatest = (props) => {
    const { topArtworks } = props;
    useEffect(() => {
        props.getTopItems()
    }, [])

    return (
        <>
            <section className="latest-artworks pt-5 pb-4">
                <div className="container">
                    <div className="row m-0 mb-3">
                        <div className="col-9 p-0 d-flex align-items-center justify-content-start">
                            <h1 className="main-title">Latest Artworks</h1>
                        </div>
                        <div className="col-3 p-0 d-flex align-items-center justify-content-end"><Link to="#"
                            className="see-all d-flex align-items-center" >See all <img alt="" src={NextIcon} /></Link></div>
                    </div>
                    <div className="row">
                        {
                            topArtworks && topArtworks.response && topArtworks.response.map((item, index) => (
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                                    <div className="card-box">
                                        <p className="publish-time">10h 49m <span>left</span></p>
                                        <div className="row"><img alt="" className="img-fluid mt-n3 imagesColorBg" src={item.previewLink} />
                                        </div>
                                        <div className="row m-0">
                                            <div className="col-12 card-title mt-3">
                                                <p>{item.title} <span>{item.type} Edition</span></p>
                                            </div>
                                        </div>
                                        <div className="row m-0">
                                            <div className="col-12 card-profile card-price  d-flex align-items-center">
                                                <img alt="" className="imagesColorBg" src={item.ownerLogoImage} />
                                                <p>{item.ownerUserName}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row m-0 d-flex align-items-center">
                                            <div className="col-6 card-price">
                                                <p><span>Starting from</span> ${item.price}</p>
                                            </div>
                                            {
                                                item.type == "fixed" &&
                                                <div className="col-6 card-btn">
                                                    <Link className="btn btn2" to="/auctions">Buy now</Link>
                                                </div>
                                            }

                                        </div>
                                    </div>
                                </div>

                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, { getTopItems })(ArtworksLatest)

