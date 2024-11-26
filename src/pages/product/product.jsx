// HomeScreen.js
import React from 'react';
import styles from './product.module.css';
import food1 from '../../assets/food/food1.png'
import Header from '../../components/header/header';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import Footer from '../../components/footer/footer';
import { PopularRestaurants } from '../../components/popularRestaurants/popularRestaurants';
import { useParams } from 'react-router-dom';
import SummaryCard from '../../components/SummaryCard/SummaryCard';

const Product = () => {

    const { id } = useParams();

    return (
        <div className={styles.container}>
            <Header />

            {/* Product Summary */}
            <SummaryCard/>

            {/* Popular Restaurants */}
            <PopularRestaurants title={"Similar Restaurants"}/>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Product;
