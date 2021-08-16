import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileBg from '../images/Rectangle 3261.png';
import profile from '../images/Ellipse 12.png';
import social1 from '../images/social1.png';
import social2 from '../images/social2.png';
import share from '../images/share.png';
import moreButton from '../images/more button.png';
import { connect } from 'react-redux';
import { getItemInfoData } from '../redux/actions'

const MyitemProfile = (props) => {
    const { getItemProfileData } = props

    useEffect(() => {
        props.getItemInfoData();
    }, [])

    return (
        <>
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
            <hr></hr>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return state
}
export default connect(mapStateToProps, { getItemInfoData })(MyitemProfile)