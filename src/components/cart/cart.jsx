import React, { useEffect, useMemo } from "react";
import styles from "./cart.module.css";
import { MdDeleteForever } from "react-icons/md";
import cartImg from "../../assets/cart.png";
import { IoShareSocialOutline } from "react-icons/io5";
import deleteIcon from "../../assets/dustbin.png";
import { FaArrowCircleDown } from "react-icons/fa";
import scooter from "../../assets/scooter.png"
import store from "../../assets/store.png"
import { FaArrowCircleRight } from "react-icons/fa";

const Cart = ({ items, discounts, deliveryFee, removeItemFromCart, isPublic, copyLink }) => {
  const total = useMemo(() => {
    return Object.values(items).reduce((acc, item) => {
      return acc + item.foodInfo.price * item.quantity;
    }, 0);
  }, [items]);

  useEffect(() => {
    console.log("Cart component reloaded");
  }, [items]);

  return (
    <div className={styles.cart}>
      {/* Title Section */}
      {!isPublic &&
        <div className={styles.shareContatiner}>
          <IoShareSocialOutline className={styles.shareIcon} />
          <p>Share this cart with your friends</p>
          <button className={styles.shareCart} onClick={copyLink}>
            Copy link
          </button>
        </div>
      }
      <div className={styles.mainCart}>
        <div className={styles.titleContainer}>
          <img src={cartImg} alt="cart" className={styles.cartImg} />
          <h2 className={styles.title}>My Basket</h2>
        </div>

        {/* Cart Items */}
        <div className={styles.items}>
          {Object.values(items).map((item, index) => (
            <div key={index} className={styles.item}>
              <div>
                <p className={styles.quantity}>{`${item.quantity}x`}</p>
              </div>
              <div className={styles.itemDetails}>
                <span className={styles.price}>
                  ₹{(item.foodInfo.price * item.quantity).toFixed(2)}
                </span>
                <span className={styles.name}>{item.foodInfo.name}</span>
                <span className={styles.extra}>{item.foodInfo.description}</span>
              </div>
              <div>
                {!isPublic && <img
                  src={deleteIcon}
                  className={styles.delete}
                  onClick={() => removeItemFromCart(item.foodItem)}
                />}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className={styles.summary}>
          <div className={styles.row}>
            <span>Sub Total:</span>
            <span className={styles.amounts}>₹{total.toFixed(2)}</span>
          </div>
          <div className={styles.row}>
            <span>Discounts:</span>
            <span className={styles.amounts}>-₹{discounts.toFixed(2)}</span>
          </div>
          <div className={styles.row}>
            <span>Delivery Fee:</span>
            <span className={styles.amounts}>₹{deliveryFee.toFixed(2)}</span>
          </div>
        </div>

        <div className={styles.total}>
          <span className={styles.totalLabel}>Total to pay</span>
          <span>₹{(total - discounts + deliveryFee).toFixed(2)}</span>
        </div>

        {/* Actions Section */}
        <div className={styles.actions}>
          <button className={styles.freeItem}>Choose your free item</button>
          <button className={styles.freeItem}>Apply coupon code here</button>


          <div className={styles.deliveryOptions}>
            <div className={styles.actionCard}>
              <img src={scooter} alt="scooter" />
              <h3>Delivery</h3>
              <p>Starts at 17.50</p>
            </div>

            <div className={styles.actionCard}>
              <img src={store} alt="store" />
              <h3>Collection</h3>
              <p>Starts at 16.50</p>
            </div>
          </div>
          
          <div
            className={isPublic || total < 50
              ? styles.checkoutDisabled
              : styles.checkout}
            onClick={() => !isPublic && total >= 50 && (window.location.href = "/checkout")}
          >
            <div className={styles.tooltipWrapper}>
              <FaArrowCircleRight className={styles.icons} />
              {(isPublic || total < 50) && (
                <span className={styles.tooltip}>
                  {isPublic
                    ? "Public users cannot checkout."
                    : `Minimum delivery is ₹50, You must spend ${50 - total} more for the checkout.`}
                </span>
              )}
            </div>
            <span>Checkout!</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
