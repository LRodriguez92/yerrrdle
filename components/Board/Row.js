import { useState, useEffect } from 'react'
import Letter from './Letter';

export default function Row(props) {

    const count = props.wordToGuess.length
    const letters = []

    for (let i = 0; i < count; i++) {
        letters.push(<Letter letter={props.guessedWord[i]} key={i}/>)
    }

    
    return (
        <div className="flex">
            {letters}
        </div>
    )
}