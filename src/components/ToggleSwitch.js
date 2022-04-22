const ToggleSwitch = ({text, switchTargets=["default-togg"]}) => {
    return (
        switchTargets.map((switchTarget) => (
            <div className="separate-toggle-box">
                <input type="checkbox" id={switchTarget} />
                <label className="round-toggle" htmlFor={switchTarget}> </label>
                <span className="text-toggle"> {text} </span>
            </div>
        ))

    )
}



export default ToggleSwitch;