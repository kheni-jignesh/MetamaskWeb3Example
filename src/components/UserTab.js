import React, { useEffect, useState } from 'react';
import Profile from '../images/profile.png';
import { postCreatedByUser, getItemOnSaleAssetsOfUser, getItemSoldAssetsOfUser } from '../redux/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import "../css/item.css"

const UserTab = (props) => {
    const [filterDataItem, setFilterDataItem] = useState()
    const [sort, setsort] = useState(1)
    const [verified, setverified] = useState(1)
    const [city, setcity] = useState('create')
   
   
    useEffect(() => {
        alldata()
    }, [city,sort,verified])

    function alldata() {
        if (city == 'create') {
         
            created()
        }
        else if (city === "onsale") {
            sale()
        }
        else if (city === "sold") {
            sold()
        }
    }


    function openCity(evt, cityName) {
        setcity(cityName)
        var i, tablinks;

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        evt.currentTarget.className += " active";
    }


    const userMenuHandler = (name, num) => {
       
        setsort(num)
       
    }
    const verifiedHandler = (e)=>{
        if (e.target.checked) {
    
            setverified(1)
           
        }
        else {

            setverified(0)
            

        }
    }

    function created() {
       
        let data = {
            userId: 1,
            accountUserId: 1,
            isVerified: verified,
            sortMethod: sort
        }
        
        axios.post(process.env.REACT_APP_URL + "getAllAssetsCreatedByUser", data)
            .then(re => {
                setFilterDataItem(re.data)

            })
    }
    function sale() {
       
        let data = {
            userId: 1,
            accountUserId: 1,
            isVerified: verified,
            sortMethod: sort
        }

        axios.post(process.env.REACT_APP_URL + "getOnSaleAssetsOfUser", data)
            .then(re => {
              
                setFilterDataItem(re.data)

            })
    }


    function sold() {
     
        let data = {
            userId: 1,
            accountUserId: 1,
            isVerified: verified,
            sortMethod: sort
        }

        axios.post(process.env.REACT_APP_URL + "getSoldAssetsOfUser", data)
            .then(re => {
               
                setFilterDataItem(re.data)

            })
    }


    return (
        <>
            <div className="explorer myItem-section">
                <section className="live-auctions pt-5 pb-4">
                    <div className="container">
                        <h2>Search results for Earth</h2>

                        <div className="row m-0 mb-3">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 p-0 d-flex align-items-center justify-content-start">
                                <div className="tab">
                                    <button className="tablinks active" onClick={(event) => openCity(event, 'create')}>Created</button>
                                    <button className="tablinks" onClick={(event) => openCity(event, 'onsale')}>On Sale</button>
                                    <button className="tablinks" onClick={(event) => openCity(event, 'sold')}>Sold</button>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 p-0 d-flex align-items-center justify-content-end">
                                <div className="filter dropdown">
                                    <div className="select">
                                        <span>Recently added</span>
                                        <i className="fa fa-chevron-down"></i>
                                    </div>
                                    <input type="hidden" name="filter" />
                                    <ul className="dropdown-menu">
                                        <li id="" className="sec" value="Recently added" onClick={() => userMenuHandler("Recently added", 1)}>Recently added</li>

                                        <li id="" className="sec" value="Most liked" onClick={() => userMenuHandler("Most liked", 2)}>Most liked</li>
                                        <div className="justify-content-between">Verified only
                                            <label className="switch">
                                                <input type="checkbox" defaultChecked onChange={(e) => verifiedHandler(e)}/>
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tabcontent" style={{ display: "block" }}>
                            <div className="row">
                                {
                                    filterDataItem && filterDataItem.response && filterDataItem.response.map((item, i) => (
                                        <>
                                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 pt-5" key={i}>
                                                <div className="card-box">

                                                    <p className="publish-time">10h 49m <span>left</span></p>
                                                    <div className="row">
                                                        <img alt="" className="img-fluid mt-n3 imagesColorBg" src={item.previewLink} />
                                                    </div>
                                                    <div className="row m-0">
                                                        <div className="col-12 card-title mt-3">
                                                            <p>{item.title}<span>Single Edition</span></p>
                                                        </div>
                                                    </div>
                                                    <div className="row m-0">
                                                        <div className="col-12 card-profile card-price  d-flex align-items-center ">
                                                            <img alt="" src={Profile} className="creatorimg imagesColorBg" /><p>{item.creatorUserName}</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row m-0 d-flex align-items-center">
                                                        <div className="col-6 card-price">
                                                            <p><span>Current bid</span> $1580</p>
                                                        </div>
                                                        <div className="col-6 card-btn">
                                                            <div className="btn btn2" >Place a bid</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </section>

                {/* <!-- Get the latest updates --> */}
                <section className="d-flex justify-content-center align-items-center latest-bg-banner">
                    <div className="container">
                        <div className="row m-0">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
                                <h1 className="main-title">Get the latest updates</h1>
                                <p>Join our mailing list to stay in the loop with our newest feature releases.</p>
                                <form className="form-inline mt-5 d-flex justify-content-center">
                                    <div className="form-group mx-sm-3 mb-2">
                                        <input type="password" className="form-control" placeholder="Your e-mail" />
                                    </div>
                                    <button type="submit" className="btn btn1 mb-2">Sign up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )


}
const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, { postCreatedByUser, getItemOnSaleAssetsOfUser, getItemSoldAssetsOfUser })(UserTab)


