import React, { useContext, useEffect, useState } from 'react';
import styles from './profile.module.css';
import { UserContext } from '../../contexts/userContext';
import Header from '../../components/header/header';
import { PopularRestaurants } from '../../components/popularRestaurants/popularRestaurants';
import Footer from '../../components/footer/footer';
import { IoMdArrowRoundBack } from "react-icons/io";
import addIcon from '../../assets/payment/add.png'
import walletIcon from '../../assets/payment/wallet.png'
import editIcon from '../../assets/payment/edit.png'
import { getUserInfo } from '../../services/auth';
import { addPaymentMethod, removePaymentMethod, updateUserInfo } from '../../services/userInfo';
import AddPaymentPopUp from '../../components/addPaymentPopUp/addPaymentPopUp';

const Profile = () => {
    const [userInfo, setUserInfo] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [editableInfo, setEditableInfo] = useState({
        name: userInfo?.name || '',
        gender: userInfo?.gender || '',
        country: userInfo?.country || '',
        email: userInfo?.email || '',
    });
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [cardDetails, setCardDetails] = useState({});

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const userInfo = await getUserInfo()
        setUserInfo(userInfo.data)
        setEditableInfo({
            name: userInfo?.data.name || '',
            gender: userInfo?.data.gender || '',
            country: userInfo?.data.country || '',
            email: userInfo?.data.email || '',
        })
    }

    const handleCardSave = async (updatedDetails) => {
        console.log("Saved card details:", updatedDetails);
        const res = await addPaymentMethod(updatedDetails)
        if (res.status === 200) {
            alert(res.message)
            getData()
        } else {
            alert("Something went wrong")
        }
    };

    const handleCardRemove = async (id) => {
        console.log("Card removed");
        const res = await removePaymentMethod(id);
        if (res.status === 200) {
            alert(res.message)
            getData()
        } else {
            alert("Something went wrong")
        }
    };
    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    // Save changes
    const handleSave = async () => {
        setIsEditing(false);
        const res = await updateUserInfo(editableInfo)
        if (res.status === 200) {
            alert(res.message)
            getData()
        } else {
            alert("Something went wrong")
        }
        console.log('Updated Info:', editableInfo);
    };

    const onEditClick = (cardInfo) => {
        setIsPopupOpen(true);
        setIsEditing(true);
        setCardDetails({
            id: cardInfo._id,
            cardNumber: cardInfo.cardNumber,
            cvc: cardInfo.cvc,
            expiration: cardInfo.expiration,
            name: cardInfo.name
        });
    };

    const onAddClick = () => {
        setIsPopupOpen(true);
        setIsEditing(false);
        setCardDetails({});
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
                    {userInfo?.paymentMethods?.map((method) => (
                        <div className={styles.paymentCard}>
                            <img src={walletIcon} alt="wallet" />
                            <p>{method?.cardNumber}<br></br><span>{method?.name}</span></p>
                            <img src={editIcon} alt="edit" onClick={() => onEditClick(method)} />
                        </div>
                    ))}
                    <div
                        className={styles.paymentCard}
                        style={{ justifyContent: 'center' }}
                        onClick={onAddClick}
                    >
                        <img src={addIcon} alt="add" />
                        <p>Add New Card</p>
                    </div>
                </div>
                {isPopupOpen && (
                    <AddPaymentPopUp
                        isEdit={isEditing}
                        cardDetails={isEditing ? cardDetails : {}}
                        onClose={() => setIsPopupOpen(false)}
                        onSave={handleCardSave}
                        onRemove={handleCardRemove}
                    />
                )}
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