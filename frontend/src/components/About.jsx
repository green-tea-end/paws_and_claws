import { useState } from 'react'
import styles from '../styles/About.module.css';

export default function About() {

    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { question: "How does the pet matching quiz work?", answer: "Our quiz asks about your lifestyle, living situation, and preferences to suggest the most suitable pets." },
        { question: "Is your service free?", answer: "Yes, all our resources and the matching quiz are completely free to use." },
        { question: "Do you work with animal shelters?", answer: "We partner with local shelters to help promote adoptable animals." },
        { question: "Can I get advice on pet care?", answer: "Yes, we provide comprehensive guides on pet care, training, and health." }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className={styles.about}>
                <h1>About Paws and Claws</h1>
                <div className={styles.content}>
                    <div className={styles.text_section}>
                        <h2>Our Story</h2>
                        <p>Welcome to Paws and Claws - your trusted partner in finding the perfect pet companion.</p>
                        <p>Founded in 2023, we are dedicated to helping animals find loving homes and assisting people in making informed decisions about pet adoption.</p>
                    </div>

                    <div className={styles.text_section}>
                        <h2>Our Mission</h2>
                        <p>We believe that every animal deserves a loving home. Our mission is to:</p>
                        <ul>
                            <li>Help potential pet owners find their ideal companion</li>
                            <li>Provide educational resources about pet care</li>
                            <li>Support animal welfare and responsible ownership</li>
                        </ul>
                    </div>

                    <div className={styles.text_section}>
                        <h2>Why Choose Us?</h2>
                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <h3>Expert Guidance</h3>
                                <p>Our quiz helps match you with the perfect pet based on your lifestyle.</p>
                            </div>
                            <div className={styles.feature}>
                                <h3>Community Focused</h3>
                                <p>We work with local shelters and rescue organizations.</p>
                            </div>
                            <div className={styles.feature}>
                                <h3>Free Resources</h3>
                                <p>Access to valuable information about pet care and training.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.about}>
                <h1>Frequently Asked Questions</h1>
                <div className={styles.faq_section}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faq_item}>
                            <button
                                className={styles.faq_question}
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className={styles.arrow}>{activeIndex === index ? '−' : '+'}</span>
                            </button>
                            {activeIndex === index && (
                                <div className={styles.faq_answer}>
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}