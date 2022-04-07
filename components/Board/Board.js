import Row from './Row'

export default function Board(props) {
    const rows = []
    for (let i = 0; i < props.attempts; i++) {
        rows.push(<Row 
            key={i}
            wordToGuess={props.wordToGuess}
            guessedWord={props.guessRow === i ? props.guessedWord : ''} 
        />)
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div>
                {rows}
            </div>
        </div>
    )
}