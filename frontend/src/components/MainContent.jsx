import dog from '/dog.png'
import dog2 from '/dog2.png'
import dog3 from '/dog3.png'
import styles from '../styles/MainContent.module.css';

export default function MainContent() {
    return (
        <div className={ styles.content }>
            <img src={ dog } className={ styles.img_dog }/>
            <div className={ styles.intro_text }>
                <p className={ styles.intro_text_1 }>PROVIDING HIGH-QUALITY PET <span className={ styles.pr }>PR</span>ODUCTS</p>
                <p className={ styles.intro_text_2 }>For Orders Call us Today: 985-245-1730</p>
            </div>
        </div>
    )
}