import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyitemProfile from '../components/myitemProfile';
import MyitemTab from '../components/MyitemTab';
import Testimonial from '../components/Testimonial';
import '../css/item.css';

const MyItems = () => {
    return (
        <div className="myItem-section">
            <Header />
            <MyitemProfile />
            <MyitemTab />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default MyItems
