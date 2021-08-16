import React, { useEffect, useState } from 'react'
import Hashmask1 from '../images/Hashmask_15753 22.png'
import profile from '../images/profile.png'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import { getallcategories, getalluserexplorer, getallitemexplorer } from '../redux/actions'
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import axios from 'axios'
import moment from 'moment';
var $ = require("jquery");


let myarr = []

function Explorer(props) {


    useEffect(() => {
        props.getallcategories()
        props.getalluserexplorer()
        props.getallitemexplorer()
    }, [])

    const [cat, setcat] = useState(props.location.state && props.location.state.categoriesitem ? 'categories' : props.location.state && props.location.state.creators ? "user" : 'items')
    const [alldata, setalldata] = useState()
    const [alluser, setalluser] = useState()
    const [allcategory, setallcategory] = useState()
    const [itemMenu, setitemMenu] = useState("recently added")
    const [userMenu, setuserMenu] = useState("recently added")
    let categorydata = props.state.allcategoryexplorer
    const [catid, setcatid] = useState(null)
    const [userid, setuserid] = useState(1)
    const [itemnum, setitemnum] = useState(1)
    const [usernum, setusernum] = useState(1)
    const [Itemverified, setItemverified] = useState(1)

    const [Userverified, setUserverified] = useState(1)

    const typeHandler = item => {
        setcat(item)
    }
    useEffect(() => {

        if (cat == "items") {

            // setalldata(props.state.allitemexplorer)
            mydata(Itemverified)
        }
        else if (cat == "user") {
            userdata(Userverified)
            // setalluser(props.state.alluserexplorer)

        }
        else if (cat == "categories") {
            setallcategory(props.state.allcategoryexplorer)
        }

    }, [props.state, props.state.alluserexplorer, cat])


    // item
    // navcategoery
    const itemHandler = (evt,id) => {
        setcatid(id)

        let data = {
            sortMethod: itemnum,
            isVerified: Itemverified,
            categoryId: id,
            "userId": null,
        }

        axios.post(process.env.REACT_APP_URL + "GetAllAssetsSorted", data)
            .then(re => {
                setalldata(re.data)
            })
            var i, tablinks;

            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active1", "");
            }
    
            evt.currentTarget.className += " active1";
    }
    const itemMenuHandler = (name, num) => {

        setitemnum(num)
        setitemMenu(name)
        setuserMenu("recently added")
        let data = {
            sortMethod: num,
            isVerified: Itemverified,
            categoryId: catid,
            "userId": null,
        }

        axios.post(process.env.REACT_APP_URL + "GetAllAssetsSorted", data)
            .then(re => {

                setalldata(re.data)

            })
    }
    function mydata(verifie) {

        let data =
        {
            sortMethod: itemnum,
            isVerified: verifie,
            categoryId: catid,
            "userId": null,
        }

        axios.post(process.env.REACT_APP_URL + "GetAllAssetsSorted", data)
            .then(re => {

                setalldata(re.data)
            })
    }
    const ItemverifiedHandler = (e) => {

        if (e.target.checked) {
            console.log("on")
            setItemverified(1)
            mydata(1)
        }
        else {
            console.log("offf")
            setItemverified(0)
            mydata(0)
        }

    }

    // user


    const userMenuHandler = (name, num) => {
        setusernum(num)
        setuserMenu(name)
        setitemMenu("recently added")
        let data = {
            sortMethod: num,
            isVerified: Userverified,
            userId:userid,

        }

        axios.post(process.env.REACT_APP_URL + "GetAllUsersSorted", data)
            .then(re => {
             
                setalluser(re.data)

            })
    }

    const UserverifiedHandler = e => {
        if (e.target.checked) {
            console.log("on")
            setUserverified(1)
            userdata(1)
        }
        else {

            setUserverified(0)
            userdata(0)

        }
    }
    function userdata(verifie) {

        let data =
        {
            sortMethod: usernum,
            isVerified: verifie,
            userId: userid,
        }

        axios.post(process.env.REACT_APP_URL + "GetAllUsersSorted", data)
            .then(re => {
                setalluser(re.data)
                
            })
    }
// user follow
    const followCreators = (id) => {
        let data = {
            userId: 1,
            followingId: id
        }

        axios.post(process.env.REACT_APP_URL + "followUser", data)
            .then(res => {
                
                userdata(Userverified)
            })
    }

    const unfollowCreators = (id) => {
        let data = {
            userId: 1,
            followingId: id
        }
        axios.put(process.env.REACT_APP_URL + "unfollowUser", data)
            .then(res => {
                
                userdata(Userverified)
            })
    }
    return (
        <>
            <Header />

            <div className="myexplorer category">
                <div className="container">
                    <div className="row pt-3">

                        <div className="col-lg-2 col-md-12 col-sm-12">
                            <div className="filter dropdown">
                                <div className="select">
                                    <span>{cat}</span>
                                    <i className="fa fa-chevron-down"></i>
                                </div>
                                <input type="hidden" name="filter" />
                                <ul className="dropdown-menu">
                                    <li className="tablinks " value="items" onClick={() => typeHandler("items")}>Items</li>
                                    <li className="tablinks" value="user" onClick={() => typeHandler("user")} >Users</li>
                                    <li className="tablinks" value="categories" onClick={() => typeHandler("categories")}>Categories</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 text-center">
                            {
                                cat == 'items' ?



                                    <div className="explorer_menu">
                                        <ul>
                                            {

                                                categorydata && categorydata.response && categorydata.response.map((item, i) => (
                                                    <li className=" mx-2 animated fadeInDown nav-item nav-link tablinks "  onClick={(event) => itemHandler(event,item.categoryId)} key={i}>{item.name}</li>
                                                ))

                                            }
                                        </ul>
                                    </div>


                                    : ""
                            }
                        </div>
                        <div className="col-lg-2  col-md-12 col-sm-12 ">


                            {

                                cat == 'items' ?
                                    <div className="d-flex justify-content-end auctions-dropdown">

                                        <div className="filter dropdown ">
                                            <div className="select">
                                                <span>{itemMenu}</span>
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                            <input type="hidden" name="filter" />
                                            <ul className="dropdown-menu">
                                                <li id="" className="first" value="Recently added" onClick={() => itemMenuHandler("Recently added", 1)}>Recently added</li>

                                                <li id="" className="first" value="Most liked" onClick={() => itemMenuHandler("Most liked", 2)}>Most liked</li>
                                                <div className="justify-content-between">Verified only
                                                    <label className="switch">
                                                        <input type="checkbox" defaultChecked onChange={(e) => ItemverifiedHandler(e)} />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </ul>

                                        </div>
                                    </div>

                                    :
                                    cat == 'user' ?

                                        <div className="filter dropdown">
                                            <div className="select">
                                                <span>{userMenu}</span>
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                            <input type="hidden" name="filter" />
                                            <ul className="dropdown-menu">

                                                <li id="" className="sec" value="Recently added" onClick={() => userMenuHandler("Recently added", 1)}>Recently added</li>

                                                <li id="" className="sec" value="Most liked" onClick={() => userMenuHandler("Most liked", 2)}>Most liked</li>

                                                <div className="justify-content-between">Verified only
                                                    <label className="switch">
                                                        <input type="checkbox" defaultChecked onChange={(e) => UserverifiedHandler(e)} />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </ul>

                                        </div>
                                        :
                                        cat == 'categories' ?
                                            <div className="filter dropdown" style={{ display: "none" }}>
                                                <div className="select">
                                                    <span>Recently added</span>
                                                    <i className="fa fa-chevron-down"></i>
                                                </div>
                                                <input type="hidden" name="filter" />
                                                <ul className="dropdown-menu">
                                                    <li id="">Recently added</li>

                                                    <li id="">Most liked</li>
                                                    <div className="justify-content-between">Verified only
                                                        <label className="switch">
                                                            <input type="checkbox" checked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </ul>

                                            </div> : ''


                            }
                        </div>
                    </div>
                </div>

                <section className="live-auctions pt-5 pb-4 ">
                    <div className="container">
                        <div className="row m-0 mb-3">
                            {
                                cat == "items" ?
                                    alldata && alldata.response && alldata.response.map((item, i) => (
                                        <>
                                            <Link to={{ pathname: "/single_item", state: { assetId: item.assetId ,auctionId: item.auctionId} }} className="col-lg-3 col-md-6 col-sm-6 col-xs-12 pt-3" key={i}  >
                                                <div className="card-box">
                                                    <p className="publish-time">
                                                        {moment.utc(moment(item.auctionEndTime).diff(moment(item.auctionStartTime))).format("HH") + "h " + moment.utc(moment(item.auctionEndTime).diff(moment(item.auctionStartTime))).format("mm") + "m "}<span>left</span></p>
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
                                                            <img className="imagesColorBg" src={item.creatorLogoImage} /><p>{item.creatorUserName}</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row m-0 d-flex align-items-center">
                                                        <div className="col-6 card-price">
                                                            <p><span>Current bid</span>${item.currentBid}</p>
                                                        </div>
                                                        <div className="col-6 card-btn">
                                                            <Link className="btn btn2" >Place a bid</Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Link>
                                        </>
                                    ))
                                    :
                                    cat == 'user' ?
                                        alluser && alluser.response && alluser.response.map((item, i) => (

                                            <Link to={{ pathname: "/users", state: { userid: item.userId } }} className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={i}>
                                                <div className="card-box">
                                                    <div className="row mt-3">
                                                        <img alt="" className="img-fluid mt-n3 bannercreator imagesColorBg" src={item.bannerImage} /></div>
                                                    <div className="row m-0 mt-n5">
                                                        <div className="col-12 card-profile card-price card-logo-profile d-flex align-items-center flex-column">
                                                            <img alt="" className="imagesColorBg" src={item.logoImage} />
                                                            <p>{item.firstName} {item.lastName}</p>
                                                            <p>{item.userName}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row m-0 mt-3 pl-4 pr-4">
                                                        <p>{item.bioText}</p>
                                                    </div>
                                                    <hr />
                                                    <div className="row m-0 d-flex align-items-center">
                                                        <div className="col-6 card-price">
                                                            <p><span>Followers</span> {item.followCount}</p>
                                                        </div>
                                                  
                                                            {
                                                                item.isFollowed == 0 ?
                                                                    <div className="col-6 card-btn">
                                                                        <Link className="btn btn2" to="#" onClick={() => followCreators(item.userId)}>Follow</Link>
                                                                    </div>
                                                                    :
                                                                    <div className="col-6 card-btn">
                                                                        <Link className="btn btn2" to="#" onClick={() => unfollowCreators(item.userId)}>unFollow</Link>
                                                                    </div>
                                                            }
                                                       
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                        :
                                        cat == "categories" ?
                                            allcategory && allcategory.response && allcategory.response.map((item, i) => (
                                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={i}>
                                                    <div className="card-box">
                                                        <div className="row ">
                                                            <img alt="" className="img-fluid mt-n3 bannercreator 
                                                            
                                                            
                                                              
                                                              
                                                              " src={item.image} /></div>
                                                        <div className="row m-0 pt-4 pb-3">
                                                            <div className="col-12 card-profile card-price d-flex align-items-center flex-column">
                                                                <p>{item.name}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row m-0 d-flex align-items-center">
                                                            <div className="col-6 card-price">
                                                                <p><span>Total Item</span> {item.itemCount}</p>
                                                            </div>
                                                            {/* <div className="col-6 card-btn">
                                                                <Link className="btn btn2" to="#" >Follow</Link>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>

                                            ))
                                            : ''
                            }


                        </div>


                    </div>
                </section>
            </div>
            <Testimonial />
            <Footer />


        </>
    )
}
const mapStateToProps = (state) => {

    return {
        state
    }
}


export default connect(

    mapStateToProps,
    // mapDispatchToProps,
    { getallcategories, getalluserexplorer, getallitemexplorer }


)(Explorer);

