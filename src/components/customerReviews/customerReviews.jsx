import React, { useRef } from "react";
import styles from "./customerReviews.module.css";
import RatingCard from "../ratingCard/ratingCard";

export function CustomerReviews({ isMobile }) {
    const reviewsRef = useRef(null);

    const reviews = [
        {
            reviewer: "St Glx",
            location: "South London",
            rating: "★★★★★",
            date: "24th September, 2023",
            reviewText: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald’s standard – hot and satisfying.",
            img: "https://res.cloudinary.com/dgs9nsrid/image/upload/v1733161147/cuvette-food-app/ix9qyezc0rm2jvlhnnyp.jpg"
        },
        {
            reviewer: "Ava L.",
            location: "Central London",
            rating: "★★★★☆",
            date: "10th October, 2023",
            reviewText: "A decent experience overall. The staff were polite, but the food took a bit longer than expected.",
            img: "https://res.cloudinary.com/dgs9nsrid/image/upload/v1733259509/cuvette-food-app/vvpzwsqltiev0bxbykhc.png"
        },
        {
            reviewer: "John D.",
            location: "North London",
            rating: "★★★★★",
            date: "15th November, 2023",
            reviewText: "Great service and excellent food quality. The place was clean and comfortable, will definitely come again.",
            img: "https://res.cloudinary.com/dgs9nsrid/image/upload/v1733161147/cuvette-food-app/ix9qyezc0rm2jvlhnnyp.jpg"
        },
        {
            reviewer: "Mia W.",
            location: "East London",
            rating: "★★★☆☆",
            date: "20th November, 2023",
            reviewText: "The food was good, but the experience was a bit lacking. The staff seemed distracted and the queue was long.",
            img: "https://res.cloudinary.com/dgs9nsrid/image/upload/v1733259509/cuvette-food-app/vvpzwsqltiev0bxbykhc.png"
        },
        {
            reviewer: "Lucas P.",
            location: "West London",
            rating: "★★★★★",
            date: "5th December, 2023",
            reviewText: "Absolutely fantastic! Fast service and delicious food. This location always exceeds my expectations.",
            img: "https://res.cloudinary.com/dgs9nsrid/image/upload/v1733161147/cuvette-food-app/ix9qyezc0rm2jvlhnnyp.jpg"
        },
        {
            reviewer: "Isabella R.",
            location: "South London",
            rating: "★★★★☆",
            date: "1st December, 2023",
            reviewText: "Overall a good experience, but there was a minor issue with the order being slightly wrong. Still, the staff resolved it quickly.",
            img: "https://res.cloudinary.com/dgs9nsrid/image/upload/v1733259509/cuvette-food-app/vvpzwsqltiev0bxbykhc.png"
        }
    ];

    const scrollLeft = () => {
        if (reviewsRef.current) {
            const containerWidth = reviewsRef.current.offsetWidth; // Get the width of the container
            if (isMobile) {
                reviewsRef.current.scrollBy({ left: containerWidth, behavior: 'smooth' }); // Scroll by 100% of the width
            } else {
                reviewsRef.current.scrollBy({ left: -400, behavior: 'smooth' });
            }
        }
    };

    const scrollRight = () => {
        if (reviewsRef.current) {
            const containerWidth = reviewsRef.current.offsetWidth; // Get the width of the container
            if (isMobile) {
                reviewsRef.current.scrollBy({ left: -containerWidth, behavior: 'smooth' }); // Scroll by 100% of the width
            } else {
                reviewsRef.current.scrollBy({ left: 400, behavior: 'smooth' });
            }
        }
    };

    const renderComponent = () => {
        return <div className={styles.reviewsWrapper}>
            <div className={styles.reviewsContainer} ref={reviewsRef}>
                {reviews.map((review, index) => (
                    <div key={index} className={styles.reviewCard}>
                        <div className={styles.reviewHeader}>
                            <img
                                src={review?.img}
                                alt="Reviewer"
                                className={styles.reviewerImage}
                            />
                            <div>
                                <h3>{review?.reviewer}</h3>
                                <p>{review?.location}</p>
                            </div>
                            <div className={styles.rating}>{review?.rating}</div>
                        </div>
                        <p className={styles.reviewDate}>{review?.date}</p>
                        <p className={styles.reviewText}>
                            {review?.reviewText}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    }

    return (
        <>
            {!isMobile
                ? <section className={styles.customerReviewsSection}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <h2 className={styles.sectionTitle}>Customer Reviews</h2>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <button
                                className={styles.scrollButtonLeft}
                                onClick={scrollLeft}
                                aria-label="Scroll left"
                            >
                                &#8249;
                            </button>
                            <button
                                className={styles.scrollButtonRight}
                                onClick={scrollRight}
                                aria-label="Scroll right"
                            >
                                &#8250;
                            </button>

                        </div>
                    </div>

                    {renderComponent()}

                    <RatingCard rating={4.5} styling={styles.ratingContainer} />
                </section>
                : <section className={styles.customerReviewsSection}>

                    {/* <RatingCard rating={4.5} styling={styles.ratingContainer} /> */}
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <h2 className={styles.sectionTitle}>Customer Reviews</h2>
                    </div>

                    {renderComponent()}

                    <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
                        <button
                            className={styles.scrollButton}
                            onClick={scrollLeft}
                            aria-label="Scroll left"
                        >
                            &#8249;
                        </button>
                        <button
                            className={styles.scrollButton}
                            onClick={scrollRight}
                            aria-label="Scroll right"
                        >
                            &#8250;
                        </button>
                    </div>
                </section>
            }

        </>
    );
}

export default CustomerReviews;
