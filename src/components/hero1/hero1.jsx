import styles from "./hero1.module.css";
import girl from '../../assets/home/girl1.png'
import girl2 from '../../assets/home/girl2.png'

export default function Hero1() {
    return (

        <div className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.heroTexts}>
                    <p>Order Restaurant food, takeaway and groceries.</p>
                    <h1>Feast Your Senses, <span>Fast and Fresh</span></h1>
                    <p>Enter a postcode to see what we deliver</p>
                </div>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="e.g. EC4R 3TE" />
                    <button>Search</button>
                </div>
            </div>
            <div className={styles.heroImage}>
                <img src={girl} alt="Food Delivery" />
            </div>
            
            <div className={styles.rightContainer}>
                <img src={girl2} alt="Food Delivery" />
            </div>
        </div>
    );
}