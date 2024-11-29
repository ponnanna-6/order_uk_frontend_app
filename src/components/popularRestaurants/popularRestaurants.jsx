import { useNavigate } from 'react-router-dom'
import styles from './popularRestaurants.module.css'

export function PopularRestaurants({title, data}) {
    const navigate = useNavigate()

    return (< section className={styles.popularRestaurants} >
        <h2>{title}</h2>
        <div className={styles.restaurantLogos}>
            {data.map((restaurant, index) => (
                <div key={index} className={styles.restaurantLogo}>
                    <img 
                        src={restaurant.logo}
                        alt={"restaturant logo"}
                        className={styles.restaurantLogoImg}
                        onClick={() => navigate("/restaurant/" + restaurant._id)}
                    />
                </div>
            ))}
        </div>
    </section >
    )
}