// HomeScreen.js
import React, { useContext, useEffect, useState } from 'react';
import styles from './header.module.css';
import { UserContext } from '../../contexts/userContext';
import { FaCircleUser } from "react-icons/fa6";
import cartImg from '../../assets/cart.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { getUserInfo } from '../../services/auth';

const Header = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  
  useEffect(() => {
    const getData = async () => {
      const userInfo = await getUserInfo()
      setUserInfo(userInfo.data)
    }
    getData()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.container}>
      {/* Header Section */}
      {!isMobile && <header className={styles.header}>
        <div className={styles.offer}>🌟 Get 5% Off your first order.&nbsp;<span><b>Promo:ORDER5</b></span></div>
        <div className={styles.location}>Regent Street, A5, 42401, London.&nbsp;<span>Change Location</span></div>
        <div className={styles.cart} onClick={() => window.location.href = '/checkout'}>
          <span><img src={cartImg} alt="cart" className={styles.cartIcon} /></span>&nbsp;
          My Cart
        </div>
      </header>}

      {/* Header Section */}
      {!isMobile && <section className={styles.navBar}>
        <img src="/logo.png" alt="logo" className={styles.logo} />
        <button onClick={() => window.location.href = '/'}>Home</button>
        <button>Browse Menu</button>
        <button className={styles.active}>Special Offers</button>
        <button>Restaurants</button>
        <button>Track Order</button>
        {userInfo?.name
          ? <div className={styles.profile} onClick={() => window.location.href = '/profile'}><span><FaCircleUser className={styles.icon} /></span>&nbsp;Hey, {userInfo?.name}</div>
          : <div className={styles.profile} onClick={() => window.location.href = '/login'}><span><FaCircleUser className={styles.icon} /></span>&nbsp;{'Login/Signup'}</div>
        }
      </section>}

      {isMobile && <section className={styles.navBarMobile}>
        <div className={styles.mobileHeader1}>
          <img src="/logo.png" alt="logo" className={styles.logo} />
          <GiHamburgerMenu className={styles.hamburger} onClick={() => window.location.href = '/'} />
        </div>

        <div className={styles.mobileHeader2}>
          {userInfo?.name
            ? <div className={styles.profileMobile} onClick={() => window.location.href = '/profile'}><span><FaCircleUser className={styles.icon} /></span>&nbsp;Hey {userInfo?.name}</div>
            : <div className={styles.profileMobile} onClick={() => window.location.href = '/login'}><span><FaCircleUser className={styles.icon} /></span>&nbsp;{'Login/Signup'}</div>
          }
          <div className={styles.cartMobile} onClick={() => window.location.href = '/checkout'}>
            <span><img src={cartImg} alt="cart" className={styles.cartIcon} /></span>&nbsp;
            My Cart
          </div>
        </div>
      </section>}
    </div>
  );
};

export default Header;
