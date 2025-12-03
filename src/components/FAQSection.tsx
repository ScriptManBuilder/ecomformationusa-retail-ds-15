import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Retail Stores & Brick-and-Mortar Businesses',
      answer: 'Merchants acquiring customers through physical retail locations and in-store purchases. We specialize in recovering failed payments from point-of-sale transactions and retail checkout flows.'
    },
    {
      question: 'Card-Present & POS Terminal Merchants',
      answer: 'Businesses processing high-volume in-store transactions through point-of-sale systems. Our system is optimized for retail checkout environments and card-present payment processing with elevated decline rates.'
    },
    {
      question: 'Multi-Location Retail Chains',
      answer: 'Both single-location shops and multi-store retail chains. Our decline recovery technology works seamlessly with your existing POS systems and retail management infrastructure.'
    },
    {
      question: 'Specialty & Boutique Retail',
      answer: 'Merchants running specialty stores, boutiques, and niche retail locations with in-store purchases. Recover more revenue from your foot traffic by salvaging declined in-store transactions.'
    },
    {
      question: 'B2C Retail Sales',
      answer: 'Business-to-consumer retail companies processing payments at physical locations. Reduce payment friction in your retail checkout process and improve conversion rates on in-store transactions.'
    },
    {
      question: 'Retail Customer Service Desks',
      answer: 'Retail locations handling returns, exchanges, and payment updates at customer service counters. Perfect for reducing involuntary churn and recovering failed recurring payments through in-store assistance.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Who We Serve</FAQTitle>
        <FAQDescription>
          We support businesses across multiple industries and payment environments
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
