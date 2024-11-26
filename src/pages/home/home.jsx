// HomeScreen.js
import React from 'react';
import styles from './home.module.css';
import food1 from '../../assets/food/food1.png'
import Header from '../../components/header/header';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import Footer from '../../components/footer/footer';
import { PopularRestaurants } from '../../components/popularRestaurants/popularRestaurants';

const cld = new Cloudinary({
    cloud: {
        //   cloudName: import.meta.env.IMAGE_CLOUD_NAME,
        cloudName: "dgs9nsrid"
    }
});
const Home = () => {
    const popularCategoriesPath = "cuvette-food-app/Popular categories/"
    const popularCategoriesItems = {
        burger: `${popularCategoriesPath}/burger`,
        soups: `${popularCategoriesPath}/soups`,
        salads: `${popularCategoriesPath}/salads`,
        pizza: `${popularCategoriesPath}/pizza`,
        pasta: `${popularCategoriesPath}/pasta`,
        breakfast: `${popularCategoriesPath}/breakfast`,
    }

    return (
        <div className={styles.container}>
            <Header />
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>Feast Your Senses, <span>Fast and Fresh</span></h1>
                    <p>Enter a postcode to see what we deliver</p>
                    <div className={styles.searchBar}>
                        <input type="text" placeholder="e.g. EC4R 3TE" />
                        <button>Search</button>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <img src={food1} alt="Food Delivery" />
                </div>
            </section>

            {/* Discount Offers */}
            <section className={styles.offersSection}>
                <h2>Up to -40% <span>🎉</span> Order.uk exclusive deals</h2>
                <div className={styles.categories}>
                    <button>Vegan</button>
                    <button>Sushi</button>
                    <button className={styles.active}>Pizza & Fast food</button>
                    <button>others</button>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src={food1} alt="Food" />
                        <div className={styles.cardDetails}>
                            <p>Restaurant</p>
                            <h3>Chef Burgers London</h3>
                            <span className={styles.discount}>-40%</span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={food1} alt="Food" />
                        <div className={styles.cardDetails}>
                            <p>Restaurant</p>
                            <h3>Grand Ai Cafe London</h3>
                            <span className={styles.discount}>-20%</span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={food1} alt="Food" />
                        <div className={styles.cardDetails}>
                            <p>Restaurant</p>
                            <h3>Butterbrot Cafe London</h3>
                            <span className={styles.discount}>-17%</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Categories */}
            <section className={styles.popularCategories}>
                <h2>Order.uk Popular Categories</h2>
                <div className={styles.cards}>
                    {Object.keys(popularCategoriesItems).map((category) => (
                        <div key={category} className={styles.category}>
                            <AdvancedImage cldImg={cld.image(popularCategoriesItems[category]).resize(fill().width(100).height(100))} />
                            <p>{category}</p>
                        </div>
                    ))}
                </div>
            </section>

            <PopularRestaurants/>
            {/* Partner Section */}
            <section className={styles.partnerSection}>
                <div>
                    <h3>Partner with us</h3>
                    <p>Join our platform and reach thousands of customers daily.</p>
                    <button>Learn More</button>
                </div>
                <img src="partner.jpg" alt="Partner with us" />
            </section>

            {/* Ride Section */}
            <section className={styles.rideSection}>
                <img src="ride.jpg" alt="Ride with us" />
                <div>
                    <h3>Ride with us</h3>
                    <p>Become a delivery partner and earn on your schedule.</p>
                    <button>Join Now</button>
                </div>
            </section>
            {/* About Us Section */}
            <section className={styles.aboutUsSection}>
                <h2>Know more about us!</h2>
                <div className={styles.stats}>
                    <div>
                        <h3>546+</h3>
                        <p>Restaurants</p>
                    </div>
                    <div>
                        <h3>789,900+</h3>
                        <p>Orders Delivered</p>
                    </div>
                    <div>
                        <h3>17,457+</h3>
                        <p>Delivery Partners</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
