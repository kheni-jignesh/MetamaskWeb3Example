import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// images
import NextIcon from '../images/next-icon.png';
import Hashmask1 from '../images/Hashmask_15753 15-0.png';
import { connect } from 'react-redux';
import { getTopCategories } from '../redux/actions';



const CategoriesCard = (props) => {
    const { topCategories } = props;
    const history = useHistory()
    useEffect(() => {
        props.getTopCategories()
    }, [])

    const exploreCategory = () => {
        history.push({
            pathname: '/explorer',
            search: '',
            state: { detail: "hello world ahjdchjhcjdhjdhjsddfdf" }
        })
    }

    return (
        <>
            <section className="categories pt-4 pb-5">
                <div className="container">
                    <div className="row m-0 mb-4">
                        <div className="col-9 p-0 d-flex align-items-center justify-content-start">
                            <h1 className="main-title">Categories</h1>
                        </div>
                        <div className="col-3 p-0 d-flex align-items-center justify-content-end"><Link
                            to={{ pathname: "/explorer", state: { categoriesitem: true } }} className="see-all d-flex align-items-center" >See all <img alt="" src={NextIcon} /></Link></div>
                    </div>
                    <div className="row pb-2">
                        {
                            topCategories && topCategories.response && topCategories.response.map((item, index) => (
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                                    <div className="card-box">
                                        <div className="row ">
                                            <img alt="" className="img-fluid mt-n3 bannercreator imagesColorBg" src={item.image} /></div>
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
                        }

                    </div>
                    <br />
                    <div className="row m-0 pt-5 pb-5 d-flex justify-content-center"><Link className="btn btn1 w-50" to="/explorer">Start
					Explore</Link></div>
                </div>
            </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps, { getTopCategories })(CategoriesCard)

