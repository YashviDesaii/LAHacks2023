import React from 'react'
import Flashcard from './Flashcard';
import './Flashcard.css'


export default function FlashcardList({ flashcards }) {
  return (
    <div className="flashcards-container">
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })}
    </div>
  )
}
