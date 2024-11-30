import styles from './payment.module.css';
import { IoMdArrowRoundBack } from "react-icons/io";

const Payment = ({onBack}) => {
    return (
        <div className={styles.container}>
            <div className={styles.orderDetails}>
                <h2><span><IoMdArrowRoundBack onClick={onBack}/></span>Choose and pay</h2>
                <div className={styles.orderNotes}>
                    <textarea placeholder="Add order notes" />
                </div>
            </div>
            <div className={styles.orderSummary}>
                <div className={styles.deliveryAddress}>
                    <h3>Delivery Address</h3>
                    <p>45, Green Street, Sector 12</p>
                </div>
                <div className={styles.orderInfo}>
                    <p>Items: ₹230</p>
                    <p>Sales Tax: ₹10</p>
                    <p className={styles.total}>Subtotal (3 items): ₹240</p>
                </div>
                <button className={styles.paymentButton}>Choose Payment Method</button>
            </div>
        </div>
    );
};

export default Payment;