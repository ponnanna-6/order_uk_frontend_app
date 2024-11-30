import RatingCard from '../ratingCard/ratingCard'
import styles from './SummaryCard.module.css'

export default function SummaryCard({restaurantData}) {
    return (
        <section className={styles.container}>
            <div key={restaurantData._id} className={styles.cardPR}>
                <div className={styles.imageContainer}>
                    <img src={restaurantData.bgImg} alt={restaurantData.title} />
                    <div className={styles.content}>
                        <p className={styles.subtitle}>{restaurantData.tagLine}</p>
                        <h3 className={styles.title}>{restaurantData.name}</h3>
                        <div style={{ display: "flex", flexDirection: "row"}}>
                            <div className={styles.button}>{`Minimum Order: $${restaurantData.minOrder}`}</div>
                            <div className={styles.button}>{`Delivery In: ${parseInt(restaurantData.deliveryTime)-5}-${restaurantData.deliveryTime} Minutes`}</div>
                        </div>
                    </div>
                    <div className={styles.cardImg}>
                        <img src={restaurantData.logo} alt={restaurantData.title}/>
                        <RatingCard rating={restaurantData.rating}/>
                    </div>
                </div>
                <div className={styles.openInfo}>
                    <h3>{`Open until ${restaurantData.openTill}`}</h3>
                </div>
            </div>
        </section>
    )
}