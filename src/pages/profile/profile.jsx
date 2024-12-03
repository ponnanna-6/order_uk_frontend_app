import React, { useContext, useEffect, useState } from 'react';
import styles from './profile.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { IoMdArrowRoundBack } from "react-icons/io";
import addIcon from '../../assets/payment/add.png'
import walletIcon from '../../assets/payment/wallet2.png'
import editIcon from '../../assets/payment/edit.png'
import { getUserInfo } from '../../services/auth';
import { addPaymentMethod, removePaymentMethod, updateUserInfo } from '../../services/userInfo';
import AddPaymentPopUp from '../../components/addPaymentPopUp/addPaymentPopUp';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { alertToast, errorToast } from '../../helper/toast';
import Loader from '../../components/loader/loader';

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
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    const getData = async () => {
        setIsLoading(true)
        const userInfo = await getUserInfo()
        if (userInfo.status !== 200) {
            setIsLoading(false)
            errorToast(userInfo.message)
            return
        }
        setIsLoading(false)
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
            alertToast(res.message)
            getData()
        } else {
            errorToast("Something went wrong")
        }
    };

    const handleCardRemove = async (id) => {
        console.log("Card removed");
        const res = await removePaymentMethod(id);
        if (res.status === 200) {
            alertToast(res.message)
            getData()
        } else {
            errorToast("Something went wrong")
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
            alertToast(res.message)
            getData()
        } else {
            errorToast("Something went wrong")
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

    const renderSaveEditButton = () => {
        if (isEditing) {
            return (
                <button onClick={handleSave} className={styles.saveButton}>
                    Save
                </button>
            );
        } else {
            return (
                <button onClick={() => setIsEditing(true)} className={styles.saveButton}>
                    Edit
                </button>
            );
        }
    };

    const renderComponent = () => {
        return (
            <div className={styles.container}>
                <div className={styles.profileSummary}>
                    <div className={styles.profileHeader}>
                        {isMobile 
                            ?   <div style={{ display: 'flex', width: '100%',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <h2>
                                        <span><IoArrowBackCircleSharp style={{fontSize: '50px'}} color='#FC8A06' onClick={() => window.history.back()} /></span>
                                        My Profile
                                    </h2>
                                    {renderSaveEditButton()}
                                </div>
                            : <h2><span><IoMdArrowRoundBack onClick={() => window.history.back()} /></span>My Profile</h2>
                        }
                    </div>
                    <div className={styles.profileDetails}>
                        {!isMobile && <div className={styles.profileImage}>
                            <div>
                                <img
                                    src="https://res.cloudinary.com/dgs9nsrid/image/upload/v1733161147/cuvette-food-app/ix9qyezc0rm2jvlhnnyp.jpg"
                                    alt="Profile"
                                />
                                <h3>{editableInfo.name}</h3>
                            </div>
                            {renderSaveEditButton()}
                        </div>}
                        <div className={styles.profileInfo}>
                            <div>
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={editableInfo.name}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div>
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={editableInfo.email}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div>
                                <label>Gender</label>
                                <input
                                    type="text"
                                    name="gender"
                                    value={editableInfo.gender}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div>
                                <label>Country</label>
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
                    <div className={styles.dividerLine}></div>
                </div>
                <h2 className={styles.paymentHeader}>Saved Payment Methods</h2>
                <div className={styles.savedPaymentMethods}>
                    {userInfo?.paymentMethods?.map((method, index) => (
                        <div key={index} className={styles.paymentCard}>
                            <img src={walletIcon} alt="wallet" />
                            <p>XXXX XXXX XXXX {method?.cardNumber.slice(-4)}<br></br><span>{method?.name}</span></p>
                            <img src={editIcon} alt="edit" onClick={() => onEditClick(method)} />
                        </div>
                    ))}
                    <div
                        className={styles.addCard}
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
            <Loader loading={isLoading} />
            <Header hideCart={true} />
            {renderComponent()}
            {!isMobile && <Footer />}
        </div>
    );
};

export default Profile;