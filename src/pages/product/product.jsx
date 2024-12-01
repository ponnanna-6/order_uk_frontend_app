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
import { getAllFood } from '../../services/food';
import FoodCard from '../../components/foodCard/foodCard';
import Cart from '../../components/cart/cart';
import { addItemsToCart, getCartById } from '../../services/cart';


const Product = () => {
    const [restaturantById, setRestautantById] = useState([])
    const [fooditems, setFoodItems] = useState([])
    const [cartData, setCartData] = useState([])
    const [allFoodItems, setAllFoodItems] = useState([])
    const [shouldRefetchCart, setShouldRefetchCart] = useState(false);
    const [cartId, setCartId] = useState(null);

    const { id } = useParams();
    const position = [51.505, -0.09];

    useEffect(() => {
        const getData = async () => {
            const restaturantById = await getRestaurantById(id)
            const fooditems = await getAllFood()

            setRestautantById(restaturantById.data)
            setAllFoodItems(fooditems.data)

            const categories = [...new Set(fooditems.data.map(foodItem => foodItem.category))]

            let foodItemsByCategory = {}
            categories.map((category) => {
                foodItemsByCategory[category] = fooditems.data.filter((foodItem) => foodItem.category === category)
            })

            setFoodItems(foodItemsByCategory)
        }

        window.scrollTo(0, 0);
        getData()
    }, [])

    useEffect(() => {
        console.log("refetching cart")
        const getCartData = async () => {
            const cartData = await getCartById();
            setCartData(cartData.data.cart.items);
            setCartId(cartData.data.cart._id);
        };

        getCartData();
    }, [shouldRefetchCart]);

    const addItemToCart = async (itemId) => {
        const tempCartData = cartData
        const itemIndex = tempCartData.findIndex((item) => item.foodItem === itemId);
        const foodById = allFoodItems.find((foodItem) => foodItem._id === itemId)

        if (itemIndex !== -1) {
            tempCartData[itemIndex].quantity += 1;
            await addItemsToCart({ items: tempCartData })
        } else {
            const newItem = {
                foodItem: itemId,
                foodInfo: {
                    name: foodById.name,
                    category: foodById.category,
                    description: foodById.description,
                    price: foodById.price,
                    image: foodById.image
                },
                quantity: 1
            };
            await addItemsToCart({ items: [...tempCartData, newItem] })
        }
        setShouldRefetchCart(!shouldRefetchCart)
    };

    const removeItemFromCart = async (itemId) => {
        const tempCartData = [...cartData];
        const itemIndex = tempCartData.findIndex((item) => item.foodItem === itemId);

        if (itemIndex !== -1) {
            if (tempCartData[itemIndex].quantity > 1) {
                tempCartData[itemIndex].quantity -= 1;
            } else {
                tempCartData.splice(itemIndex, 1);
            }
            setCartData(tempCartData);
            await addItemsToCart({ items: tempCartData });
        }
        setShouldRefetchCart(!shouldRefetchCart)
    };

    const copyLink = async () => {
        await navigator.clipboard.writeText(`${window.location.origin}/share/${cartId}`);
        alert("Link copied to clipboard!")
    }

    return (
        <div className={styles.parentContainer}>
            {/* Header Section */}
            <Header />

            {/* Product Summary */}
            <SummaryCard restaurantData={restaturantById} />

            <div className={styles.container}>
                {/* Food Items Section */}
                <div className={styles.foodItemsSection}>
                    {Object.keys(fooditems).map((category) => (
                        <div key={category} className={styles.categorySection}>
                            <h2>{category}</h2>
                            <div className={styles.foodItems}>
                                {fooditems[category].map((foodItem) => (
                                    <FoodCard
                                        key={foodItem._id}
                                        id={foodItem._id}
                                        name={foodItem.name}
                                        price={foodItem.price}
                                        description={foodItem.description}
                                        img={foodItem.image}
                                        addItemToCart={addItemToCart}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cart Section */}
                <div className={styles.cartContainer}>
                    {cartData.length > 0 && (
                        <Cart
                            items={cartData || []}
                            discounts={12}
                            deliveryFee={5}
                            removeItemFromCart={removeItemFromCart}
                            copyLink={copyLink}
                        />
                    )}
                </div>
            </div>



            {/* Info Section */}
            <InfoSection />

            {/* Map */}
            <MapWithInfoCard />

            {/* Customer Reviews */}
            <CustomerReviews />

            {/* Popular Restaurants */}
            <PopularRestaurants />

            {/* Footer Section */}
            <Footer />
        </div >
    );
};

export default Product;
