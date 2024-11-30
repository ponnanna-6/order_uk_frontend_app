import React, { useState } from 'react';
import styles from './addAddressPopup.module.css';
import { addAddress, updateAddress } from '../../services/userInfo';

const AddAddressPopup = ({ onClose, editInfo}) => {
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [phone, setPhone] = useState(editInfo ? editInfo.phoneNumber : '');
    const [fullAddress, setFullAddress] = useState(editInfo ? editInfo.address : '');
    const [fromEdit, setFromEdit] = useState(editInfo ? true : false);

    const handleSubmit = async() => {
        if (!phone || !fullAddress) {
            alert('Please fill out all fields.');
            return;
        }

        const address = {
            address: `${fullAddress} ${city} ${state} ${pinCode}`.trim(),
            phoneNumber: phone,
            default: false
        };
        let res=""

        if(fromEdit) {
            res = await updateAddress(editInfo._id, address)
        } else {
            res = await addAddress(address)
        }
        if (res.status == 200) {
            onClose();
        }
        onClose();
        console.log(res)
    };

    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
                <h3>Add Address</h3>
                <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                        <label>State</label>
                        <input
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            placeholder="State"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>City/District</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="City/District"
                        />
                    </div>
                </div>
                <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                        <label>Pin Code</label>
                        <input
                            type="text"
                            value={pinCode}
                            onChange={(e) => setPinCode(e.target.value)}
                            placeholder="Pin Code"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Phone Number</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone Number"
                        />
                    </div>
                </div>
                <div className={styles.inputGroupFullWidth}>
                    <label>Enter Full Address</label>
                    <textarea
                        value={fullAddress}
                        onChange={(e) => setFullAddress(e.target.value)}
                        placeholder="Enter full address"
                    ></textarea>
                </div>
                <div className={styles.buttonGroup}>
                    <button onClick={handleSubmit} className={styles.saveButton}>Save</button>
                    <button onClick={onClose} className={styles.cancelButton}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddAddressPopup;
