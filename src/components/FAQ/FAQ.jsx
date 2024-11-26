import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How does Order.UK work?',
      answer: 'Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'Order.UK accepts a variety of payment methods, including credit/debit cards, digital wallets, and cash on delivery.',
    },
    {
      question: 'Can I track my order in real-time?',
      answer: 'Yes, you can track the status of your order with delivery time updates through the Order.UK website or mobile app.',
    },
    {
      question: 'Are there any special discounts or promotions available?',
      answer: 'Order.UK frequently offers special discounts and promotions to our valued customers. Check our website or app for the latest offers.',
    },
    {
      question: 'Is Order.UK available in my area?',
      answer: `Order.UK's service coverage is constantly expanding. Enter your location on our website to see if we're available in your area.`,
    },
  ];

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqHeader}>Know more about us!</h2>
      {faqData.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.faqQuestion}
            onClick={() => handleQuestionClick(index)}
          >
            {item.question}
            {activeIndex === index ? '-' : '+'}
          </div>
          {activeIndex === index && (
            <div className={styles.faqAnswer}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;