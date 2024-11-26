import styles from './popularRestaurants.module.css'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
    cloud: {
        cloudName: "dgs9nsrid"
    }
});
export function PopularRestaurants({title}) {
    const restaurantsPath = "cuvette-food-app/Popular restaurants"
    const restaurantLogos = {
        mc_d: `${restaurantsPath}/mc_d`,
        papa_j: `${restaurantsPath}/papa_johns`,
        kfc: `${restaurantsPath}/kfc`,
        texas_chicken: `${restaurantsPath}/texas_chicken`,
        burger_king: `${restaurantsPath}/burger_king`,
        shaurma: `${restaurantsPath}/shaurma`,
    }
    return (< section className={styles.popularRestaurants} >
        <h2>{title}</h2>
        <div className={styles.restaurantLogos}>
            {Object.keys(restaurantLogos).map((restaurants) => (
                <div key={restaurants} className={styles.restaurantLogo}>
                    <AdvancedImage 
                        cldImg={cld.image(restaurantLogos[restaurants])}
                        className={styles.restaurantLogoImg}
                    />
                </div>
            ))}
        </div>
    </section >
    )
}