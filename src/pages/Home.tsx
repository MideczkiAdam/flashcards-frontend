import { useEffect, useState } from 'react'
import Flashcard from '../components/Flashcard'
import axios from 'axios'

export type FlashCardType = {
  id: number,
  question: string,
  answer: string,
  points: number
}

const Home = () => {

  const [cards, setCards] = useState<FlashCardType[]>([])

  useEffect(()=>{
    axios.get("cards.json")
    .then(response => setCards(response.data))
  },[])

  return (
    <>
        {cards.length > 0 && <Flashcard key={cards[0].id} {...cards[0]} />} 
    </>
  )
}

export default Home