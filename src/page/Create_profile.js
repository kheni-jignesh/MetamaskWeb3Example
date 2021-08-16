import React, { useEffect } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
var $ = require("jquery");
function Create_profile() {
    function readURL(input) {
         if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

useEffect(() => {

    $(function () {
        $('#upload').on('change',
            function () {
                readURL(input);
            });
    });

    var input = document.getElementById('upload');
    var infoArea = document.getElementById('upload-label');
    input.addEventListener('change', showFileName);
    function showFileName(event) {
        var input = event.srcElement;
        var fileName = input.files[0].name;
        // infoArea.textContent = 'File name: ' + fileName;

    }
}, [])
return (
    <>
    <Header/>
        <section className="profile-sec pt-3">
            <div className="container">
                <div className="row pb-5">
                    <h2 className="profile-title mb-2">Create Profile</h2>
                    <div className="col-lg-4 col-md-2 col-sm-12"></div>
                    <div className="col-lg-4 col-md-8 col-sm-12">
                        <form className="profile-form">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Display Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Example: Rainbow of the world" />
                                <div className="row">
                                    <div className="col-7">
                                        <i className="fa fa-exclamation-circle"></i><span>The name is already taken.</span>
                                    </div>
                                    <div className="col-5">
                                        <i className="fa fa-check-circle"></i><span>This name is valid.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Custom URL</label>
                                <p className="lable-btm-text">Customize your URL on NFTPrime. Must only contain lowercase letters, numbers,
                                    and hyphens.</p>
                                <input type="text" className="form-control" id="exampleInputPassword1"
                                    placeholder="https://nftprime.com/rainbow" />
                                <div className="row">
                                    <div className="col-7">
                                        <i className="fa fa-exclamation-circle"></i><span>The name is already taken.</span>
                                    </div>
                                    <div className="col-5">
                                        <i className="fa fa-check-circle"></i><span>This name is valid.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Bio</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlSelect1">Category</label>
                                <p className="lable-btm-text">Adding category will help make you discoverable.</p>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Choose a category</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Twitter Username</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Example: @NFT-Prime" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Instagram Username</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Example: @NFT-Prime" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Personal site or portfolio</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Example: Example: https://nftprime.com" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Enter your email" />
                                <div className="row">
                                    <div className="col-7">
                                        <i className="fa fa-exclamation-circle"></i><span>"Email" must be a valid email</span>
                                    </div>
                                    <div className="col-5">
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Logo image</label>
                                <p className="lable-btm-text">300 x 300 recommended.</p>
                                {/* <!-- Upload image input--> */}
                                <div className="input-group mb-3 px-2 py-5 bg-white cust-dots">
                                    <input id="upload" type="file" className="form-control border-0" />
                                    <div className="input-group-append">
                                        <label for="upload" className="btn btn-dark m-0 px-4 border-rad">
                                            <i className="fa fa-cloud-upload mr-2 clr-cust"></i>
                                            <small className="text-uppercase font-weight-bold clr-cust">Choose file</small>
                                        </label>
                                    </div>
                                </div>
                                {/* <!-- Uploaded image area--> */}
                                <div className="image-area mt-0"><img id="imageResult" src="#" alt=""
                                    className="img-fluid rounded shadow-sm mx-auto d-block" /></div>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Banner image</label>
                                <p className="lable-btm-text">1400 x 400 recommended.</p>
                                {/* <!-- Upload image input--> */}
                                <div className="input-group mb-3 px-2 py-5 bg-white cust-dots">
                                    <input id="upload" type="file"  className="form-control border-0" />
                                    <div className="input-group-append">
                                        <label for="upload" className="btn btn-dark m-0 px-4 border-rad">
                                            <i className="fa fa-cloud-upload mr-2 clr-cust"></i>
                                            <small className="text-uppercase font-weight-bold clr-cust">Choose file</small>
                                        </label>
                                    </div>
                                </div>
                                {/* <!-- Uploaded image area--> */}
                                <div className="image-area mt-0"><img id="imageResult" src="#" alt=""
                                    className="img-fluid rounded shadow-sm mx-auto d-block" /></div>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Verification</label>
                                <div className="row">
                                    <div className="col-8">
                                        <span>Proceed with verification process to get more visibility and gain trust on NFT Prime
                                            Marketplace. </span>
                                    </div>
                                    <div className="col-4">
                                        <button type="button" className="btn btn-dark">Get verified</button>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn-cust btn-dark">Create Profile</button>

                        </form>
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-12">
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
)
}

export default Create_profile
