import React, { useContext, useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import styles from './delivery.module.css';
import { UserContext } from '../../contexts/userContext';
import AddAddressPopup from '../addAddressPopUp/addAddressPopUp';
import { deleteAddress } from '../../services/userInfo';

const Delivery = ({ onBack, onSetDefault }) => {
    let userInfo = useContext(UserContext);
    const addresses = userInfo.Addresses;

    const [showAddAddressPopup, setShowAddAddressPopup] = useState(false);
    const [refetchData, setRefetchData] = useState(true);
    const [editInfo, setEditInfo] = useState({});

    useEffect(() => {
        console.log(userInfo);
    }, [refetchData]);

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
                <h2><IoMdArrowRoundBack onClick={onBack} /> Your Addresses</h2>

                {/* Address Cards */}
                <div className={styles.cardContainer}>
                    <div className={styles.card} onClick={onAdd} style={{ border: '2px dashed #ddd', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                        <h4 style={{ fontSize: '20px', color: '#f4b400' }}>+ Add Address</h4>
                    </div>
                    {addresses.map((address, index) => (
                        <div className={styles.card} key={index}>
                            <h4>{userInfo.name}</h4>
                            <p>{address.address}</p>
                            <p>Phone Number: {address.phoneNumber}</p>
                            {address.isDefault && <div className={styles.defaultBadge}>Default</div>}
                            <div className={styles.editRemove}>
                                <span onClick={() => onEdit(address)}>Edit</span>
                                <span onClick={() => onRemove(address._id)}>Remove</span>
                            </div>
                            {!address.isDefault && (
                                <button className={styles.paymentButton} onClick={() => onSetDefault(index)}>Set as Default</button>
                            )}
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
