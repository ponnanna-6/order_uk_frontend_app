import styles from './hero2.module.css';

import appStoreImg from "../../assets/app_store.png";
import playStoreImg from "../../assets/play_store.png";

export function Hero2Section({isMobile}) {
    return (
        <section className={styles.orderingSection}>
            {/* Text Content Section */}
            <div className={styles.textContent}>
                <h2>
                    <img src="/logo.png" alt="logo" className={styles.logo} />
                    ing is more <br />
                </h2>
                <p className={styles.highlightedText}>Personalised<span> & Instant</span></p>
                <p className={styles.downloadText}>Download the Order.uk app for faster ordering</p>
                <div className={styles.appButtons}>
                    <img
                        src={appStoreImg}
                        alt="Download on the App Store"
                    />
                    <img
                        src={playStoreImg}
                        alt="Get it on Google Play"
                    />
                </div>
            </div>
            {/* Image Section */}
            <div className={styles.imageContainer}>
                <img
                    src="https://res.cloudinary.com/dgs9nsrid/image/upload/v1732634732/cuvette-food-app/couple_img.png"
                    alt="Happy couple using the Order.uk app"
                />
            </div>
        </section>
    );
}
