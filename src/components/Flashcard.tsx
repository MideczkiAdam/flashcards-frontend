import { useState } from "react"
import styles from "./Flashcard.module.css"
import type { FlashCardType } from "../pages/Home"

const Flashcard = ({answer,points,question}:FlashCardType) => {

    const [flipped, setFlipped] = useState(false)

  return (
    <div className={styles.flipCard} onClick={()=>setFlipped(true)}>
  <div className={styles.flipCardInner} style={{
    transform: `rotateY(${flipped ? 180: 0}deg)`
  }}>
    <div className={styles.flipCardFront}>
        <h2>{question}</h2>
    </div>
    <div className={styles.flipCardBack}>
        <header style={{background: points > 0 ? "var(--green)" : "var(--red)"}}
        >{points}</header>
        <h2>{answer}</h2>
        <div>
            <button>
                <i className="fa-regular fa-circle-check"></i>
            </button>
            <button>
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
        </div>
    </div>
  </div>
</div>
  )
}

export default Flashcard