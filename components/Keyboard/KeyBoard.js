import Key from './Key';

export default function KeyBoard(props) {
    const characters = [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "ENTER", "Z", "X", "C", "V", "B", "N", "M",
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
        </svg>
    ];

    const handleClick = (letter) => {
        if (props.guessedWord.length < props.wordToGuess.length) {
            props.setGuessedWord(prevState => [...prevState, letter]);
        } else {
            console.log("Reached the max number of letters!");
        }
    };

    const deleteLetter = () => {
        console.log("Deleting letter");
        let currentWord = props.guessedWord;
        if (currentWord.length > 1) {
            props.setGuessedWord(prevState => {
                const list = prevState.filter((item, i) => i !== prevState.length - 1);
                return list;
            });
        } else {
            props.setGuessedWord([]);
        }
    };

    const renderRow = (chars) => {
        return chars.map((char, index) => (
            <Key
                key={index}
                char={char}
                setGuessedWord={props.setGuessedWord}
                handleClick={handleClick}
                submitGuess={props.submitGuess}
                deleteLetter={deleteLetter}
                clickable={props.clickable}
            />
        ));
    };

    return (
        <div className="flex flex-col items-center space-y-1">
            <div className="flex space-x-1">{renderRow(characters.slice(0, 10))}</div>
            <div className="flex space-x-1">{renderRow(characters.slice(10, 19))}</div>
            <div className="flex space-x-1">{renderRow(characters.slice(19))}</div>
        </div>
    );
}
