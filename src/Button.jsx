const Button = (props) => {
    // JavaScript
    const myClass = `btn btn-${props.contextual}`
    console.log(myClass)

    return (
        // JSX
        <button onClick={(e) => props.click(e)} className={myClass}> {props.text} </button>
    )
}

Button.defaultProps = {
    text: 'Default Text'
}
export default Button;