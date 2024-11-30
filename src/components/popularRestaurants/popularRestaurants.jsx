import { useNavigate } from 'react-router-dom'
import styles from './popularRestaurants.module.css'
import { getAllRestaurants } from '../../services/restaurant';
import { useEffect, useState } from 'react';

export function PopularRestaurants() {
    
    const [restaurants, setRestaurants] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const restaurantData = await getAllRestaurants()
            setRestaurants(restaurantData.data)
        }
        getData()
    }, [])

    return (< section className={styles.popularRestaurants} >
        <h2>Popular Restaurants</h2>
        <div className={styles.restaurantLogos}>
            {restaurants.map((restaurant, index) => (
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