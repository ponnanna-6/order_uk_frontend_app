import React from 'react';
import styles from './cart.module.css';

const Cart = ({ items, total, discounts, deliveryFee }) => {
  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>My Basket</h2>
      <div className={styles.items}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.itemDetails}>
              <span className={styles.quantity}>1x</span>
              <span className={styles.name}>{item.name}</span>
            </div>
            <span className={styles.price}>£{item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className={styles.summary}>
        <div className={styles.row}>
          <span>Sub Total:</span>
          <span>£{total.toFixed(2)}</span>
        </div>
        <div className={styles.row}>
          <span>Discounts:</span>
          <span className={styles.discount}>-£{discounts.toFixed(2)}</span>
        </div>
        <div className={styles.row}>
          <span>Delivery Fee:</span>
          <span>£{deliveryFee.toFixed(2)}</span>
        </div>
        <div className={styles.total}>
          <span>Total to pay</span>
          <span>£{(total - discounts + deliveryFee).toFixed(2)}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.freeItem}>Choose your free item</button>
        <div className={styles.couponInput}>
          <input type="text" placeholder="Apply Coupon Code here" />
          <button>Apply</button>
        </div>
        <button className={styles.checkout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;