export default function Letter(props) {
    return (
        <p className="w-14 h-14 border border-gray-600 flex justify-center items-center m-0.5">
            {props.letter}
        </p>
    )
}