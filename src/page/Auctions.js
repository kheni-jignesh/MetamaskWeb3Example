import React, { useEffect, useState } from 'react'
import Categories_header from '../components/Categories_header'
import Hashmask1 from '../images/Hashmask_15753 22.png';
import Hashmask2 from '../images/Hashmask_15753 24.png';
import Hashmask3 from '../images/Hashmask_15753 22.png';
import Hashmask4 from '../images/Hashmask_15753 23.png';
import Hashmask5 from '../images/Hashmask_15753 25.png';
import { Link } from 'react-router-dom';
import profile from '../images/profile.png';
import Header from '../components/Header';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import { getLiveAuctions, getallcategories } from '../redux/actions';
import { connect } from 'react-redux';
import axios from 'axios'
import moment from 'moment';

var $ = require("jquery");

const Auctions = (props) => {


    let categorydata = props.allcategoryexplorer
    const [catid, setcatid] = useState(null)
    const [sortnum, setsortnum] = useState(1)
    const [verified, setverified] = useState(1)
    const [alldata, setalldata] = useState([])

    useEffect(() => {
        // setalldata(props.getAuctionsdata)
         mydata(verified)
    }, [props.getAuctionsdata])

    useEffect(() => {
        props.getallcategories()
        props.getLiveAuctions()
    }, [])

    const categoryHandler = (evt,id) => {
        setcatid(id)

        let data =
        {
            sortMethod: sortnum,
            isVerified: verified,
            categoryId: id
        }

        axios.post(process.env.REACT_APP_URL + "getLiveAuctionAssets", data)
            .then(re => {
                setalldata(re.data)
            })
            var i, tablinks;

            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active2", "");
            }
    
            evt.currentTarget.className += " active2";
    }
    const auctionHandler = num => {

        setsortnum(num)

        let data =
        {
            sortMethod: num,
            isVerified: verified,
            categoryId: catid
        }
     

        axios.post(process.env.REACT_APP_URL + "getLiveAuctionAssets", data)
            .then(re => {
                setalldata(re.data)
            })
    }

    function mydata(verifie) {
   
        let data =
        {
            sortMethod: sortnum,
            isVerified: verifie,
            categoryId: catid
        }
       
        axios.post(process.env.REACT_APP_URL + "getLiveAuctionAssets", data)
        .then(re => {
            setalldata(re.data)
        })
    }
    const verifiedHandler = (e) => {

        if (e.target.checked) {
            console.log("on")
            setverified(1)
            mydata(1)
        }
        else {
            console.log("offf")
            setverified(0)
            mydata(0)
        }
        
    }
    return (
        <>
            <Header />
            <div className="myexplorer category">
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
                                    {
                                        categorydata && categorydata.response && categorydata.response.map((item,i) => (
                                            <li className="nav-item mx-2 animated fadeInDown tablinks " onClick={(event) => categoryHandler(event,item.categoryId)} key={i}><Link className="nav-item nav-link">{item.name}</Link></li>
                                        ))
                                    }


                                </ul>
                            </div>
                        </nav>
                    </div>
                </section>

                <section className="live-auctions pt-5 pb-4">
                    <div className="container">
                        <h2><b>Live Auctions</b></h2>
                        <div className="row m-0 mb-3">

                            <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12 p-0 d-flex align-items-center justify-content-end">
                                <div className="filter dropdown">
                                    <div className="select">
                                        <span>Recently added</span>
                                        <i className="fa fa-chevron-down"></i>
                                    </div>
                                    <input type="hidden" name="filter" />
                                    <ul className="dropdown-menu">
                                        <li id="" onClick={() => auctionHandler(1)} >Recently added</li>

                                        <li id="" onClick={() => auctionHandler(2)}>Most liked</li>
                                        <div className="justify-content-between">Verified only
                                            <label className="switch">
                                                <input type="checkbox" defaultChecked onChange={(e) => verifiedHandler(e)} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row mb-3">
                                {
                                    alldata && alldata.response && alldata.response.map((item,i) => (
                                        <Link to={{ pathname: "/single_item", state: { assetId: item.assetId,auctionId: item.auctionId } }} className="col-lg-3 col-md-6 col-sm-6 col-xs-12 pt-3" key={i}>
                                            <div className="card-box">
                                                <p className="publish-time">{moment.utc(moment(item.auctionEndTime).diff(moment(item.auctionStartTime))).format("HH") + "h " + moment.utc(moment(item.auctionEndTime).diff(moment(item.auctionStartTime))).format("mm") + "m "}<span>left</span></p>
                                                <div className="row">

                                                    <img className="img-fluid mt-n3 imagesColorBg" src={item.previewLink} />

                                                </div>
                                                <div className="row m-0">
                                                    <div className="col-12 card-title mt-3" >
                                                        <p>{item.title}<span>{item.type} Edition</span></p>
                                                    </div>
                                                </div>
                                                <div className="row m-0">
                                                    <div className="col-12 card-profile card-price  d-flex align-items-center">
                                                        <img src={item.ownerLogoImage == null ? profile : item.ownerLogoImage} /><p>{item.ownerUserName}</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row m-0 d-flex align-items-center">
                                                    <div className="col-6 card-price">
                                                        <p><span>Current bid</span> ${item.currentBid}</p>
                                                    </div>
                                                    <div className="col-6 card-btn">
                                                        <Link className="btn btn2">Place a bid</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </Link>
                                    ))
                                }


                            </div>
                        </div>




                        <div className="row m-0 pt-5 pb-5 d-flex justify-content-center"><Link className="btn btn1 w-50" to="/explorer">Start Explore</Link></div>

                    </div>
                </section>
            </div>
            <Testimonial />
            <Footer />




        </>
    )
}




const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { getallcategories, getLiveAuctions })(Auctions)


