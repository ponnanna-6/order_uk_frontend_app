// HomeScreen.js
import React, { useEffect, useState } from 'react';
import styles from './product.module.css';
import food1 from '../../assets/food/food1.png'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { PopularRestaurants } from '../../components/popularRestaurants/popularRestaurants';
import { useParams } from 'react-router-dom';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import MapWithInfoCard from '../../components/map/map';
import { getAllRestaurants, getRestaurantById } from '../../services/restaurant';
import { InfoSection } from '../../components/infoSection/infoSection';
import { CustomerReviews } from '../../components/customerReviews/customerReviews';


const Product = () => {
    const [restaurants, setRestaurants] = useState([])
    const [restaturantById, setRestautantById] = useState([])

    const { id } = useParams();
    const position = [51.505, -0.09];

    useEffect(() => {
        const getData = async() => {
            const restaurantData = await getAllRestaurants()
            const restaturantById = await getRestaurantById(id)
            setRestaurants(restaurantData.data)
            setRestautantById(restaturantById.data)
        }
        getData()
    }, [])

    return (
        <div className={styles.container}>
            {/* Header Section */}
            <Header />

            {/* Product Summary */}
            <SummaryCard restaurantData={restaturantById}/>

            {/* Info Section */}
            <InfoSection/>

            {/* Map */}
            <MapWithInfoCard/>

            {/* Customer Reviews */ }
            <CustomerReviews/>

            {/* Popular Restaurants */ }
            <PopularRestaurants title={"Similar Restaurants"} data={restaurants}/>

            {/* Footer Section */ }
            <Footer />
        </div >
    );
};

export default Product;
