// HomeScreen.js
import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
      <div className={styles.offer}>🌟 Get 5% Off your first order.<span><b>Promo:ORDER5</b></span></div>
        <div className={styles.location}>Regent Street, A5, 42401, London <span>Change Location</span></div>
        <div className={styles.cart}>My Cart</div>
      </header>

      {/* Header Section */}
      <section className={styles.navBar}>
        <img src="/logo.png" alt="logo" className={styles.logo}/>
        <button>Home</button>
        <button>Browse Menu</button>
        <button className={styles.active}>Special Offers</button>
        <button>Restaurants</button>
        <button>Track Order</button>
        <div className={styles.cart}>Login/Register</div>
      </section>
    </div>
  );
};

export default Header;
