import React, { useEffect, useState } from 'react';
import styles from './checkout.module.css';
import { getCartById } from '../../services/cart';
import Header from '../../components/header/header';
import { PopularRestaurants } from '../../components/popularRestaurants/popularRestaurants';
import Footer from '../../components/footer/footer';

const Checkout = ({ items }) => {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const getCartData = async () => {
            const cartData = await getCartById();
            setCartData(cartData.data.cart.items);
        };

        getCartData();
    }, []);

    return (
        <div className={styles.parentContainer}>
            <Header/>
            <div className={styles.container}>
                <div className={styles.orderDetails}>
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
                    </div>
                    <div className={styles.orderInfo}>
                        <p>Items: ₹230</p>
                        <p>Sales Tax: ₹10</p>
                        <p className={styles.total}>Subtotal (3 items): ₹240</p>
                    </div>
                    <button className={styles.paymentButton}>Choose Payment Method</button>
                </div>
            </div>
            <PopularRestaurants/>
            <Footer/>
        </div>
    );
};

export default Checkout;