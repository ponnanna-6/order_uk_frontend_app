import { useState } from 'react';
import styles from './payment.module.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { deleteItemFromCart } from '../../services/cart';

const Payment = ({onBack}) => {
    const [paid, setPaid] = useState(false);

    const resetCart = async() => {
        await deleteItemFromCart();
    }

    const onPay = () => {
        setPaid(true);
        resetCart();
    }

    return (
        <div className={styles.container}>
            {!paid && <>
                <div className={styles.orderDetails}>
                    <h2><span><IoMdArrowRoundBack onClick={onBack}/></span>Choose and pay</h2>
                </div>
                <div className={styles.orderSummary}>
                    <div className={styles.deliveryAddress}>
                        <h3>Amount to be paid: $240</h3>
                    </div>
                    <button className={styles.paymentButton} onClick={onPay}>Proceed Payment</button>
                </div>
            </>}
            {paid && <>
                <div className={styles.orderDetails}>
                    <h2>Payment Success</h2>
                </div>
                <div className={styles.orderSummary}>
                    <div className={styles.deliveryAddress}>
                        <h3>Amount paid: $240</h3>
                    </div>
                    <button className={styles.paymentButton} style={{backgroundColor: 'green'}}>Order Confirmed</button>
                </div>
            </>}
        </div>
    );
};

export default Payment;