import Button from "./Button"
import {
    BrowserRouter as Router,
    Link,
    useLocation,
    Routes,
    Route
  } from "react-router-dom";
const HeaderBar = () => {
    return (
        <div>
            <div className="header-bar">
                <input className="header-bar-search" type="text" placeholder="Search a stock" />
                <RightMenu />
            </div>
        </div>
    )
}

//expanding searchbar form an icon on click
//add shadow down

const SearchBar = () => {


}

const RightMenu = () => {
    const textStyle = {textDecoration: 'none', fontWeight:"bold", color: "black" }
    return (
         <div className="right-button-group">
                <button className="right-menu-button">
                    <Link to="/dashboard" style={textStyle}>Home</Link>
                </button>
                <button className="right-menu-button">
                    <Link to="notifications" style={textStyle} >Notifications</Link>
                </button>
                <button className="right-menu-button">
                    <Link to="account" style={textStyle} >Account</Link>
                </button>
         </div>
    )
}

export default HeaderBar;