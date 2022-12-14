const Label = ({
    text = '',
}) => {
    return (
        <div className="rounded bg-anti-flash-white flex flex-col items-center justify-center mr-3">
            <label className="text-2xl px-5 py-5">{text}</label>
        </div>
    )
}

export default Label;