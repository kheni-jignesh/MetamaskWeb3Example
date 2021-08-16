
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// img
import NextIcon from '../images/next-icon.png';
import Hashmask1 from '../images/Hashmask_15753 15.png';
import Ellipse1 from '../images/Ellipse 11.png';

import axios from 'axios'

const CreatorsTop = (props) => {
    // const { topCreators } = props;
    const [creatorTop, setCreatorTop] = useState()
    const [FollowId, setFollowId] = useState('')

    const getCreatorData = () => {
        let data = {
            userId: 1
        }
        axios.post(process.env.REACT_APP_URL + "GetTopCreators", data).then(res => {
            console.log(res.data)
            setCreatorTop(res.data.response)
        })
    }
    useEffect(() => {
        getCreatorData()
    }, [])

    const followCreators = (id) => {
        let data = {
            userId: 1,
            followingId: id
        }
        setFollowId(id)
        axios.post(process.env.REACT_APP_URL + "followUser", data)
            .then(res => {
                console.log(res.data)
                getCreatorData()
            })
    }

    const unfollowCreators = (id) => {
        let data = {
            userId: 1,
            followingId: id
        }
        axios.put(process.env.REACT_APP_URL + "unfollowUser", data)
            .then(res => {
                console.log(res.data)
                getCreatorData()
            })
    }
    console.log(creatorTop, "creatorTop")
    return (
        <>
            <section className="creators pt-5 pb-5">
                <div className="container">
                    <div className="row m-0 mb-4">
                        <div className="col-9 p-0 d-flex align-items-center justify-content-start">
                            <h1 className="main-title">Top Creators</h1>
                        </div>
                        <div className="col-3 p-0 d-flex align-items-center justify-content-end"><Link to="#"
                            className="see-all d-flex align-items-center" to={{ pathname: "/explorer", state: { creators: true } }}>See all <img alt="" src={NextIcon} /></Link></div>
                    </div>
                    <div className="row">
                        {
                            creatorTop && creatorTop.map((item, index) => (
                                <Link to={{ pathname: "/users", state: { userid: item.userId } }} className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                                    <div className="card-box">
                                        <div className="row">
                                            <img alt="" className="img-fluid mt-n3 bannercreator imagesColorBg" src={ item.bannerImage } /></div>
                                        <div className="row m-0 mt-n5">
                                            <div className="col-12 card-profile card-price card-logo-profile d-flex align-items-center flex-column">
                                                <img alt="" className="imagesColorBg" src={ item.logoImage } />
                                                <p>Theresa Runolfsson</p>
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
                        }

                    </div>
                </div>
            </section>
        </>
    )
}


export default CreatorsTop


