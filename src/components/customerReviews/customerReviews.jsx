import React, { useRef } from "react";
import styles from "./customerReviews.module.css";
import RatingCard from "../ratingCard/ratingCard";

export function CustomerReviews({ isMobile }) {
    const reviewsRef = useRef(null);

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

                    <div className={styles.reviewsWrapper}>
                        <div className={styles.reviewsContainer} ref={reviewsRef}>
                            {[1, 2, 3, 4].map((review, index) => (
                                <div key={index} className={styles.reviewCard}>
                                    <div className={styles.reviewHeader}>
                                        <img
                                            src="https://via.placeholder.com/50"
                                            alt="Reviewer"
                                            className={styles.reviewerImage}
                                        />
                                        <div>
                                            <h3>St Glx</h3>
                                            <p>South London</p>
                                        </div>
                                        <div className={styles.rating}>★★★★★</div>
                                    </div>
                                    <p className={styles.reviewDate}>24th September, 2023</p>
                                    <p className={styles.reviewText}>
                                        The positive aspect was undoubtedly the efficiency of the service.
                                        The queue moved quickly, the staff was friendly, and the food was up
                                        to the usual McDonald’s standard – hot and satisfying.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <RatingCard rating={4.5} styling={styles.ratingContainer} />
                </section>
                : <section className={styles.customerReviewsSection}>

                    {/* <RatingCard rating={4.5} styling={styles.ratingContainer} /> */}
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <h2 className={styles.sectionTitle}>Customer Reviews</h2>
                    </div>

                    <div className={styles.reviewsWrapper}>
                        <div className={styles.reviewsContainer} ref={reviewsRef}>
                            {[1, 2, 3, 4].map((review, index) => (
                                <div key={index} className={styles.reviewCard}>
                                    <div className={styles.reviewHeader}>
                                        <img
                                            src="https://via.placeholder.com/50"
                                            alt="Reviewer"
                                            className={styles.reviewerImage}
                                        />
                                        <div>
                                            <h3>St Glx</h3>
                                            <p>South London</p>
                                        </div>
                                        <div className={styles.rating}>★★★★★</div>
                                    </div>
                                    <p className={styles.reviewDate}>24th September, 2023</p>
                                    <p className={styles.reviewText}>
                                        The positive aspect was undoubtedly the efficiency of the service.
                                        The queue moved quickly, the staff was friendly, and the food was up
                                        to the usual McDonald’s standard – hot and satisfying.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
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
