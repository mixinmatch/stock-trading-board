import ToggleSwitch from "./ToggleSwitch";

const Account = () => {
    return (
        <div>
            <ToggleSwitch text={"Enable option trading"} />
            <ToggleSwitch text={"Enable trading password"} />
        </div>
    )
}

export default Account;