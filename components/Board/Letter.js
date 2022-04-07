export default function Letter(props) {
    return (
        <p className="w-16 h-16 border font-sans font-bold text-3xl border-gray-600 text-white flex justify-center items-center m-0.5">
            {props.letter}
        </p>
    )
}