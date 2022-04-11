export default function Key(props) {
    return (
        <div id={props.char} className={`
            focus:bg-gray-700
            rounded 
            bg-gray-400
            text-white
            ${props.char === "ENTER" || props.char.type === "svg" ? 'w-16' : 'w-9'} 
            h-14 
            m-0.5
            flex
            justify-center
            items-center
            font-sans
            font-bold
            `}
            onClick={
                props.char === "ENTER" ? 
                props.submitGuess 
                : (props.char.type === "svg" ? props.deleteLetter 
                : () => props.handleClick(props.char))
            }
        >
            {props.char}
        </div>
    )
}



