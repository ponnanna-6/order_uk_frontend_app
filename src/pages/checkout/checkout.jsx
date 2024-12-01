import React, { useEffect, useState } from 'react';
import styles from './checkout.module.css';
import { getCartById } from '../../services/cart';
import Header from '../../components/header/header';
import { PopularRestaurants } from '../../components/popularRestaurants/popularRestaurants';
import Footer from '../../components/footer/footer';
import OrderSummary from '../../components/orderSummary/orderSummary';
import Delivery from '../../components/delivery/delivery';
import Payment from '../../components/payment/payment';

const Checkout = ({ items }) => {
    const [cartData, setCartData] = useState([]);
    const [activeStep, setActiveStep] = useState("OrderSummary");

    useEffect(() => {
        const getCartData = async () => {
            const cartData = await getCartById();
            setCartData(cartData.data.cart.items);
            console.log(cartData.data.cart.items)
        };

        getCartData();
    }, []);

    const renderComponent = () => {
        switch (activeStep) {
            case "OrderSummary":
                return <OrderSummary cartData={cartData} onClickDelivery={() => setActiveStep("Delivery")} onClickPayment={() => setActiveStep("Payment")} />;
            case "Delivery":
                return <Delivery onBack={() => setActiveStep("OrderSummary")} />;
            case "Payment":
                return <Payment onBack={() => setActiveStep("OrderSummary")} cartData={cartData}/>;
            default:
                return <OrderSummary cartData={cartData} onNext={() => setActiveStep("Delivery")} />;
        }
    };

    return (
        <div className={styles.parentContainer}>
            <Header/>
            {renderComponent()}
            <PopularRestaurants/>
            <Footer/>
        </div>
    );
};

export default Checkout;