import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from "react"
import Nav from '../components/Nav'
import Board from '../components/Board/Board'
import KeyBoard from '../components/Keyboard/KeyBoard'

export default function Home() {

  const [attempts, setAttempts] = useState(6)
  const [guessRow, setGuessRow] = useState(0)
  const [spaceInRow, setSpaceInRow] = useState(0)
  const [allGuesses, setAllGuesses] = useState([])
  const [wordToGuess, setWordToGuess] = useState([])
  const [guessedWord, setGuessedWord] = useState([])

  useEffect(() => {
    setWordToGuess(["F", "A", "C", "T", "S"])
    checkGameOver(guessRow, attempts)
  }, [guessRow])

  const submitGuess = () => {
    console.log("Guessing...")
    //TODO: Check if guessedWord is the same length as the word
    if (guessedWord.length === wordToGuess.length) {
      console.log("guess matches word length")
      // TODO: enable the Enter key

      // Check if word is a legit word
        // If legit word: check if the letters belongs to word
          checkLetters(guessedWord, wordToGuess)
          checkWin(guessedWord, wordToGuess)
          setAllGuesses(prevState => [...prevState, guessedWord])
          setGuessedWord([])
          setGuessRow(prevState => prevState + 1)  

      // If not legit word: show alert

    } else {
      alert("Type the full word")
      // TODO: disable the Enter key
    }  
  }

  const checkLetters = (guess, word) => {
    guess.forEach(letter => {
      let indexFound = word.indexOf(letter)
      if (indexFound >= 0) {
        // Letter has been found
        if (guess.indexOf(letter) === indexFound) {
          console.log(`${letter} is in the correct place`)
          // Color space green
        } else {
          console.log(`${letter} is in the wrong place`)
          // Color space yellow
        }
      } else {
        console.log(`${letter} not found`)
      }
    })
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
