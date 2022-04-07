import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from "react"
import Nav from '../components/Nav'
import Board from '../components/Board/Board'
import KeyBoard from '../components/Keyboard/KeyBoard'

export default function Home() {

  // const [gameState, setGameState] = useState({
  //   guessAttempts: 0,
  //   spaceInRow: 0,
  //   word: ["F", "A", "C", "T", "S"],
  //   guessedWord: [],
  // })

  const [guessAttempts, setGuessAttempts] = useState(0)
  const [spaceInRow, setSpaceInRow] = useState(0)
  const [word, setWord] = useState([])
  const [guessedWord, setGuessedWord] = useState([])

  useEffect(() => {
    setWord(["F", "A", "C", "T", "S"])
  }, [])

  return (
    <div className="bg-black grid grid-rows-[.35fr_3fr_1fr] h-screen">
      <div className="">
        <Nav />
      </div>
      <div className="">
        <Board attempts={6} word={word}/>
      </div>
      <div className="">
        <KeyBoard guessedWord={guessedWord} setGuessedWord={setGuessedWord}/>
      </div>       
    </div>
  )
}
