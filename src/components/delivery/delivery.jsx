import React, { useContext, useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import styles from './delivery.module.css';
import { UserContext } from '../../contexts/userContext';
import AddAddressPopup from '../addAddressPopUp/addAddressPopUp';
import { deleteAddress } from '../../services/userInfo';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import addIcon from '../../assets/payment/add.png'

const Delivery = ({ onBack, onSetDefault, isMobile}) => {
    let userInfo = useContext(UserContext);
    const addresses = userInfo.Addresses;

    const [showAddAddressPopup, setShowAddAddressPopup] = useState(false);
    const [refetchData, setRefetchData] = useState(true);
    const [editInfo, setEditInfo] = useState({});

    useEffect(() => {
        console.log(userInfo);
    }, [refetchData]);

    const renderHeader = () => {
        if (isMobile) {
            return (
                <div style={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h2>
                        <span><IoArrowBackCircleSharp style={{ fontSize: '50px', cursor: 'pointer'}} color='#FC8A06' onClick={onBack} /></span>
                        Your Addresses
                    </h2>
                </div>
            );
        } else {
            return <h2><span><IoMdArrowRoundBack style={{cursor: 'pointer'}} onClick={onBack} /></span>Your Addresses</h2>;
        }
    }

    const onRemove = async(id) => {
        await deleteAddress(id);
        setRefetchData(!refetchData);
    };

    const onSave = () => {
        setShowAddAddressPopup(false);
        setRefetchData(!refetchData);
    };

    const onEdit = (address) => {
        setEditInfo(address);
        setShowAddAddressPopup(true);
    };

    const onAdd = () => {
        setEditInfo({});
        setShowAddAddressPopup(true);
    };

    return (
        <div className={styles.container}>
            {/* Header Section */}
            <div className={styles.orderDetails}>
                {renderHeader()}

                {/* Address Cards */}
                <div className={styles.cardContainer}>
                    <div className={[styles.card, styles.cardDashed].join(' ')} onClick={onAdd}>
                        <img src={addIcon} alt="add" style={{ width: '50px', height: '50px' }} />
                        <h4 style={{ fontSize: '20px', color: '#000' }}>Add Address</h4>
                    </div>
                    {addresses.map((address, index) => (
                        <div className={styles.card} key={index}>
                            <h4>{userInfo.name}</h4>
                            <p>{address.address}</p>
                            <p>Phone Number: {address.phoneNumber}</p>
                            {address.isDefault && <div className={styles.defaultBadge}>Default</div>}
                            <div className={styles.editRemove}>
                                <span onClick={() => onEdit(address)}>Edit</span>
                                <span>|</span>
                                <span onClick={() => onRemove(address._id)}>Remove</span>
                            </div>
                        </div>
                    ))}
                </div>
                {showAddAddressPopup &&
                    <AddAddressPopup 
                        onClose={() => setShowAddAddressPopup(false)}
                        onSave={onSave}
                        editInfo={editInfo}
                    />
                }
            </div>
        </div>
    );
};

export default Delivery;
