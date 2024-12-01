import styles from './orderSummary.module.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
const OrderSummary = ({ cartData, onClickDelivery, onClickPayment, totalAmount}) => {

    return (
        <>
            {cartData.length > 0 ? (
                <div className={styles.container}>
                    <div className={styles.orderDetails}>
                        <h2><span><IoMdArrowRoundBack onClick={() => window.history.back()} /></span>Your Order Details</h2>
                        <div className={styles.divider}>
                            {cartData.map((item, index) => (
                                <div key={index} className={styles.itemContainer} style={index === cartData.length - 1 ? { borderBottom: "none" } : null}>
                                    <div className={styles.itemImage}>
                                        <img src={item.foodInfo.image} alt={item.foodInfo.name} />
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <h3 className={styles.itemName}>{item.foodInfo.name}</h3>
                                        <span className={styles.itemQuantity}>{item.quantity}x item</span>
                                    </div>

                                    <p className={styles.itemPrice}>${item.foodInfo.price * item.quantity}</p>
                                </div>
                            ))}
                            <div className={styles.orderNotes}>
                                <p>Notes</p>
                                <textarea placeholder="Add order notes" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.orderSummary}>
                        <div className={styles.deliveryAddress} onClick={onClickDelivery}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div className={styles.locationIcon}>
                                    <FaLocationDot color='#FC8A06' />
                                </div>
                                <div className={styles.addressDetails}>
                                    <h3>Delivery Address</h3>
                                    <p>45, Green Street, Sector 12 sajdshjdhakd sadnsadkjsadkjhsakjdhsakjhdkjsa</p>
                                </div>
                            </div>
                            <GrFormNext color='#FC8A06' style={{ fontSize: "2.5rem" }} />
                        </div>
                        <div className={styles.dividerLine}></div>

                        <div className={styles.orderInfo}>
                            <div className={styles.orderSummaryItems}>
                                <p>Items</p>
                                <p>${totalAmount}</p>
                            </div>
                            <div className={styles.orderSummaryItems}>
                                <p>Sales Tax</p>
                                <p>$10</p>
                            </div>
                            <div className={styles.dividerLine}></div>

                            <div className={styles.orderSummaryItems}>
                                <h4>{`Subtotal (${cartData.length} items)`}</h4>
                                <h4>${totalAmount + 10}</h4>
                            </div>
                        </div>
                        <button className={styles.paymentButton} onClick={onClickPayment}>Choose Payment Method</button>
                    </div>
                </div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.orderDetails}>
                        <h2><span><IoMdArrowRoundBack onClick={() => window.history.back()} /></span>Your Order Details</h2>
                        <h3>Your cart is empty</h3>
                    </div>
                </div>
            )}
        </>
    );
};

export default OrderSummary;