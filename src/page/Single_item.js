import React, { useEffect, useState } from 'react';
import singleitemA from '../images/single item.png';
import Heart from '../images/Heart Vector.png';
import dots from '../images/dots.png';
import verify from '../images/verify.png';
import user1 from '../images/user1.png';
import user2 from '../images/user2.png';
import user3 from '../images/user3.png';
import user4 from '../images/user4.png';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios'
import MyItems from './MyItems';
function Single_item(props) {
    const [accountId, setAccountId] = useState(1)
    const [assetId, setassetId] = useState(props.location && props.location.state.assetId)
    const [auctionId, setauctionId] = useState(props.location && props.location.state.auctionId)
    const [singleItem, setSingleItem] = useState('')
    const [singleBid, setSingleBid] = useState('')
    const [singleHighestBid, setSingleHighestBid] = useState('')

    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    const singleItemData = () => {
        let data = {
            assetId: assetId,
            accountUserId: accountId
        }
        console.log(data,"hjhxjchxjchxjch")
        console.log(data)
        axios.post(process.env.REACT_APP_URL + "getAssetById", data)
            .then(res => {
                setSingleItem(res.data.response)
            })

    }
    const getBidData = () => {
        let data = {
            auctionId: assetId,
        }
        console.log(data)
        axios.post(process.env.REACT_APP_URL + "getAllBidsOfAuction", data)
            .then(res => {
                setSingleBid(res.data.response)
            })
        axios.post(process.env.REACT_APP_URL + "getTopBidOfAuction", data)
            .then(res => {
                setSingleHighestBid(res.data.response)
            })
    }
    useEffect(() => {
        singleItemData()
        getBidData()
    }, [props.location])

    const singleItemPlaceBid = () => {

    }

    console.log(singleItem,"hzxgchzgchzcghzxch  ")

    return (
        <>
            <Header />
            <section className="single-item pt-5 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 s-profile-pic">
                            <img className="img-fluid single-item-image imagesColorBg" src={singleItem.previewLink} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 s-profile-details">
                            <nav className="navbar navbar-expand-md navbar-light bg-white p-0">
                                <h2>{singleItem.title} <img src={verify} /></h2>
                                <div className="navbar-collapse justify-content-end">
                                    <div className="navbar-nav">
                                        <Link to="" className="btn d-flex align-items-center like-btn">
                                            <img className="img-fluid" src={Heart} /> {singleItem.likeCount}</Link>
                                        <div className="nav-item dropdown">
                                            <div className="nav-link" data-toggle="dropdown"><img src={dots} /></div>
                                            <div className="dropdown-menu">
                                                <Link to="#" className="dropdown-item">Share</Link>
                                                <Link to="#" className="dropdown-item">View on Avascan</Link>
                                                {
                                                    singleItem.isReported == 0 ?
                                                        <Link to="#" className="dropdown-item">Report</Link>
                                                        :
                                                        ''
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="d-flex justify-content-start align-items-center user-btn">
                                <Link className="btn btn2" to="#">Digital Art</Link>
                                <Link className="btn btn2" to="#">Collectibles</Link>
                            </div>
                            <div className="row user-description">
                                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 mt-2 mb-4">
                                    <p className="mb-n3"><strong>Item Description</strong></p>
                                    <p> </p>
                                    <p>{singleItem.description}</p>
                                    <p> </p>
                                </div>
                            </div>
                            <div className="row card-profile card-price mb-5">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <p>Creator</p>
                                    <p className="single-itme-name">{singleItem.creatorUserName}</p>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <p>Owner</p>
                                    <p className="single-itme-name">{singleItem.ownerUserName}</p>
                                </div>
                            </div>
                            <div className="row user-description">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-4">
                                    <p className="mb-n3"><strong>Closing time</strong></p>
                                    <p></p>  <p>2 hours and 32 min. left</p> <p></p>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-4">
                                    <p className="mb-n3"><strong>Current Bid ({singleItem.totalBidCount})</strong></p>
                                    <p></p>  <p><strong>{singleHighestBid.userName}</strong> ${singleHighestBid.bidAmount}</p> <p></p>
                                </div>
                            </div>
                            <button className="btn btn1 w-100" to="#" onClick={() => singleItemPlaceBid()}>Place a bid</button>
                            <div className="row user-post mt-5">
                                <div className="tab col-sm-12 mb-4">
                                    <button className="tablinks active" onClick={(event) => openCity(event, 'Bids')}>Bids</button>
                                    <button className="tablinks" onClick={(event) => openCity(event, 'History')}>History</button>
                                    <button className="tablinks" onClick={(event) => openCity(event, 'Details')}>Details</button>
                                </div>
                                <div id="Bids" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 tabcontent" style={{ display: "block" }}>
                                    <ul>
                                        {
                                            singleBid && singleBid.map((item, index) => (
                                                <li key={index}><img className="bid-user-img" src={item.previewLink == null ? user1 : item.previewLink} /> <b>{item.userName}</b> ${item.bidAmount} <b>by</b> {item.walletAddress} <span>6/05/2021, 1:03 AM</span></li>
                                            ))
                                        }


                                    </ul >
                                </div>
                                <div id="History" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 tabcontent" style={{ display: "none" }}>
                                    <ul>
                                        <li><img src={user1} /> <b>14.04 AVAX</b> $190,58 <b>by</b> @Dale Wuckert <span>3/05/2021, 7:12 AM</span></li>
                                        <li><img src={user4} /> <b>20.04 AVAX</b> $280,21 <b>by</b> 0xc1395aa539...7de8 <span>6/05/2021, 1:03 AM</span></li>
                                        <li><img src={user3} /> <b>10.04 AVAX</b> $140,32 <b>by</b> @Harrison <span>3/05/2021, 6:01 AM</span></li>
                                        <li><img src={user2} /> <b>5.01 AVAX</b> $75,00 <b>by</b> 0xr503s9b4a3...5yp3 <span>1/05/2021, 7:38 PM</span></li>
                                    </ul >
                                </div>
                                <div id="Details" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 tabcontent" style={{ display: "none" }}>
                                    <ul>
                                        <li><img src={user1} /> <b>20.04 AVAX</b> $280,21 <b>by</b> 0xc1395aa539...7de8 <span>6/05/2021, 1:03 AM</span></li>
                                        <li><img src={user2} /> <b>10.04 AVAX</b> $140,32 <b>by</b> @Harrison <span>3/05/2021, 6:01 AM</span></li>
                                        <li><img src={user3} /> <b>14.04 AVAX</b> $190,58 <b>by</b> @Dale Wuckert <span>3/05/2021, 7:12 AM</span></li>
                                        <li><img src={user4} /> <b>5.01 AVAX</b> $75,00 <b>by</b> 0xr503s9b4a3...5yp3 <span>1/05/2021, 7:38 PM</span></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Single_item
