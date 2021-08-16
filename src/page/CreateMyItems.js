import React, { useEffect, useState } from 'react';
import ProfileBg from '../images/Rectangle 3262.png';
import social1 from '../images/social1.png';
import social2 from '../images/social2.png';
import Profile from '../images/Ellipse 11.png';

import share from '../images/share.png'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Testimonial from '../components/Testimonial';
import { connect } from 'react-redux';
import { getItemInfoData } from '../redux/actions'

import moreButton from '../images/more button.png';
const CreateMyItems = (props) => {
    const { getItemProfileData } = props
console.log(getItemProfileData)
    useEffect(() => {
        props.getItemInfoData();
    }, [])
    return (
        <>
            <Header />
            <section className="users pt-1 pb-0 ">
                <div className="container">
                    <div className="row">
                        <img className="img-fluid mt-n3 users-bannerimge imagesColorBg"
                            src={getItemProfileData && getItemProfileData.response && getItemProfileData.response.bannerImage}
                            al="" />
                        <div className="col-lg-4 col-md-12 col-sm-6 col-xs-12"></div>
                        <div className="col-lg-4 col-md-7 col-sm-6 col-xs-12">
                            <div className="card-box">
                                <div className="row"></div>
                                <div className="row m-0 mt-n5">
                                    <div className="col-12 card-profile card-price users-logo-profile-item  d-flex align-items-center flex-column">
                                        <img className="imagesColorBg" src={getItemProfileData && getItemProfileData.response && getItemProfileData.response.logoImage} al="" />
                                        <p>{getItemProfileData && getItemProfileData.response && getItemProfileData.response.firstName + getItemProfileData && getItemProfileData.response && getItemProfileData.response.lastName}</p>
                                        <p>{getItemProfileData && getItemProfileData.response && getItemProfileData.response.userName}</p>
                                    </div>
                                </div>
                                <div className="row m-0 d-flex align-items-center pt-3">
                                    <div className="col-4 card-price text-center">
                                        <p><span>Following</span> {getItemProfileData && getItemProfileData.response && getItemProfileData.response.followingCount}</p>
                                    </div>
                                    <div className="col-4 card-price text-center">
                                        <p><span>Followers</span> {getItemProfileData && getItemProfileData.response && getItemProfileData.response.followCount}</p>
                                    </div>
                                    <div className="col-4 card-btn">
                                        <Link className="btn btn2" to="/edit_profile">Edit Profile</Link>
                                    </div>
                                </div>
                                <div className="row m-0 mt-3  text-center">
                                    <p>{getItemProfileData && getItemProfileData.response && getItemProfileData.response.bioText}</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
                            <div className="row pt-4">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    {
                                        getItemProfileData && getItemProfileData.response && getItemProfileData.response.isVerified == 1 ?
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
                                    <img src={moreButton} al="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            {/* create item */}
            <section className="items-empty pt-5 pb-5 mb-5">
                <div className="row m-0">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <p className="user-empty-title">No items have been created yet</p>
                        <p className="user-empty-subtitle">create items now and start promoting yourself and your business to the whole decentralized world</p>
                        <br />
                        <div className="row m-0 pt-5 pb-5 d-flex justify-content-center"><Link className="btn btn1 w-100" to="/create">Create item</Link></div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
                </div>
            </section>


            <Footer />
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return state
}
export default connect(mapStateToProps, { getItemInfoData })(CreateMyItems)

