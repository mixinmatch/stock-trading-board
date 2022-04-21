import Reacts from "react";
import { useState } from 'react'
import WatchList from './WatchList'
import StockGraph from './StockGraph'
import NewsCard  from './NewsCard'

const SymbolDashBoard = () => {

    const stocksWatches = [{ symbol: 'AAPL', price: 166.79 }, { symbol: 'MSFT', price: 282.69 }, { symbol: 'GOOGL', price: 2553.01}, { symbol: 'AMZN', price: 3054.41 }, { symbol: 'TSLA', price: 992.46}, { symbol: 'NVDA', price: 216.37}, { symbol: 'BRK.A', price: 518652.88 }, { symbol: 'FB', price: 212.79 }, { symbol: 'UNH', price: 539.65}, { symbol: 'JNJ', price: 180.92}]


    return (
        <div className="dashboard-group">
            <Ticker isAddedToWatchList={false} companyName='Apple inc' price={171.83} changeAmount={3.23} changeDirection='UP'/>
            <WatchList watches={stocksWatches}/>
        </div>   
    )
}

const Ticker = ({companyName, tickerSymbol, volume, price, changeAmount, changeDirection}) => {
    return (
        <div>
            {/* <div className="company-name">{companyName}</div> */}
            <div>
            <div className="stock-price">${price}</div>
            <p className="ticker"><div className={
                changeDirection === 'UP' ? 'increase-arrow' : changeDirection === 'DOWN' ? 'decrease-arrow' : 'NOCHANGE'  
            }> </div> <span className={changeDirection === 'UP' ? 'price-increase' : changeDirection === 'DOWN' ? 'price-increase' : ''}>{'$' + changeAmount} ({(price/(price-changeAmount)).toFixed(2) +'%'}) </span> <span style={{fontWeight: "normal"}}>Today</span></p>
            </div>
            <StockGraph />
            <CumulativeReturnButtons />
            <NewsCard />
            <NewsCard />
        </div>
    )
}
const CumulativeReturnButtons = () => {
    const [activeTab, setActiveTab] = useState("t1")
    function onChangetab(activeTab) {
        setActiveTab(activeTab)
    } 


    return (
        <div className="button-container">
            <ul>
                <li className={"tab" + (activeTab === "t1" ? " tabactive" : "") }>
                    <a className="crb" href="#today" onClick={() => onChangetab("t1")}>Today</a>
                </li>
                <li className={"tab" + (activeTab === "t2" ? " tabactive" : "" )}>
                    <a className="crb" href="#1w" onClick={() => onChangetab("t2")}> 1W </a>
                </li>
                <li className={"tab" + (activeTab === "t3" ? " tabactive" : "" )}>
                    <a className="crb" href="#1m" onClick={() => onChangetab("t3")}> 1M </a>
                </li>
                <li className={"tab" + (activeTab === "t4" ? " tabactive" : "" )}>
                    <a className="crb" href="#3m" onClick={() => onChangetab("t4")}> 3M </a>
                </li>
                <li className={"tab" + (activeTab === "t5" ? " tabactive" : "" )}>
                    <a className="crb" href="#1y" onClick={() => onChangetab("t5")}> 1Y </a>
                </li>
                <li className={"tab" + (activeTab === "t6" ? " tabactive" : "" )}>
                    <a className="crb" href="#5y" onClick={() => onChangetab("t6")}> 5Y </a>
                </li>
            </ul>
        </div>
    )
}





export default SymbolDashBoard;