const Button = ({
    name = 'Add number',
    className = '',
    onClick = () => {},
    disabled = false,
}) => {
    return (
        <button className={`text-white rounded bg-eton-blue text-2xl text-center py-5 w-full ${className}`} onClick={onClick} disabled={disabled}>{name}</button>
    )
}

export default Button;