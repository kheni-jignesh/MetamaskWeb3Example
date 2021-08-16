import React, { useEffect } from 'react'
import Categories_header from '../components/Categories_header'
import Hashmask1 from '../images/Hashmask_15753 22.png'
import Hashmask2 from '../images/Hashmask_15753 24.png'
import Hashmask3 from '../images/Hashmask_15753 22.png'
import Hashmask4 from '../images/Hashmask_15753 23.png'
import Hashmask5 from '../images/Hashmask_15753 25.png'
import Hashmask6 from '../images/Hashmask_15753 24.png'
import profile from '../images/profile.png'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
var $ = require("jquery");
function Search() {
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

    useEffect(() => {
        $(document).ready(function () {
            $('.filter').click(function () {
                $(this).attr('tabindex', 1).focus();
                $(this).toggleClass('active');
                $(this).find('.dropdown-menu').slideToggle(300);
            });
            $('.filter').focusout(function () {
                $(this).removeClass('active');
                $(this).find('.dropdown-menu').slideUp(300);
            });
            $('.filter .dropdown-menu li').click(function () {
                $(this).parents('.filter').find('span').text($(this).text());
                $(this).parents('.filter').find('input').attr('value', $(this).attr('id'));
            });

            $('.filter .dropdown-menu li').on('click', function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        });
    }, [])
    return (
        <>
            <Header />
            <Categories_header />
            <section className="live-auctions pt-5 pb-4">
                <div className="container">
                    <h2>Search results for <b>Earth</b></h2>
                    <div className="row m-0 mb-3">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 p-0 d-flex align-items-center justify-content-start">
                            <div className="tab">
                                <button className="tablinks active" onClick={(event) => openCity(event, 'London')}>Items</button>
                                <button className="tablinks" onClick={(event) => openCity(event, 'Paris')}>Users</button>
                                <button className="tablinks" onClick={(event) => openCity(event, 'Tokyo')}>Categories</button>
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
                                    <li id="">Recently added</li>
                                    <li id="">Cheapest</li>
                                    <li id="">Highest price</li>
                                    <li id="">Most liked</li>
                                    <div className="justify-content-between">Verified only
                                        <label className="switch">
                                            <input type="checkbox" checked />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="London" className="tabcontent" style={{ display: "block" }}>
                        <div className="row mb-3">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">10h 49m <span>left</span></p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask1} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">10h 49m <span>left</span></p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask2} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">10h 49m <span>left</span></p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask3} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">10h 49m <span>left</span></p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask4} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 promoted">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">Promoted</p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask5} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">Promoted</p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask2} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">Promoted</p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask3} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">Promoted</p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask4} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="Paris" className="tabcontent" style={{ display: "none" }}>
                        <div className="row mb-3">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">10h 49m <span>left</span></p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask1} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">10h 49m <span>left</span></p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask2} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">10h 49m <span>left</span></p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask3} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">10h 49m <span>left</span></p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask4} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 promoted">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">Promoted</p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask5} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">Promoted</p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask2} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">Promoted</p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask3} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">Promoted</p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask4} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div id="Tokyo" className="tabcontent" style={{ display: "none" }}>
                        <div className="row mb-3">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">10h 49m <span>left</span></p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask1} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">10h 49m <span>left</span></p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask2} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">10h 49m <span>left</span></p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask3} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">10h 49m <span>left</span></p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask4} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 promoted">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">Promoted</p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask5} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">Promoted</p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask2} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">Promoted</p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask3} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="card-box">
                                    <p className="publish-time">Promoted</p>
                                    <div className="row"><img className="img-fluid mt-n3" src={Hashmask4} /></div>
                                    <div className="row m-0">
                                        <div className="col-12 card-title">
                                            <p>Libero iusto sit <span>Single Edition</span></p>
                                        </div>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-12 card-profile card-price  d-flex align-items-center">
                                            <img src={profile} /><p>Stephon</p>
                                        </div>
                                    </div>
                                    {/* <hr> */}
                                    <div className="row m-0 d-flex align-items-center">
                                        <div className="col-6 card-price">
                                            <p><span>Current bid</span> $1580</p>
                                        </div>
                                        <div className="col-6 card-btn">
                                            <Link className="btn btn2" to="#">Place a bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row m-0 pt-5 pb-5 d-flex justify-content-center"><Link className="btn btn1 w-50" to="#">Load more</Link></div>
                </div>
            </section>
            <Testimonial />
            <Footer />
        </>
    )
}

export default Search
