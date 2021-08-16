import React, { useEffect } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import UserProfile from '../components/UserProfile';
import UserTab from '../components/UserTab';
import { Link, useHistory } from 'react-router-dom';
const UsersProfiles = (props) => {

    let history = useHistory()


        return (
            <>


                <Header />
                <UserProfile userid={props.location.state.userid} />

                <UserTab />
                <Footer />



            </>
        )
    

}

export default UsersProfiles
