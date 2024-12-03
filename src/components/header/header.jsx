// HomeScreen.js
import React, { useContext, useEffect, useMemo, useState } from 'react';
import styles from './header.module.css';
import { UserContext } from '../../contexts/userContext';
import { FaCircleUser } from "react-icons/fa6";
import cartImg from '../../assets/cart.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { getUserInfo } from '../../services/auth';
import { NavLink, useLocation } from "react-router-dom";
import { getCartById } from '../../services/cart';
import { FaArrowCircleDown } from "react-icons/fa";

const Header = ({ hideCart }) => {
  const [userInfo, setUserInfo] = useState({});
  const [address, setAddress] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [cartData, setCartData] = useState("");
  const location = useLocation(); 
  console.log("LOCATION: ", location)

  const total = useMemo(() => {
    return Object.values(cartData).reduce((acc, item) => {
      return acc + item.foodInfo.price * item.quantity;
    }, 0);
  }, [cartData]);

  const currentPath = window.location.pathname;

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  useEffect(() => {
    const getData = async () => {
      const userInfo = await getUserInfo()
      setUserInfo(userInfo.data)
      const address = userInfo.data.Addresses
      setAddress(address)
    }
    getData()
  }, [])

  useEffect(() => {
    const getCartData = async () => {
      const cartData = await getCartById();
      setCartData(cartData.data.cart.items);
    };

    getCartData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  const renderNavBar = () => {
    return (
      !isMobile && (
        <section className={styles.navBar}>
          <img src="/logo.png" alt="logo" className={styles.logo} />
          <button
            onClick={() => handleNavigation('/')}
            style={{
              backgroundColor: location?.pathname === '/' ? '#FC8A06' : '#fff',
              color: location?.pathname === '/' ? '#fff' : '#000'
            }}
          >
            Home
          </button>
          <button>
            Browse Menu
          </button>
          <button>
            Special Offers
          </button>
          <button 
            style={{
              backgroundColor: location?.pathname.startsWith('/restaurant') ? '#FC8A06' : '#fff',
              color: location?.pathname.startsWith('/restaurant') ? '#fff' : '#000'
            }}
          >
            Restaurants
          </button>
          <button>
            Track Order
          </button>
          {userInfo?.name ? (
            <div
              className={styles.profile}
              onClick={() => handleNavigation('/profile')}
            >
              <span>
                <FaCircleUser className={styles.icon} />
              </span>
              &nbsp;Hey, {userInfo?.name}
            </div>
          ) : (
            <div
              className={styles.profile}
              onClick={() => handleNavigation('/login')}
            >
              <span>
                <FaCircleUser className={styles.icon} />
              </span>
              &nbsp;Login/Signup
            </div>
          )}
        </section>
      )
    );
  }

  return (
    <div className={styles.container}>
      {/* Header Section */}
      {!isMobile && <header className={styles.header}>
        <div className={styles.offer}>🌟 Get 5% Off your first order.&nbsp;<span><b>Promo:ORDER5</b></span></div>
        {address.length > 0 &&
          <div className={styles.location}>
            {address.length > 0 && `${address[0]?.district}, ${address[0]?.state}, ${address[0]?.pincode}`}&nbsp;
            <span>Change Location</span>
          </div>
        }
        <div className={styles.cartContainer}>
          <div className={styles.cart} onClick={() => window.location.href = '/checkout'}>
            <img src={cartImg} alt="cart" className={styles.cartIcon} />
            <span className={styles.cartText}>My Cart</span>
            {/* {total > 0 && <span className={styles.cartTotal}>₹{total}</span>} */}
            <FaArrowCircleDown className={styles.cartArrow} />
          </div>
        </div>

      </header>}

      {/* Header Section */}
      {!isMobile && <>{renderNavBar()}</>}

      {isMobile && <section className={styles.navBarMobile}>
        <div className={styles.mobileHeader1}>
          <img src="/logo.png" alt="logo" className={styles.logo} />
          <GiHamburgerMenu className={styles.hamburger} onClick={() => window.location.href = '/'} />
        </div>

        {!hideCart && <div className={styles.mobileHeader2}>
          {userInfo?.name
            ? <div className={styles.profileMobile} onClick={() => window.location.href = '/profile'}><span><FaCircleUser className={styles.icon} /></span>&nbsp;Hey {userInfo?.name}</div>
            : <div className={styles.profileMobile} onClick={() => window.location.href = '/login'}><span><FaCircleUser className={styles.icon} /></span>&nbsp;{'Login/Signup'}</div>
          }
          <div className={styles.cartMobile} onClick={() => window.location.href = '/checkout'}>
            <span><img src={cartImg} alt="cart" className={styles.cartIcon} /></span>&nbsp;
            My Cart
          </div>
        </div>}
      </section>}
    </div>
  );
};

export default Header;
