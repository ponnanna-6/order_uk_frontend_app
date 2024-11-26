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
import { Hero2Section } from '../../components/hero2/hero2';
import FAQ from '../../components/FAQ/FAQ';
import Stats from '../../components/stats/stats';

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

    const cards = [
        {
            id: 1,
            image: 'https://res.cloudinary.com/dgs9nsrid/image/upload/v1732635225/cuvette-food-app/partner.png',
            badge: 'Earn more with lower fees',
            subtitle: 'Signup as a business',
            title: 'Partner with us',
            buttonText: 'Get Started',
        },
        {
            id: 2,
            image: 'https://res.cloudinary.com/dgs9nsrid/image/upload/v1732635225/cuvette-food-app/rider.png',
            badge: 'Avail exclusive perks',
            subtitle: 'Signup as a rider',
            title: 'Ride with us',
            buttonText: 'Get Started',
        },
    ];

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
                        <div key={category} className={styles.card}>
                            <AdvancedImage cldImg={cld.image(popularCategoriesItems[category])} />
                            <p>{category}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Popular Categories */}
            <PopularRestaurants title={"Popular Restaurants"}/>

            {/* Hero 2 Section */}
            <Hero2Section />

            {/* Partner Ride Section */}
            <section className={styles.partnerRiderSection}>
                {cards.map((card) => (
                    <div key={card.id} className={styles.cardPR}>
                        <div className={styles.imageContainer}>
                            <img src={card.image} alt={card.title} />
                            <span className={styles.badge}>{card.badge}</span>
                            <div className={styles.content}>
                                <p className={styles.subtitle}>{card.subtitle}</p>
                                <h3 className={styles.title}>{card.title}</h3>
                                <button className={styles.button}>{card.buttonText}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/*FAQ*/}
            <FAQ/>

            {/* About Us Section */}
            <Stats/>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Home;
