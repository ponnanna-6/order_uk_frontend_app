import React, { useEffect, useState } from 'react';
import { IoStarSharp, IoStarOutline, IoStarHalfSharp } from 'react-icons/io5';
import styles from './ratingCard.module.css';

function RatingCard({ rating }) {
    const [fullStars, setFullStars] = useState(0);
    const [halfStars, setHalfStars] = useState(0);
    const [emptyStars, setEmptyStars] = useState(0);

    useEffect(() => {
        if(rating>5){
            rating = 5
        }
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;
        setFullStars(fullStars);
        setHalfStars(halfStars);
        setEmptyStars(emptyStars);
    }, [rating])

    return (
        <section className={styles.container}>
            <p>{rating}</p>

            <div>
                {/* Render full stars */}
                {fullStars > 0 && [...Array(fullStars)].map((_, index) => (
                    <IoStarSharp key={`full-${index}`} color="#FC8A06" />
                ))}

                {/* Render half stars */}
                {halfStars > 0 && [...Array(halfStars)].map((_, index) => (
                    <IoStarHalfSharp key={`half-${index}`} color="#FC8A06" />
                ))}

                {/* Render full stars */}
                {emptyStars > 0 && [...Array(emptyStars)].map((_, index) => (
                    <IoStarOutline key={`full-${index}`} color="#FC8A06" />
                ))}
            </div>

            <p>1370 reviews</p>
        </section>
    );
}

export default RatingCard;
