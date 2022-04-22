import ToggleSwitch from "./ToggleSwitch";

const Account = () => {
    return (
        <div className="center-toggle-box" >
            <ToggleSwitch text={"Enable option trading"} switchTargets={["optionTrading"]} />
            <ToggleSwitch text={"Enable trading password"} switchTargets={["tradingPassword"]}/>
        </div>
    )
}

export default Account;