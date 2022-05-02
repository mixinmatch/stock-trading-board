import Button from "./Button"
import React from "react";
import { BsSearch } from 'react-icons/bs'
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

const HeaderBar = ({handler, renderSearch, setRenderSearch}) => {

    const [text, setText] = useState("")
    
    function onSearchChange(event) {
        setText(event.target.value)
        setRenderSearch(true)
    }
    return (
        <div>
            <div className="header-bar">
                <div className="logo-and-search">
                {/* <img src={"img/logo2.svg"} style={{padding:'12px'}}/> */}
                    <div style={{  alignSelf:"center"}}>
                        <div style={{borderStyle: 'solid', borderWidth: '1px', borderColor: '#d3d3d366', borderRadius: '5px'}}>
                        <button style={{  border: 'none',
  backgroundColor: 'transparent', padding:'15px'}}> <BsSearch /> </button>
                            <input className="header-bar-search" type="text" placeholder="Search a stock" onInput={onSearchChange} />
                        </div>
 
                            {
                                renderSearch && text && <SearchResults query={text} handl={handler} />
                            }
                    </div>
                </div>
                <RightMenu />
            </div>

        </div>
    )
}

//expanding searchbar form an icon on click
//add shadow down
class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.data = stockData
    }

    render() {
        return (
            <div className="search-results" >
                {
                    this.data.map((data) => (
                        <SearchResult key={data.symbol} symbol={data.symbol} price={data.price} handl={this.props.handl}/>
                    ))
                }
            </div>
        )
    }
}

const RightMenu = () => {
    const textStyle = {textDecoration: 'none', fontWeight:"bold", color: "black" }
    return (
         <div className="right-button-group">
                <button className="right-menu-button">
                    <Link to="/stock-trading-board/dashboard" style={textStyle}>Home</Link>
                </button>
                <button className="right-menu-button">
                    <Link to="/stock-trading-board/notifications" style={textStyle} >Notifications</Link>
                </button>
                <button className="right-menu-button">
                    <Link to="/stock-trading-board/account" style={textStyle} >Account</Link>
                </button>
         </div>
    )
}

export default HeaderBar;