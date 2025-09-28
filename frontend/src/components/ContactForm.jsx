import React, { useState, useEffect } from 'react';
import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
    const [inputFields, setInputFields] = useState({
       name: "", phone: "", email: "", message: ""
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (inputValues) => {
       let errors = {};

       // Для имени
       if (!inputValues.name.trim()) {
         errors.name = "Name is required";
       } else if (inputValues.name.length > 15) {
         errors.name = "Name is too long (max 15 characters)";
       } else if (inputValues.name.length < 3) {
         errors.name = "Name is too short (min 3 characters)";
       } else if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(inputValues.name)) {
         errors.name = "Name should not contain special characters";
       }

       // Для телефона
       if (inputValues.phone.trim()) {
           if (!/^\d+$/.test(inputValues.phone.replace(/-/g, ''))) {
             errors.phone = "Phone should contain only numbers";
           } else if (inputValues.phone.replace(/-/g, '').length < 10) {
             errors.phone = "Phone should be at least 10 digits";
           } else if (inputValues.phone.length > 15) {
             errors.phone = "Phone is too long";
           }
       }

       // Для почты
       if (!inputValues.email.trim()) {
         errors.email = "Email is required";
       } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValues.email)) {
         errors.email = "Email is not valid";
       }

       // Для сообщения
       if (!inputValues.message.trim()) {
         errors.message = "Message is required";
       } else if (inputValues.message.length > 500) {
         errors.message = "Message is too long (max 500 characters)";
       } else if (inputValues.message.length < 10) {
         errors.message = "Message is too short (min 10 characters)";
       }

       return errors;
     };

    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
     };

    const handleSubmit = (event) => {
       event.preventDefault();
       setErrors(validateValues(inputFields));
       setSubmitting(true);
    };

    const finishSubmit = () => {
        alert("Thank you for your message! We will contact you soon.");
        setInputFields({name: "", phone: "", email: "", message: ""});
        setSubmitting(false);
    };

    useEffect(() => {
       if (Object.keys(errors).length === 0 && submitting) {
         finishSubmit();
       }
    }, [errors]);

    return (
        <div>
            <p className={styles.contact}>–CONTACT–</p>
            {Object.keys(errors).length === 0 && submitting ? (
                <span className="success">Successfully submitted</span>
            ) : null}
            <form onSubmit={handleSubmit}>
                <div className={styles.input_fields}>
                    <div className={styles.input_wrapper}>
                        <input
                            className={`${styles.input} ${errors.name ? styles.error : ''}`}
                            type="name"
                            name="name"
                            value={inputFields.name}
                            onChange={handleChange}
                            placeholder="Name *"
                        />
                        {errors.name ? (
                            <p className={styles.error_text}>{errors.name}</p>
                        ) : null}
                    </div>

                    <div className={styles.input_wrapper}>
                        <input
                            className={`${styles.input} ${errors.phone ? styles.error : ''}`}
                            type="tel"
                            name="phone"
                            value={inputFields.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                        />
                        {errors.phone ? (
                            <p className={styles.error_text}>{errors.phone}</p>
                        ) : null}
                    </div>

                    <div className={styles.input_wrapper}>
                        <input
                            className={`${styles.input} ${errors.email ? styles.error : ''}`}
                            type="text"
                            name="email"
                            value={inputFields.email}
                            onChange={handleChange}
                            placeholder="Email address *"
                        />
                        {errors.email ? (
                            <p className={styles.error_text}>{errors.email}</p>
                        ) : null}
                    </div>
                </div>

                <div className={styles.textarea_wrapper}>
                    <textarea
                        className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                        name="message"
                        value={inputFields.message}
                        onChange={handleChange}
                        placeholder="Message *"
                    ></textarea>
                        {errors.message ? (
                            <p className={styles.error_text}>{errors.message}</p>
                        ) : null}
                </div>

                <button className={styles.contact_us} type="submit">CONTACT US</button>
            </form>
        </div>
    )
}


// import React, { useState } from 'react';
// import styles from '../styles/ContactForm.module.css';
//
// export default function ContactForm() {
//     return (
//         <div>
//             <p className={styles.contact}>–CONTACT–</p>
//             <form>
//                 <div className={styles.input_fields}>
//                     <input className={styles.input} type="text" placeholder="Name" required/>
//                     <input className={styles.input} type="text" placeholder="Phone" />
//                     <input className={styles.input} type="text" placeholder="Email address" required/>
//                 </div>
//                 <textarea className={styles.textarea} placeholder="Message" required></textarea>
//                 <button className={styles.contact_us} type="submit">CONTACT US</button>
//             </form>
//         </div>
//     )
// }