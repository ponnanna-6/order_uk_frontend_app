import styles from './SummaryCard.module.css'

export default function SummaryCard() {
    const card = {
        id: 1,
        image: 'https://res.cloudinary.com/dgs9nsrid/image/upload/v1732635225/cuvette-food-app/partner.png',
        subtitle: 'Im loving it',
        title: 'Mc donalds east london',
        minOrder: "$100",
        deliveryTime: "30 min",
        openTill: "3:00 PM"
    }

    return (
        <section className={styles.container}>
            <div key={card.id} className={styles.cardPR}>
                <div className={styles.imageContainer}>
                    <img src={card.image} alt={card.title} />
                    <div className={styles.content}>
                        <p className={styles.subtitle}>{card.subtitle}</p>
                        <h3 className={styles.title}>{card.title}</h3>
                        <div style={{ display: "flex", flexDirection: "row"}}>
                            <div className={styles.button}>{card.minOrder}</div>
                            <div className={styles.button}>{card.deliveryTime}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.openInfo}>
                    <h3>{`Open until ${card.openTill}`}</h3>
                </div>
            </div>
        </section>
    )
}