// HomeScreen.js
import React, { useContext } from 'react';
import styles from './header.module.css';
import { UserContext } from '../../contexts/userContext';

const Header = () => {
  const userInfo = useContext(UserContext);
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
      <div className={styles.offer}>🌟 Get 5% Off your first order.<span><b>Promo:ORDER5</b></span></div>
        <div className={styles.location}>Regent Street, A5, 42401, London <span>Change Location</span></div>
        <div className={styles.cart} onClick={() => window.location.href = '/checkout'}>My Cart</div>
      </header>

      {/* Header Section */}
      <section className={styles.navBar}>
        <img src="/logo.png" alt="logo" className={styles.logo}/>
        <button onClick={() => window.location.href = '/'}>Home</button>
        <button>Browse Menu</button>
        <button className={styles.active}>Special Offers</button>
        <button>Restaurants</button>
        <button>Track Order</button>
        {userInfo?.name 
          ? <div className={styles.cart} onClick={() => window.location.href = '/profile'}>{userInfo?.name}</div>
          : <div className={styles.cart} onClick={() => window.location.href = '/login'}>{'Login/Register'}</div>
        }
      </section>
    </div>
  );
};

export default Header;
