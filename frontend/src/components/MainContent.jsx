import dog from '/dog.png'
import dog2 from '/dog2.png'
import dog3 from '/dog3.png'

export default function MainContent() {
    return (
        <div class="content_1">
            <div class="slider">
                <div class="slides">
                    <div class="slide"><img src={ dog } /></div>
                    <div class="slide"><img src={ dog2 } /></div>
                    <div class="slide"><img src={ dog3 } /></div>
                </div>
                <button class="button-arrow left"></button>
                <button class="button-arrow right"></button>
            </div>

            <div class="intro_text">
                <p class="intro_text_1">PROVIDING HIGH-QUALITY PET <span class="pr">PR</span>ODUCTS</p>
                <p class="intro_text_2">For Orders Call us Today: 985-245-1730</p>
             </div>
        </div>
    )
}