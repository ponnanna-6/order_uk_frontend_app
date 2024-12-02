import React, { useContext, useState } from 'react';
import styles from './profile.module.css';
import { UserContext } from '../../contexts/userContext';
import Header from '../../components/header/header';
import { PopularRestaurants } from '../../components/popularRestaurants/popularRestaurants';
import Footer from '../../components/footer/footer';
import { IoMdArrowRoundBack } from "react-icons/io";
import addIcon from '../../assets/payment/add.png'
import walletIcon from '../../assets/payment/wallet.png'
import editIcon from '../../assets/payment/edit.png'

const Profile = () => {
    const userInfo = useContext(UserContext);

    // State to toggle edit mode
    const [isEditing, setIsEditing] = useState(false);

    // State to store updated user details
    const [editableInfo, setEditableInfo] = useState({
        name: userInfo?.name || '',
        gender: userInfo?.gender || '',
        country: userInfo?.country || '',
        email: userInfo?.email || '',
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Save changes
    const handleSave = () => {
        setIsEditing(false);
        // Logic to update userInfo context or send updated details to backend
        console.log('Updated Info:', editableInfo);
    };

    const renderComponent = () => {
        return (
            <div className={styles.container}>
                <div className={styles.profileSummary}>
                    <div className={styles.profileHeader}>
                        <h2><span><IoMdArrowRoundBack onClick={() => window.history.back()} /></span>My Profile</h2>
                    </div>
                    <div className={styles.profileDetails}>
                        <div className={styles.profileImage}>
                            <div>
                                <img
                                    src="https://res.cloudinary.com/dgs9nsrid/image/upload/v1732995381/cuvette-food-app/ws1ndpspih7p73nckcms.png"
                                    alt="Profile"
                                />
                                <h3>{editableInfo.name}</h3>
                            </div>
                            {isEditing ? (
                                <button
                                    onClick={handleSave}
                                    className={styles.saveButton}
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className={styles.saveButton}
                                >
                                    Edit
                                </button>
                            )}
                        </div>
                        <div className={styles.profileInfo}>
                            <div>
                                <label>Full Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={editableInfo.name}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>

                            <div>
                                <label>Email Address:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={editableInfo.email}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div>
                                <label>Gender:</label>
                                <input
                                    type="text"
                                    name="gender"
                                    value={editableInfo.gender}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div>
                                <label>Country:</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={editableInfo.country}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dividerLine}></div>
                <h2>Saved Payment Methods</h2>
                <div className={styles.savedPaymentMethods}>
                    <div className={styles.paymentCard}>
                        <img src={walletIcon} alt="wallet" />
                        <p>**** **** **** 1111<br></br><span>K S Ponnanna</span></p>
                        <img src={editIcon} alt="edit" />
                    </div>
                    <div className={styles.paymentCard} style={{justifyContent: 'center'}}>
                        <img src={addIcon} alt="add" />
                        <p>Add New Card</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.parentContainer}>
            <Header />
            {renderComponent()}
            <PopularRestaurants />
            <Footer />
        </div>
    );
};

export default Profile;