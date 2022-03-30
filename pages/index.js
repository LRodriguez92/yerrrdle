import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Board from '../components/Board'
import KeyBoard from '../components/KeyBoard'

export default function Home() {
  return (
    <div className="bg-black grid grid-rows-[.35fr_3fr_1fr] h-screen">
      <div className="">
        <Nav />
      </div>
      <div className="">
        <Board attempts={6}/>
      </div>
      <div className="">
        <KeyBoard />
      </div>       
    </div>
  )
}
