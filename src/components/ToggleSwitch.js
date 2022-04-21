const ToggleSwitch = ({text}) => {
    return (
        <>
            <input type="checkbox" id="togg" />
            <label class="round-toggle" for="togg"> </label>
            <span class="text-toggle"> {text}</span>
        </>
    )
}



export default ToggleSwitch;