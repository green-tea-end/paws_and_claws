import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
    return (
        <div>
            <p className={styles.contact}>–CONTACT–</p>
            <form>
                <div className={styles.input_fields}>
                    <input className={styles.input} type="text" placeholder="Name" />
                    <input className={styles.input} type="text" placeholder="Phone" />
                    <input className={styles.input} type="text" placeholder="Email address" />
                </div>
                <textarea className={styles.textarea} placeholder="Message"></textarea>
                <button className={styles.contact_us} type="submit">CONTACT US</button>
            </form>
        </div>
    )
}