const Button = ({text, className, textfmt}) => {
    return (
        <>
            <button className={`${className}`}>
                <span className={`${textfmt}`}>{text}</span>
            </button>
        </>
    )
}

export default Button;
