import Row from './Row'

export default function Board(props) {
    const word = "FACTS"
    const rows = []
    for (let i = 0; i < props.attempts; i++) {
        rows.push(<Row word={word}/>)
    }

    return (
        <div className="border border-red-900 h-full flex justify-center items-center">
            <div className="flex flex-col items-center justify-center border border-green-900">
                {rows}
            </div>
        </div>
    )
}