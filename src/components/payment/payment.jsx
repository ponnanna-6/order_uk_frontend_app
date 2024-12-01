import { useState } from 'react';
import styles from './payment.module.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { deleteItemFromCart } from '../../services/cart';
import walletIcon from '../../assets/payment/wallet.png'
import { GrFormNext } from "react-icons/gr";
import sucessIcon from "../../assets/payment/sucess.png"
const Payment = ({ onBack, cartData}) => {
    const [paid, setPaid] = useState(false);

    const resetCart = async () => {
        await deleteItemFromCart();
    }

    const onPay = () => {
        setPaid(true);
        resetCart();
    }
    
    const foodNames = cartData.map(item => item.foodInfo.name);

    return (
        <div className={styles.container}>
            {!paid && <>
                <div className={styles.paymentMethods}>
                    <h2><span><IoMdArrowRoundBack onClick={onBack} /></span>Choose and pay</h2>
                    <div className={styles.paymentOptions}>
                        <div className={styles.paymentOptionDiv}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img src={walletIcon} alt="wallet" style={{ width: '50px', height: '50px' }} />
                                <p>Wallet<br /><span>Available balance $320</span></p>
                            </div>
                            <GrFormNext color='#FC8A06' style={{ fontSize: "1rem" }} />
                        </div>
                        <div className={styles.paymentOptionDiv}>
                            <div className={styles.paymentOptionContent}>
                                <img src={walletIcon} alt="wallet" className={styles.paymentOptionImg} />
                                <p>Mastercard</p>
                            </div>
                            <input type="radio" name="paymentOption" className={styles.paymentOptionRadio} />
                        </div>

                        <div className={styles.paymentOptionDiv}>
                            <div className={styles.paymentOptionContent}>
                                <img src={walletIcon} alt="wallet" className={styles.paymentOptionImg} />
                                <p>Visa</p>
                            </div>
                            <input type="radio" name="paymentOption" className={styles.paymentOptionRadio} />
                        </div>

                        <div className={styles.paymentOptionDiv}>
                            <div className={styles.paymentOptionContent}>
                                <img src={walletIcon} alt="wallet" className={styles.paymentOptionImg} />
                                <p>Rupee</p>
                            </div>
                            <input type="radio" name="paymentOption" className={styles.paymentOptionRadio} />
                        </div>

                        <div className={styles.paymentOptionDiv}>
                            <div className={styles.paymentOptionContent} style={{ padding: '15px', paddingLeft: '20px' }}>
                                <p style={{ fontWeight: '100', cursor: 'pointer' }}>+ Add Debit Card</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.paymentSummary}>
                    <div className={styles.amount}>
                        <p>Amount to be paid</p>
                        <p style={{ fontWeight: 'bold', color: '#000' }}>$240</p>
                    </div>
                    <div className={styles.dividerLine} />
                    <button className={styles.paymentButton} onClick={onPay}>Proceed Payment</button>
                </div>
            </>}
            {paid && <>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <div className={styles.sucessContainer}>
                        <img src={sucessIcon} alt="sucess" className={styles.sucessIcon} />
                        <h4>Order Placed Successfully</h4>
                        <p>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
                        <div>
                            {foodNames && foodNames.map((foodName, index) => (
                                <p key={index}>{foodName}</p>
                            ))}
                            <button className={styles.paymentButton} onClick={() => window.location.href = '/'}>Back to Home</button>

                        </div>
                    </div>
                </div>
            </>}
        </div>
    );
};

export default Payment;