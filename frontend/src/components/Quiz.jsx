import { useState } from 'react';
import styles from '../styles/Quiz.module.css';
import { FaPaw } from 'react-icons/fa';

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showError, setShowError] = useState(false);

    const question = questions[currentQuestion];
    const isLastQuestion = currentQuestion === questions.length - 1;

    function isOptionSelected(option) {
        return selectedAnswers[currentQuestion] === option;
    }

    function handleNext() {
        if (!selectedAnswers[currentQuestion]) {
            setShowError(true);
            return;
        }

        setShowError(false);

        if (isLastQuestion) {
            alert('Thank you for completing the Pet Owner Survey!\nYour feedback is very valuable to us.');
            setTimeout(() => {
                setCurrentQuestion(0);
                setSelectedAnswers({});
            }, 1000);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function handleBack() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setShowError(false);
        }
    }

    return (
        <div className={styles.quiz_container}>
            <h2 className={styles.quiz_title}>
                <FaPaw /> Pet Owner Survey
            </h2>

            <h3 className={styles.quiz_question}>
                {currentQuestion + 1}. {question.question}
            </h3>

            {showError && (
                <div className={styles.error_message}>
                    Please select an answer
                </div>
            )}

            <ul className={styles.options_list}>
                {question.options.map(function(option, index) {
                    return (
                        <li
                            key={index}
                            className={isOptionSelected(option) ? styles.selected : styles.option}
                            onClick={() => {
                                setSelectedAnswers({...selectedAnswers, [currentQuestion]: option});
                                setShowError(false);
                            }}
                        >
                            {option}
                        </li>
                    );
                })}
            </ul>

            <div className={styles.navigation_buttons}>
                <button
                    onClick={handleBack}
                    disabled={currentQuestion === 0}
                    className={styles.back_button}
                >
                    ← Back
                </button>

                <button
                    onClick={handleNext}
                    className={styles.next_button}
                >
                    {isLastQuestion ? 'Finish' : 'Next →'}
                </button>
            </div>

            <div className={styles.progress}>
                {currentQuestion + 1} of {questions.length} questions
            </div>
        </div>
    );
}


const questions = [
    {
        question: "How often do you buy pet products?",
        options: ["Weekly", "Monthly", "Every 6 months", "Rarely"]
    },
    {
        question: "What type of food do you prefer for your pet?",
        options: ["Dry food", "Wet food", "Natural food", "Combined feeding"]
    },
    {
        question: "Which pet food brand do you buy most often?",
        options: ["Royal Canin", "Purina", "Hills", "Other brand"]
    },
    {
        question: "How much are you willing to spend monthly on pet food?",
        options: ["Up to 1000 rub", "1000-3000 rub", "3000-5000 rub", "More than 5000 rub"]
    },
    {
        question: "Do you buy therapeutic (prescription) pet food?",
        options: ["Yes, regularly", "Sometimes", "Only on veterinarian recommendation", "No"]
    },
    {
        question: "How often do you buy pet accessories?",
        options: ["Once a month", "Every 3 months", "Every 6 months", "Only when necessary"]
    },
    {
        question: "How do you choose products for your pet?",
        options: ["Veterinarian recommendation", "Online reviews", "Price", "Brand reputation"]
    },
    {
        question: "How important is the ingredient list for you when choosing pet food?",
        options: ["Very important", "Moderately important", "Not very important", "Don't pay attention"]
    },
    {
        question: "Where do you usually buy pet products?",
        options: ["Pet store", "Supermarket", "Online store", "Veterinary pharmacy"]
    },
    {
        question: "What type of toys does your pet prefer?",
        options: ["Balls", "Plush toys", "Interactive toys", "Rope toys"]
    }
];