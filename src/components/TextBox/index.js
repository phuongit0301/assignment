const TextBox = ({
    placeholder = 'Please enter a number',
    onChange = () => {},
    inputType = 'number',
    value = '',
}) => {
    return (
        <div className="rounded border-gray-700 border flex flex-col p-3">
            <label className="mb-3 text-neutral-500 text-sm">{placeholder}</label>
            <input type="text"
                className="
                form-control
                block
                w-full
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border-0
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                id="exampleFormControlInput1"
                value={value}
                onChange={onChange}
                onKeyPress={(event) => {
                    if (inputType === 'number' && !/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }}
            />
        </div>
    )
}

export default TextBox;