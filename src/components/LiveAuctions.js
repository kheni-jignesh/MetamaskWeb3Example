import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// img
import Nexticon from '../images/next-icon.png';
import Hashmask from '../images/Hashmask_15753 22.png';
import { getTopAuctions } from '../redux/actions';
import { connect } from 'react-redux';
import moment from 'moment';

const LiveAuctions = (props) => {
    const { liveAuctions } = props
    useEffect(() => {
        props.getTopAuctions();
    }, [])

    return (
        <>
            <section className="live-auctions pt-5 pb-4">
                <div className="container">
                    <div className="row m-0 mb-3">
                        <div className="col-9 p-0 d-flex align-items-center justify-content-start">
                            <h1 className="main-title">Live Auctions</h1>
                        </div>
                        <div className="col-3 p-0 d-flex align-items-center justify-content-end"><Link to="/auctions"
                            className="see-all d-flex align-items-center">See all <img alt="" src={Nexticon} /></Link></div>
                    </div>
                    <div className="row">
                        {
                            liveAuctions && liveAuctions.response && liveAuctions.response.map((item, index) => (
                                <Link to={{ pathname: "/single_item", state: { assetId:  item.assetId, auctionId:  item.auctionId } }} className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                                    <div className="card-box">
                                        <p className="publish-time">
                                            {moment.utc(moment(item.endTime).diff(moment(item.startTime))).format("HH") + "h " + moment.utc(moment(item.endTime).diff(moment(item.startTime))).format("mm") + "m "}
                                            <span>left</span>
                                        </p>
                                        <div className="row commonimages">
                                            <img alt="" className="img-fluid mt-n3 imagesColorBg" src={ item.previewLink } />
                                        </div>
                                        <div className="row m-0">
                                            <div className="col-12 card-title mt-3">
                                                <p>{item.title} <span>{`${item.assetType} Edition`}</span></p>
                                            </div>
                                        </div>
                                        <div className="row m-0">
                                            <div className="col-12 card-profile card-price  d-flex align-items-center">
                                                <img alt="" className="imagesColorBg" src={item.userLogoImage} />
                                                <p>{item.userName}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row m-0 d-flex align-items-center">
                                            <div className="col-6 card-price">
                                                <p><span>Current bid</span> ${item.currentBid}</p>
                                            </div>
                                            <div className="col-6 card-btn">
                                                <Link className="btn btn2" to="/auctions">Place a bid</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
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

export default connect(mapStateToProps, { getTopAuctions })(LiveAuctions)