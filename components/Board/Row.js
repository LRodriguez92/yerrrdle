import { useState, useEffect } from 'react'
import Letter from './Letter';

export default function Row(props) {

    const count = props.word.length
    const letters = []

    for (let i = 0; i < count; i++) {
        letters.push(<Letter letter={props.word[i]} key={i}/>)
    }

    
    return (
        <div className="flex">
            {letters}
        </div>
    )
}