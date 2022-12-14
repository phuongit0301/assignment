const Title = ({
    title = 'Expression Evaluator',
    className,
}) => {
    return (
        <h1 className={`text-eton-blue text-4xl font-extralight ${className}`}>{title}</h1>
    )
}

export default Title;