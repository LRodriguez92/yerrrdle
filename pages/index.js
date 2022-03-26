import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Board from '../components/Board'
import KeyBoard from '../components/KeyBoard'

export default function Home() {
  return (
    <div className="grid grid-rows-[.25fr_2fr_1.5fr] border border-yellow-200 h-screen">
        <Nav />
        <Board attempts={6}/>
        <KeyBoard />
    </div>
  )
}
