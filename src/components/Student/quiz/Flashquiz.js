import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from './FlashcardList';
import Flashcard from './Flashcard';
import axios from 'axios'
import './Flashcard.css'
import StudentClasses from "../StudentHome.module.css";
import StudentPageLayout from '../Layout/StudentPageLayout';

function Flashquiz() {
  const [flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])

  const categoryEl = useRef()
  const amountEl = useRef()

  useEffect(() => {
    // axios
    //   .get('https://opentdb.com/api_category.php')
    //   .then(res => {
    //     setCategories(res.data.trivia_categories)
    //   })
    setCategories([{"id":1,"name":"Easy"},{"id":2,"name":"Medium"},{"id":3,"name":"Hard"}]);

  }, [])

  useEffect(() => {
   
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML= str
    return textArea.value
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios
    .get('https://opentdb.com/api.php', {
      params: {
        amount: amountEl.current.value,
        category: categoryEl.current.value
      }
    })
    .then(res => {
      setFlashcards(res.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer)
        const options = [
          ...questionItem.incorrect_answers.map(a => decodeString(a)),
          answer
        ]
        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random() - .5)
        }
      }))
    })
  }

  return (
    <>
    <StudentPageLayout menuSelect="4">
        <div style={{marginTop: 20,overflow: 'scroll',width: '100%'}}>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map(category => {
              return <option value={category.id} key={category.id}>{category.name}</option>
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Number of Questions</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
      </div>
      </StudentPageLayout>
    </>
  );
}

export default Flashquiz;
