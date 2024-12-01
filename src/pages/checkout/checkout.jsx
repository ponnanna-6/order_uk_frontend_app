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
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const getCartData = async () => {
            const cartData = await getCartById();
            setCartData(cartData.data.cart.items);

            let totalAmount = cartData.data.cart.items.reduce((total, item) => {
                return total + (item.foodInfo.price * item.quantity);
            }, 0);
        
            //applying discount and delivery charge
            totalAmount = totalAmount - 12 + 5;
            console.log(totalAmount)
            setTotalAmount(totalAmount);
        };

        getCartData();
    }, []);

    const renderComponent = () => {
        switch (activeStep) {
            case "OrderSummary":
                return <OrderSummary
                        cartData={cartData}
                        onClickDelivery={() => setActiveStep("Delivery")}
                        onClickPayment={() => setActiveStep("Payment")}
                        totalAmount={totalAmount}
                    />;
            case "Delivery":
                return <Delivery onBack={() => setActiveStep("OrderSummary")} />;
            case "Payment":
                return <Payment onBack={() => setActiveStep("OrderSummary")} cartData={cartData} totalAmount={totalAmount+10}/>;
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