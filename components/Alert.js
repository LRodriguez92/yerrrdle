export default function Alert(props) {
    return (
        <div className="z-10 absolute mt-24 flex justify-center items-center bg-transparent w-full">
            <div className="flex justify-center items-center rounded text-black font-bold bg-white h-12 p-6">{props.alert}</div>
        </div>
    )
}