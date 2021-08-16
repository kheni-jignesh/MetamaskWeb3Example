import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import bannerbg from '../images/color-img.jpg';
import $ from "jquery";
import Profile from '../images/profile.png';
import Hashmask1 from '../images/Hashmask_15753 22.png';
import Hashmask3 from '../images/Hashmask_15753 24.png';
import Dots from '../images/dots.png';
import "react-datepicker/dist/react-datepicker.css";
import { postCreatedByUser, getItemOnSaleAssetsOfUser, getItemSoldAssetsOfUser, getItemAssetsOwnedByUser, getItemActivitiesOfUser } from '../redux/actions';
import { connect } from 'react-redux';
import moment from 'moment';
import MomentInput from 'react-moment-input';
import axios from 'axios'

const MyitemTab = (props) => {
    const [filterDataItem, setFilterDataItem] = useState()
    const [sort, setSortFilter] = useState(1)
    const [verified, setVerified] = useState(1)
    const [city, setcity] = useState('create')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalIsInnerOpen, setModalIsInnerOpen] = useState(false)
    const [dateValue, setDateValue] = useState(moment().utc());
    const [timeValue, setTimeValue] = useState(moment().utc());

    useEffect(() => {
        GetAllMyItemTabData()
    }, [city, sort, verified])

    function GetAllMyItemTabData() {
        if (city == 'create') {
            console.log("yesss")
            getItemCreated()
        }
        else if (city === "onsale") {
            getItemOnSale()
        }
        else if (city === "sold") {
            getItemOnSold()
        }
        else if (city === "Owned") {
            getItemOwnedAssets()
        }
        else if (city === "Liked") {
            Liked()
        }
        else if (city === "Activity") {
            getItemActivities()
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
        setSortFilter(num)
    }
    const verifiedHandler = (e) => {
        if (e.target.checked) {
            setVerified(1)
        }
        else {
            setVerified(0)
        }
    }
    function getItemCreated() {
        console.log("created")
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
    function getItemOnSale() {
        console.log("sale")
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
    function getItemOnSold() {
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
    // Activity
    function getItemOwnedAssets() {
        let data = {
            userId: 1,
            accountUserId: 1,
            isVerified: verified,
            sortMethod: sort
        }
        axios.post(process.env.REACT_APP_URL + "getAllAssetsOwnedByUser", data)
            .then(re => {
                setFilterDataItem(re.data)
            })
    }
    function getItemActivities() {
        let data = {
            userId: 1,
            accountUserId: 1,
            isVerified: verified,
            sortMethod: sort
        }

        axios.post(process.env.REACT_APP_URL + "getLikeActivitiesOfUser", data)
            .then(re => {
                setFilterDataItem(re.data)
            })
    }
    function Liked() {

    }


    // putOnSalePopup
    const putOnSalePopup = () => {
        setModalIsOpen(true)
    }
    const pickSpecificDate = () => {
        setModalIsInnerOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <>
            <section className="live-auctions pt-5 pb-4">
                <div className="container">
                    <h2>Search results for Earth</h2>
                    <div className="row m-0 mb-3">
                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 p-0 d-flex align-items-center justify-content-start">
                            <div className="tab">
                                <button className="tablinks active" onClick={(event) => openCity(event, 'create')}>Created</button>
                                <button className="tablinks" onClick={(event) => openCity(event, 'onsale')}>On Sale</button>
                                <button className="tablinks" onClick={(event) => openCity(event, 'sold')}>Sold</button>
                                <button className="tablinks" onClick={(event) => openCity(event, 'Owned')}>Owned</button>
                                <button className="tablinks" onClick={(event) => openCity(event, 'Liked')}>Liked</button>
                                <button className="tablinks" onClick={(event) => openCity(event, 'Activity')}>Activity</button>
                            </div>
                        </div>


                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 p-0 d-flex align-items-center justify-content-end">
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
                                            <input type="checkbox" defaultChecked onChange={(e) => verifiedHandler(e)} />
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
                                    item.activityDate ?
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5" key={i}>
                                            <div className="card activity-card ">
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <img className="imagesColorBg" src={item.previewLink} />
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <h3>{item.title}</h3>
                                                        <p>liked by <span>{item.userName}</span></p>
                                                        <p className="date-time-activity">
                                                            <span>{moment(item.activityDate).format("DD/MM/YYYY")}, </span>
                                                            <span>{moment(item.activityDate).format("HH:MMA")},</span>
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        :
                                        <>
                                            <Link to={{ pathname: "/single_item", state: { assetId: item.assetId, auctionId: item.auctionId } }} className="col-lg-3 col-md-6 col-sm-6 col-xs-12 pt-5" key={i}>
                                                <div className="card-box">
                                                    <div className="nav-item dropdown publish-time1">
                                                        <Link className="nav-link pt-1 pb-1" data-toggle="dropdown" aria-expanded="false">
                                                            <img alt="" src={Dots} />
                                                        </Link>
                                                        <div className="dropdown-menu">
                                                            <Link to="#" className="dropdown-item" onClick={() => putOnSalePopup()}>Put on sale</Link>
                                                            <Link to="#" className="dropdown-item">Transfer</Link>
                                                            <Link to="#" className="dropdown-item">Burn</Link>
                                                            <Link to="#" className="dropdown-item">Share</Link>
                                                            <Link to="#" className="dropdown-item">View on Avascan</Link>
                                                        </div>
                                                    </div>
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
                                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                                            <img alt="" src={Profile} className="creatorimg imagesColorBg" /><p>{item.creatorUserName}</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row m-0 d-flex align-items-center">
                                                        <div className="col-6 card-price">
                                                            <p><span>Current bid</span> $1580</p>
                                                        </div>
                                                        <div className="col-6 card-btn">
                                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                ))
                            }
                        </div>
                    </div>
                    <br />
                    <div className="row m-0 pt-5 pb-5 d-flex justify-content-center"><Link className="btn btn1 w-50" to="#">Load more</Link></div>
                </div>
            </section>
            {/* Put on sale modal */}
            <div className={modalIsOpen ? 'overlay active' : 'overlay'} onClick={() => closeModal()}></div>
            <div
                className={modalIsOpen ? 'menudrawer active' : 'menudrawer'}
                isOpen={true}
                contentLabel="Example Modal"
            >
                <div className="modal-content-list">
                    <h2>Put on sale</h2>
                    <p>We do not own your private keys and cannot access your funds without your confirmation</p>
                    <h3>Choose sale type</h3>
                    <div>
                        <Tabs>
                            <TabList>
                                <Tab>Fixed Price</Tab>
                                <Tab>Timed auction</Tab>
                                <Tab>Unlimited auction</Tab>
                            </TabList>

                            <TabPanel className="popup-dropdown-menu">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInput1">Price</label>
                                        <input type="text" class="form-control" id="exampleInput1" placeholder="e.g. $240" />
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleInput2">Starting time</label>
                                        <br />
                                        <div className="filter dropdown">
                                            <div className="select">
                                                <span>Recently added</span>
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                            <input type="hidden" name="filter" />
                                            <ul className="dropdown-menu">
                                                <li id="">Recently added</li>
                                                <li id="">Most followed</li>
                                                <div className="justify-content-between">Verified only
		                                             <label className="switch">
                                                        <input type="checkbox" defaultChecked />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn create-auctions-btn">Submit</button>
                                </form>

                            </TabPanel>
                            <TabPanel className="popup-dropdown-menu">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInput3">Starting price</label>
                                        <input type="text" class="form-control" id="exampleInput3" placeholder="Bids below this amount won’t be allowed." />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInput2">Starting time</label>
                                        <br />
                                        <div className="filter dropdown">
                                            <div className="select">
                                                <span>Right after listing</span>
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                            <input type="hidden" name="filter" />
                                            <ul className="dropdown-menu">
                                                <li id="">Right after listing</li>
                                                <li id="" onClick={() => pickSpecificDate()}>Pick specific date</li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInput2">Bidding time</label>
                                        <br />
                                        <div className="filter dropdown">
                                            <div className="select">
                                                <span>1 day</span>
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                            <input type="hidden" name="filter" />
                                            <ul className="dropdown-menu">
                                                <li id="">1 day</li>
                                                <li id="">3 day</li>
                                                <li id="">5 day</li>
                                                <li id="">7 day</li>
                                                <li id="">Pick specific date</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn create-auctions-btn">Submit</button>
                                </form>
                            </TabPanel>
                            <TabPanel className="popup-dropdown-menu">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInput6">Starting price</label>
                                        <input type="text" class="form-control" id="exampleInput6" placeholder="e.g. $240" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInput2">Starting time</label>
                                        <br />
                                        <div className="filter dropdown">
                                            <div className="select">
                                                <span>Recently added</span>
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                            <input type="hidden" name="filter" />
                                            <ul className="dropdown-menu">
                                                <li id="">Right after listing</li>
                                                <li id="">Most followed</li>

                                            </ul>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn create-auctions-btn">Submit</button>
                                </form>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>

            <div className={modalIsInnerOpen ? 'overlay active' : 'overlay'} ></div>
            <div
                className={modalIsInnerOpen ? 'menudrawersec active' : 'menudrawersec'}
                isOpen={true}
                contentLabel="Example Modal"
            >
                <div className="modal-content-list">
                    <h2>Pick specific date</h2>
                    <p>You can choose a date and time to create a future auction</p>
                    <form className="popup-dropdown-menu">
                        <div class="form-group">
                            <label for="exampleInput1">Start date (DDMMYYYY)</label>

                            <MomentInput
                                format="DD/MM/YYYY"
                                options={false}
                                value={dateValue}
                                readOnly={false}
                                showIcon={true}
                                min={moment()}
                                autoClose
                                enableInputClick
                                inputCustomControl
                                onChange={dateValue => { setDateValue(dateValue) }}
                            />

                        </div>

                        <div class="form-group">
                            <label for="exampleInput2">Start time (HH:MM)</label>
                            <br />

                            <MomentInput
                                format="HH:mm"
                                options={false}
                                value={timeValue}
                                readOnly={false}
                                showIcon={false}
                                tab={1}
                                min={moment()}
                                autoClose
                                enableInputClick
                                inputCustomControl
                                onChange={timeValue => { setTimeValue(timeValue) }}
                            />
                        </div>
                        <button type="submit" class="btn create-auctions-btn">Apply</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default MyitemTab

