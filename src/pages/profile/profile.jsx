import React, { useContext, useEffect, useState } from 'react';
import styles from './profile.module.css';
import { UserContext } from '../../contexts/userContext';
import Header from '../../components/header/header';
import { PopularRestaurants } from '../../components/popularRestaurants/popularRestaurants';
import Footer from '../../components/footer/footer';
import { IoMdArrowRoundBack } from "react-icons/io";

const Profile = ({ items }) => {
    const userInfo = useContext(UserContext);

    const renderComponent = () => {
        return (
            <div className={styles.container}>
                <div className={styles.profileSummary}>
                    <h2><span><IoMdArrowRoundBack onClick={() => window.location.href = '/'} style={{cursor: 'pointer'}}/></span>My Profile</h2>
                    <div className={styles.profileDetails}>
                        <div className={styles.profileImage}>
                            <img src={"https://res.cloudinary.com/dgs9nsrid/image/upload/v1732995381/cuvette-food-app/ws1ndpspih7p73nckcms.png"} alt="Profile" />
                        </div>
                        <div className={styles.profileInfo}>
                            <h3>{userInfo?.name}</h3>
                            <p>{userInfo?.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className={styles.parentContainer}>
            <Header/>
            {renderComponent()}
            <PopularRestaurants/>
            <Footer/>
        </div>
    );
};

export default Profile;