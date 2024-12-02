import React from "react";
import styles from "./foodCard.module.css";
import { IoAddCircleSharp } from "react-icons/io5";

const FoodCard = ({ id, name, price, description, img, addItemToCart }) => {
  return (
    <div className={styles.foodCard}>
      <div className={styles.textSection}>
        <h3 className={styles.foodName}>{name}</h3>
        <p className={styles.foodDescription}>{description}</p>
        <span className={styles.price}>${price}</span>
      </div>
      <div className={styles.imageSection}>
        <img className={styles.foodImage} src={img} alt={name} />
        <IoAddCircleSharp
          className={styles.addButton}
          onClick={() => addItemToCart(id)}
        />
      </div>
    </div>
  );
};

export default FoodCard;
