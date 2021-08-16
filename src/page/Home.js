import React, { useEffect } from 'react';
// component
import Banner from '../components/Banner';
import Header from '../components/Header';
import LiveAuctions from '../components/LiveAuctions';
import ArtworksLatest from '../components/ArtworksLatest';
import CreatorsTop from '../components/CreatorsTop';
import CategoriesCard from '../components/CategoriesCard';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const Home = (props) => {
    return (
        <div className="myexplorer">
            <Header />
            <Banner />
            <LiveAuctions />
            <ArtworksLatest />
            <CreatorsTop />
            <CategoriesCard />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Home

