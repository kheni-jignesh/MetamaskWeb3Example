import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import { useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import { getallcategories } from '../redux/actions'
import { connect } from 'react-redux';
function Create(props) {

    const [view, setview] = useState(false)
    const [imgupload, setimgupload] = useState(false)
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;


    const [title, setTitle] = useState()
    const [desc, setdesc] = useState()
    const [copy, setcopy] = useState()
    const [royality, setroyality] = useState()
    const [category, setcategory] = useState()
    useEffect(() => {
        props.getallcategories()

    }, [])
    
    let categorydata = props.state.allcategoryexplorer
  
    const verifiHandler = e => {
        if (e.target.checked) {
            console.log("on")
            setview(true)


        }
        else {
            setview(false)
            console.log("off")

        }
    }
    function submiteHandler(e) {
        e.preventDefault();
console.log("hcjhzgcxgxcjhvg")
    }


    // useEffect(() => {
    //     let data = {

    //     }
    //     axios.post(process.env.REACT_APP_URL + "addAsset", data)
    //         .then(res => {

    //             console.log(res)
    //         })

    // }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("heyy submit")

        console.log(title,"title",desc,"desc",copy,"copy",royality,"royality",category,"category")
    }

    const categoryval = (e)=>{
        setcategory(e.target.value)
    }
   

    return (
        <>
            <Header />
            <section className="create-main-sec pt-3">
                <div className="container">
                    <div className="row pb-5">
                        <h2 className="profile-title mb-2">Create Item</h2>
                        <div className="col-lg-4 col-md-12 col-sm-12"></div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <form className="profile-form" onSubmit={submitHandler}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Upload file</label>
                                    <p className="lable-btm-text">300 x 400 recommended.</p>
                                    {/* <!-- Upload image input--> */}
                                     <div className="input-group mb-3 px-2 py-5 bg-white cust-dots">
                                        <input id="upload" type="file"


                                            className="form-control border-0" />
                                        <div className="input-group-append">
                                            <label for="upload" className="btn btn-dark m-0 px-4 border-rad">
                                                <i className="fa fa-cloud-upload mr-2 clr-cust"></i>
                                                <small className="text-uppercase font-weight-bold clr-cust">Choose file</small>
                                            </label>
                                        </div>
                                    </div>


                                    {/* <!-- Uploaded image area--> */}
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Title</label>
                                    <input type="text" onChange={(e)=>setTitle(e.target.value)} className="form-control myform" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        placeholder="Example: Picture of Prime" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea className="form-control myformdec" onChange={(e)=>setdesc(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="marketplace ">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3 >Put on marketplace</h3>
                                        <div className="justify-content-between">
                                            <label className="switch">
                                                <input type="checkbox" onClick={(e) => verifiHandler(e)} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <p>Allow users instantly purchase your NFT</p>
                                </div>
                                {
                                    view && <div className="modal-content-list">
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
                                                        <input type="text" class="form-control myform" id="exampleInput1" placeholder="e.g. $240" />
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="exampleInput2">Starting time</label>
                                                        <br />
                                                        <div className="filter dropdown">
                                                            <div className="select myform form2">
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

                                                </form>

                                            </TabPanel>
                                            <TabPanel className="popup-dropdown-menu">
                                                <form>
                                                    <div class="form-group">
                                                        <label for="exampleInput3">Starting price</label>
                                                        <input type="text" class="form-control myform" id="exampleInput3" placeholder="Bids below this amount won’t be allowed." />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInput2">Starting time</label>
                                                        <br />
                                                        <div className="filter dropdown">
                                                            <div className="select myform form2">
                                                                <span>Right after listing</span>
                                                                <i className="fa fa-chevron-down"></i>
                                                            </div>
                                                            <input type="hidden" name="filter" />
                                                            <ul className="dropdown-menu">
                                                                <li id="">Right after listing</li>
                                                                <li id="" >Pick specific date</li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInput2">Bidding time</label>
                                                        <br />
                                                        <div className="filter dropdown">
                                                            <div className="select myform form2">
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

                                                </form>
                                            </TabPanel>
                                            <TabPanel className="popup-dropdown-menu">
                                                <form>
                                                    <div class="form-group">
                                                        <label for="exampleInput6">Starting price</label>
                                                        <input type="text" class="form-control myform" id="exampleInput6" placeholder="e.g. $240" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInput2">Starting time</label>
                                                        <br />
                                                        <div className="filter dropdown">
                                                            <div className="select myform form2">
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

                                                </form>
                                            </TabPanel>
                                        </Tabs>
                                    </div>
                                }

                                <div className="form-group">
                                    <label for="exampleInputEmail1">Number of copies</label>
                                    <input type="text"  onChange={(e)=>setcopy(e.target.value)} className="form-control myform" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        placeholder="min 1 to  max 1000" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleInputEmail1">Royalties</label>
                                    <input type="text"  onChange={(e)=>setroyality(e.target.value)} className="form-control myform" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        placeholder="Suggested: 0%, 10%, 20%, 30%" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Category</label>
                                    <p className="lable-btm-text">Adding category will help make you discoverable.</p>
                                    <select className="form-control myform" id="exampleFormControlSelect1" onChange={(e)=>categoryval(e)}>
                                        <option>Choose a category</option>
                                        {
                                            categorydata && categorydata.response.map(item => (
                                                <option value={item.categoryId}>{item.name}</option>
                                            ))
                                        }



                                    </select>
                                </div>
                                <button type="submit" className="btn-cust btn-dark pt-2 pb-2 createbtn">Create Item</button>

                            </form>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <h5 className="img-title">Preview</h5>
                            <p className="lable-btm-text">PNG, GIF, WEBP, MP4. Max 30mb..</p>
                            <div className="image-area1 mt-3">
                                <img id="imageResult" src="#" alt="" className="img-fluid rounded shadow-sm mx-auto d-block" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
    { getallcategories }


)(Create);
