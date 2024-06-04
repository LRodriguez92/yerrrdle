import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useCallback } from "react"
import Nav from '../components/Nav'
import Board from '../components/Board/Board'
import KeyBoard from '../components/Keyboard/KeyBoard'
import Alert from '../components/Alert'
import HowTo from '../components/HowTo'
import words from '../components/data/words'

export default function Home() {
  const colors = {
    // Must be rgb values
    green: 'rgb(83, 141, 78)',
    yellow: 'rgb(181, 159, 60)',
    gray: 'rgb(58, 58, 59)'
  }

  const [attempts, setAttempts] = useState(6)
  const [numOfWordsGuessed, setNumOfWordsGuessed] = useState(0)
  const [guessRow, setGuessRow] = useState(0)
  const [allGuesses, setAllGuesses] = useState([])
  const [wordToGuess, setWordToGuess] = useState([])
  const [guessedWord, setGuessedWord] = useState([])
  const [clickable, setClickable] = useState(true)

  const [howTo, setHowTo] = useState(false)
  const [alert, setAlert] = useState('')

  // Define the checkGameOver function
  const checkGameOver = useCallback((row, attempts, clickableMethod) => {
    if (row === attempts) {
      console.log("Game Over!");
      // Waits for letter animation to finish before displaying alert
      setTimeout(() => {
        displayAlert("Nice try!", setAlert)
      }, 400 * wordToGuess.length)

      clickableMethod(false)
    }
  }, [wordToGuess.length, setAlert])

  useEffect(() => {
    // Get the word for the current date
    const today = new Date();
    const startDate = new Date('2023-01-01'); // Define a start date for the words
    const dayDifference = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const wordIndex = dayDifference % words.length;
    const selectedWord = words[wordIndex].split('');
    setWordToGuess(selectedWord);

    checkGameOver(guessRow, attempts, setClickable);
  }, [guessRow, attempts, checkGameOver]);

  const submitGuess = async () => {
    console.log("Guessing...")
    if (guessedWord.length === wordToGuess.length) {
      console.log("guess matches word length")
      // TODO: Check if word is a legit word
      // If legit word: check if the letters belongs to word
      checkLetters(guessedWord, wordToGuess, numOfWordsGuessed)
      setNumOfWordsGuessed(numOfWordsGuessed + 1)
      checkWin(guessedWord, wordToGuess, setClickable)
      setAllGuesses(prevState => [...prevState, guessedWord])
      setGuessedWord([])
      setGuessRow(prevState => prevState + 1)

      // TODO: If not legit word: show alert

    } else {
      displayAlert("Not enough letters", setAlert)
    }
  }

  const displayAlert = (message, alertSetter) => {
    console.log("Displaying alert");
    alertSetter(message)
    setTimeout(() => alertSetter(''), 1500)
  }

  const checkLetters = (guess, word, numOfGuesses) => {
    guess.forEach((letter, i) => {
      let indexFound = word.indexOf(letter)
      let guessIndex = guess.indexOf(letter, i)
      let elementId = numOfGuesses * 5 + guessIndex
      if (indexFound >= 0) {
        // Letter has been found
        if (guessIndex === indexFound) {
          console.log(`${letter} is in the correct place`)
          changeLetterColor(colors.green, elementId, i)
          changeKeyColor(colors.green, letter, colors.green)
        } else {
          console.log(`${letter} is in the wrong place`)
          changeLetterColor(colors.yellow, elementId, i)
          changeKeyColor(colors.yellow, letter, colors.green)
        }
      } else {
        console.log(`${letter} not found`)
        changeLetterColor(colors.gray, elementId, i)
        changeKeyColor(colors.gray, letter, colors.green)
      }
    })
  }

  const changeLetterColor = (color, id, index) => {
    console.log(`Changing color to: ${color} on id: ${id}`);
    const el = document.getElementById(id)

    // Rotates letters
    el.style.animation = `.4s linear ${index * .4}s forwards rotate-letter` // id * 4 is the delay between animations

    // Changes color after rotating
    setTimeout(() => {
      el.style.backgroundColor = color
    }, 400 * index + 400)


  }

  const changeKeyColor = (color, letter, greenColor) => {
    console.log(`Changing key color to: ${color} on id: ${letter}`);
    const el = document.getElementById(letter)

    if (el.style['background-color'] !== greenColor) { // Keys that are already green, stay green
      el.style.backgroundColor = color
    }
  }

  const checkWin = (guess, word, clickableMethod) => {
    console.log("Checking win condition...");

    if (guess.join('') === word.join('')) {
      // Waits for letter animation to finish before displaying message
      setTimeout(() => {
        displayAlert("You win!", setAlert)
      }, 400 * wordToGuess.length)
      clickableMethod(false)
    } else {
      console.log("Wrong guess");
    }
  }

  const toggleHowTo = () => {
    console.log("toggling how to");
    setHowTo(!howTo)
  }

  return (
    <div className="bg-black grid grid-rows-[.35fr_3fr_1fr] h-screen">
      {howTo ? <HowTo toggleHowTo={toggleHowTo} /> : null}
      <div className="">
        <Nav toggleHowTo={toggleHowTo} />
      </div>
      {alert ? <Alert alert={alert} /> : null}
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
          clickable={clickable}
        />
      </div>
    </div>
  )
}
