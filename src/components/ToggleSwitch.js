const ToggleSwitch = ({text}) => {
    return (
        <>
            <input type="checkbox" id="togg" />
            <label className="round-toggle" htmlFor="togg"> </label>
            <span className="text-toggle"> {text}</span>
        </>
    )
}



export default ToggleSwitch;