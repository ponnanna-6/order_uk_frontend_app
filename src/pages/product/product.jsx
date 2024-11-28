// HomeScreen.js
import React from 'react';
import styles from './product.module.css';
import food1 from '../../assets/food/food1.png'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { PopularRestaurants } from '../../components/popularRestaurants/popularRestaurants';
import { useParams } from 'react-router-dom';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import MapWithInfoCard from '../../components/map/map';


const Product = () => {

    const { id } = useParams();
    const position = [51.505, -0.09];

    return (
        <div className={styles.container}>
            {/* Header Section */}
            <Header />

            {/* Product Summary */}
            <SummaryCard />

            {/* Map */}
            <MapWithInfoCard/>

            {/* Popular Restaurants */ }
            <PopularRestaurants title={"Similar Restaurants"} />

            {/* Footer Section */ }
            <Footer />
        </div >
    );
};

export default Product;
