import RatingCard from '../ratingCard/ratingCard'
import styles from './SummaryCard.module.css'
import bike from '../../assets/bike.png'
import complete from '../../assets/complete.png'

export default function SummaryCard({ restaurantData, isMobile }) {
    return (
        <section
            className={styles.container}
        >
            {!isMobile && <div
                key={restaurantData._id}
                className={styles.cardPR}
                style={{ backgroundImage: `url(https://res.cloudinary.com/dgs9nsrid/image/upload/v1732876060/cuvette-food-app/Popular%20restaurants/prb6g47zedtr9iuy1tyt.png)` }}
            >
                <div className={styles.imageContainer}>
                    <div className={styles.content}>
                        <p className={styles.subtitle}>{restaurantData.tagLine}</p>
                        <h3 className={styles.title}>{restaurantData.name}</h3>
                        <div className={styles.contentDiv}>
                            <div className={styles.button}>
                                <img src={bike} alt="bike" style={{height: "20px", width: "20px"}}/>
                                &nbsp;
                                {`Minimum Order: ₹${restaurantData.minOrder}`}
                            </div>
                            <div className={styles.button}>
                                <img src={complete} alt="bike" style={{height: "20px", width: "20px"}}/>
                                &nbsp;
                                {`Delivery In: ${parseInt(restaurantData.deliveryTime) - 5}-${restaurantData.deliveryTime}`}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cardImg}>
                    <img src={restaurantData.bgImg} alt={restaurantData.title} />
                    <RatingCard rating={restaurantData.rating} styling={styles.ratingCard} />
                </div>
                <div className={styles.openInfo}>
                    {`Open until ${restaurantData.openTill}`}
                </div>
            </div>}

            {isMobile && <div
                key={restaurantData._id}
                className={styles.cardPRMobile}
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/dgs9nsrid/image/upload/v1732876060/cuvette-food-app/Popular%20restaurants/prb6g47zedtr9iuy1tyt.png)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "100%",
                }}
            >
                <div className={styles.cardImgMobile}>
                    <img src={restaurantData.bgImg} alt={restaurantData.title} />
                    <RatingCard rating={restaurantData.rating} styling={styles.ratingCardMobile} />
                </div>
                <div className={styles.contentContainerMobile}>
                    <div className={styles.contentMobile}>
                        <p className={styles.subtitleMobile}>{restaurantData.tagLine}</p>
                        <h3 className={styles.titleMobile}>{restaurantData.name}</h3>
                        <div className={styles.contentDivMobile}>
                            <div className={styles.buttonMobile}>
                                <img src={complete} alt="bike" style={{height: "30px", width: "30px"}}/>
                                &nbsp;
                                <p>{`Minimum Order: ₹${restaurantData.minOrder}`}</p>
                            </div>
                            <div className={styles.buttonMobile}>
                                <img src={bike} alt="bike" style={{height: "30px", width: "30px"}}/>
                                &nbsp;
                                <p>{`Delivery In: ${parseInt(restaurantData.deliveryTime) - 5}-${restaurantData.deliveryTime}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </section>
    )
}