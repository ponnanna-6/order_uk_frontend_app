import React from "react";
import styles from "./foodCard.module.css";
import { IoAddCircleSharp } from "react-icons/io5";

const FoodCard = ({ id, name, price, description, img, addItemToCart }) => {
  return (
    <div className={styles.foodCard}>
      <div className={styles.foodHeader}>
        <h3>{name}</h3>
        <span className={styles.price}>£{price}</span>
      </div>
      <div className={styles.foodDetails}>
        <img src={img} alt={name} />
        <div className={styles.extras}>
          <span className={styles.extra}>
            {description}
          </span>
        </div>

        <IoAddCircleSharp className={styles.addButton} onClick={() => addItemToCart(id)} />
      </div>
    </div>
  );
};

export default FoodCard;