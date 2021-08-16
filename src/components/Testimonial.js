import React from 'react';

const Testimonial = () => {
    return (
        <>
            {/* Get the latest updates*/}
            <section className="latest-updates d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
                            <h1 className="main-title">Get the latest updates</h1>
                            <p>Join our mailing list to stay in the loop with our newest feature releases.</p>
                            <form className="form-inline mt-5 d-flex justify-content-center">
                                <div className="form-group mx-sm-3 mb-2">
                                    <input type="password" className="form-control" placeholder="Your e-mail" />
                                </div>
                                <button type="submit" className="btn btn1 mb-2">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
