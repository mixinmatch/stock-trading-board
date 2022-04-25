import Button from "./Button"
import {
    BrowserRouter as Router,
    Link,
    useLocation,
    Routes,
    Route
  } from "react-router-dom";
import { useState } from "react";
import stockData from './Data'
import SearchResult from "./SeachResult";
const HeaderBar = () => {

    const [text, setText] = useState("")
    function onSearchChange(event) {
        setText(event.target.value)
    }
    return (
        <div>
            <div className="header-bar">
                <input className="header-bar-search" type="text" placeholder="Search a stock" onInput={onSearchChange} />
                <RightMenu />
            </div>
            <div>
            {
               text && <SearchResults query={text} />
            }
            </div>
        </div>
    )
}

//expanding searchbar form an icon on click
//add shadow down
const SearchResults = ({query}) => {
    const data = stockData;
    return (
        <div className="search-results">
            {
                data.map((data) => (
                    <SearchResult symbol={data.symbol} price={data.price} />
                ))
            }
        </div>
    )
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