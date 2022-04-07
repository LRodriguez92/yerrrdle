import Key from './Key'

export default function KeyBoard(props) {
    const characters = [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", 
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "ENTER", "Z", "X", "C", "V", "B", "N", "M", <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
      </svg>
    ]

    const handleClick = (letter) => {
        if (props.guessedWord.length < props.word.length) {
            props.setGuessedWord(prevState => [...prevState, letter])
        } else {
            console.log("Reached the max number of letters!");
        }
    }

    const keys = characters.map((char, index) => {
        return <Key 
            key={index}
            char={char} 
            setGuessedWord={props.setGuessedWord}
            handleClick={handleClick}
            submitGuess={props.submitGuess}
        />
    })

    return (
        <div className="flex flex-wrap justify-center p-0.5">
            {keys}
        </div>
    )
}