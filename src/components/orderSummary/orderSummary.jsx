import styles from './orderSummary.module.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
const OrderSummary = ({cartData, onClickDelivery, onClickPayment}) => {
    return (
        <div className={styles.container}>
            <div className={styles.orderDetails}>
                <h2><span><IoMdArrowRoundBack /></span>Order Summary</h2>
                {cartData.map((item, index) => (
                    <div key={index} className={styles.itemContainer}>
                        <div className={styles.itemImage}>
                            <img src={item.foodInfo.image} alt={item.foodInfo.name} />
                        </div>
                        <div className={styles.itemDetails}>
                            <h3 className={styles.itemName}>{item.foodInfo.name}</h3>
                            <p className={styles.itemPrice}>₹{item.foodInfo.price}</p>
                            <span className={styles.itemQuantity}>Quantity: {item.quantity}</span>
                        </div>
                    </div>
                ))}
                <div className={styles.orderNotes}>
                    <textarea placeholder="Add order notes" />
                </div>
            </div>
            <div className={styles.orderSummary}>
                <div className={styles.deliveryAddress}>
                    <h3>Delivery Address</h3>
                    <p>45, Green Street, Sector 12</p>
                    <GrFormNext onClick={onClickDelivery}/>
                </div>
                <div className={styles.orderInfo}>
                    <p>Items: ₹230</p>
                    <p>Sales Tax: ₹10</p>
                    <p className={styles.total}>Subtotal (3 items): ₹240</p>
                </div>
                <button className={styles.paymentButton} onClick={onClickPayment}>Choose Payment Method</button>
            </div>
        </div>
    );
};

export default OrderSummary;