import Image from 'next/image'

export default function HowTo(props) {
    return (
        <div className="absolute flex justify-center items-center bg-black w-full h-full text-white text-sm z-10">
            <div className="sm:w-5/12 lg:w-4/12">
                <div className="flex justify-between items-center p-1 font-bold">
                    <div className="w-6"></div>
                    <h1 className="text-xl">How To Play</h1>
                    <svg onClick={props.toggleHowTo} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="w-11/12">
                    <div>
                        <br />
                        <p>Guess the <span className="font-bold">YERRRDLE</span> in six tries.</p>
                        <br />
                        <p>Each guess must be a valid word and take up all the spaces. Hit the enter button to submit.</p>
                        <br />
                        <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
                        <br />
                    </div>
                    <hr />
                    <div>
                        <br />
                        <p className="font-bold">Examples</p>
                        <br />
                        <Image src={"/assets/facts.png"} width="260" height="50" alt="facts image" />
                        <p>The letter <span className="font-bold">F</span> is in the word and in the correct spot</p>
                        <br />
                        <Image src={"/assets/block.png"} width="260" height="50" alt="block image" />
                        <p>The letter <span className="font-bold">C</span> is in the word but in the wrong spot</p>
                        <br />
                        <Image src={"/assets/ounce.png"} width="260" height="50" alt="ounce image" />
                        <p>The letter <span className="font-bold">E</span> is not in the word in any spot</p>
                        <br />
                    </div>
                    <hr />
                    <br />
                    <p className="font-bold">A new YERRRDLE will be available each day!</p>
                </div>
            </div>
        </div>
    )
}