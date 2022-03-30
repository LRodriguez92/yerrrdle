import Row from './Row'

export default function Board(props) {
    const word = "FACTS"
    const rows = []
    for (let i = 0; i < props.attempts; i++) {
        rows.push(<Row word={word}/>)
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div>
                {rows}
            </div>
        </div>
    )
}