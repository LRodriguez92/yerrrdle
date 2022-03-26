import Key from './Key'

export default function KeyBoard() {
    const characters = [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", 
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"
    ]

    const keys = characters.map(char => {
        console.log(char);
        return <Key char={char}/>
    })

    return (
        <div className="border border-blue-900 flex flex-col items-center">
            <div className="border border-orange-900 flex flex-wrap justify-center">
                {keys}
            </div>
        </div>
    )
}