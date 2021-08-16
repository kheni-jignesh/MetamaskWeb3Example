import React, { useEffect, useState } from 'react';
import ProfileBg from '../images/Rectangle 326.png';
import social1 from '../images/social1.png';
import social2 from '../images/social2.png';
import social3 from '../images/social3.png';
import Profile from '../images/Ellipse 11.png';
import MoreButton from '../images/more button.png';
import { Link, useHistory } from 'react-router-dom';
import { getItemInfoData } from '../redux/actions'
import { connect } from 'react-redux';
import axios from 'axios'
import Hashmask1 from '../images/Hashmask_15753 22.png'
import profile from '../images/profile.png'
import share from '../images/share.png';
const UserProfile = (props) => {

    const [user, setuser] = useState([])
    let mydata = []
    let userid = props.userid
    let history = useHistory()

    function userdata() {
        let data = {
            userId: userid,
            accountUserId: 1

        }
        axios.post(process.env.REACT_APP_URL + "getUserById", data)
            .then(re => {
                mydata.push(re.data.response)
                setuser(mydata)
               
            })
    }

    useEffect(() => {
        userdata()

    }, [])


    const followCreators = (id) => {
        console.log("hey")
        console.log(id)
        let data = {
            userId: 1,
            followingId: id
        }

        axios.post(process.env.REACT_APP_URL + "followUser", data)
            .then(res => {
                console.log(res.data)
                userdata()
            })
    }

    const unfollowCreators = (id) => {
        console.log("hey1")
        let data = {
            userId: 1,
            followingId: id
        }
        axios.put(process.env.REACT_APP_URL + "unfollowUser", data)
            .then(res => {
                console.log(res.data)
                userdata()
            })
    }
    return (
        <>
            <section className="users pt-1 pb-0 ">
                <div className="container">
                    <div className="row">
                        {
                            user && user.map((item, i) => (
                                <><img className="img-fluid mt-n3 users-bannerimge imagesColorBg"
                                    src={item.bannerImage}
                                    alt="" key={i}/>
                                    <div className="col-lg-4 col-md-12 col-sm-6 col-xs-12"></div>
                                    <div className="col-lg-4 col-md-7 col-sm-6 col-xs-12">
                                        <div className="card-box">
                                            <div className="row"></div>
                                            <div className="row m-0 mt-n5">
                                                <div className="col-12 card-profile card-price users-logo-profile-item  d-flex align-items-center flex-column">
                                                    <img src={item.logoImage} al="" className="imagesColorBg"/>
                                                    <p>{item && item.firstName}{item && item.lastName}</p>
                                                    <p>{item && item.userName}</p>
                                                </div>
                                            </div>
                                            <div className="row m-0 d-flex align-items-center pt-3">
                                                <div className="col-4 card-price text-center">
                                                    <p><span>Following</span> {item && item.followingCount}</p>
                                                </div>
                                                <div className="col-4 card-price text-center">
                                                    <p><span>Followers</span> {item && item.followCount}</p>
                                                </div>


                                                {
                                                    item.isFollowed == 0 ?
                                                        <div className="col-4 card-btn">
                                                            <button className="btn btn2" to="#" onClick={() => followCreators(item.userId)}>Follow</button>
                                                        </div>
                                                        :
                                                        <div className="col-4 card-btn">
                                                            <button className="btn btn2" to="#" onClick={() => unfollowCreators(item.userId)}>unFollow</button>
                                                        </div>
                                                }

                                            </div>
                                            <div className="row m-0 mt-3  text-center">
                                                <p>{item && item.bioText}</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
                                        <div className="row pt-4">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                {
                                                    item && item.isVerified == 1 ?
                                                        <button className="btn-v "><i className="fa fa-check-circle "></i>Verified</button>
                                                        :
                                                        <button className="btn-v mb-1 ">Get verified</button>
                                                }
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-4 col-xs-4">
                                                <a href="https://www.instagram.com/" target="_blank" className="nav-link user-social"><img src={social1} alt="" /></a>
                                                <a href="https://twitter.com/" target="_blank" className="nav-link user-social"><img src={social2} alt="" /></a>
                                                <Link to="#" className="nav-link user-social"><img src={share} alt="" /></Link>
                                            </div>
                                            <div className="col-lg-4 col-md-2 col-sm-4 col-xs-4 user-social">
                                                <img  src={MoreButton} al="" />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>
            </section>
            <hr></hr>
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

    { getItemInfoData }


)(UserProfile);
