import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from "react"
import Nav from '../components/Nav'
import Board from '../components/Board/Board'
import KeyBoard from '../components/Keyboard/KeyBoard'

export default function Home() {
  const colors = {
    green: '#538D4E', 
    yellow: '#B59F3C', 
    gray: '#3A3A3B'
  }

  const [attempts, setAttempts] = useState(6)
  const [numOfWordsGuessed, setNumOfWordsGuessed] = useState(0)
  const [guessRow, setGuessRow] = useState(0)
  const [allGuesses, setAllGuesses] = useState([])
  const [wordToGuess, setWordToGuess] = useState([])
  const [guessedWord, setGuessedWord] = useState([])

  useEffect(() => {
    setWordToGuess(["F", "A", "C", "T", "S"])
    checkGameOver(guessRow, attempts)
  }, [guessRow])

  const submitGuess = () => {
    console.log("Guessing...")
    if (guessedWord.length === wordToGuess.length) {
      console.log("guess matches word length")
      // TODO: enable the Enter key

      // TODO: Check if word is a legit word
        // If legit word: check if the letters belongs to word
          checkLetters(guessedWord, wordToGuess, numOfWordsGuessed)
          setNumOfWordsGuessed(numOfWordsGuessed + 1)
          checkWin(guessedWord, wordToGuess)
          setAllGuesses(prevState => [...prevState, guessedWord])
          setGuessedWord([])
          setGuessRow(prevState => prevState + 1)  

      // TODO: If not legit word: show alert

    } else {
      alert("Not enough letters")
    }  
  }

  const checkLetters = (guess, word, numOfGuesses) => {
    guess.forEach(letter => {
      let indexFound = word.indexOf(letter)
      let guessIndex = guess.indexOf(letter)
      let elementId = numOfGuesses * 5 + guessIndex
      if (indexFound >= 0) {
        // Letter has been found
        if (guessIndex === indexFound) {
          console.log(`${letter} is in the correct place`)
          changeLetterColor(colors.green, elementId) // Green
        } else {
          console.log(`${letter} is in the wrong place`)
          changeLetterColor(colors.yellow, elementId) // Yellow
        }
      } else {
        console.log(`${letter} not found`)
        changeLetterColor(colors.gray, elementId) // Gray
      }
    })
  }

  const changeLetterColor = (color, id) => {
    console.log(`Changing color to: ${color} on id: ${id}`);
    const el = document.getElementById(id)
    el.style.backgroundColor = color
    // el.classList.add(`bg-${color}-500`)
  }

  const checkWin = (guess, word) => {
    console.log("Checking win condition...");

    if (guess.join('') === word.join('')) {
      console.log("You win!");
    } else {
      console.log("Wrong guess");
    }
  }
  
  const checkGameOver = (row, attempts) => {
    if (row === attempts) {
      console.log("Game Over!");
    }
  }

  return (
    <div className="bg-black grid grid-rows-[.35fr_3fr_1fr] h-screen">
      <div className="">
        <Nav />
      </div>
      <div className="">
        <Board 
          attempts={attempts} 
          guessRow={guessRow}
          wordToGuess={wordToGuess}
          guessedWord={guessedWord} 
          allGuesses={allGuesses}
        />
      </div>
      <div className="">
        <KeyBoard 
          wordToGuess={wordToGuess} 
          guessedWord={guessedWord} 
          setGuessedWord={setGuessedWord}
          submitGuess={submitGuess}
          />
      </div>       
    </div>
  )
}
