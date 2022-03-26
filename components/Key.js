export default function Key(props) {
    return (
        <div className={`
            border 
            border-red-400 
            ${props.char === "ENTER" || props.char === "DELETE" ? 'w-16' : 'w-9'} 
            h-14 
            m-0.5
            flex
            justify-center
            items-center
            `}
        >
            {props.char}
        </div>
    )
}