import { useNavigate, useParams } from 'react-router-dom'
import styles from './popularRestaurants.module.css'
import { getAllRestaurants } from '../../services/restaurant';
import { useEffect, useState } from 'react';

export function PopularRestaurants({title}) {
    
    const [restaurants, setRestaurants] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const restaurantData = await getAllRestaurants()
            setRestaurants(restaurantData.data)
        }
        getData()
    }, [])

    function onClick(restaurantId) {
        navigate("/restaurant/" + restaurantId)
        window.location.reload();
        window.scrollTo(0, 0);
    }

    return (< section className={styles.popularRestaurants} >
        <h2>{title ? title : "Similar Restaurants"}</h2>
        <div className={styles.restaurantLogos}>
            {restaurants.map((restaurant, index) => (
                <div key={index} className={styles.restaurantLogo}>
                    <img 
                        src={restaurant.logo}
                        alt={"restaturant logo"}
                        className={styles.restaurantLogoImg}
                        onClick={() => onClick(restaurant._id)}
                    />
                </div>
            ))}
        </div>
    </section >
    )
}