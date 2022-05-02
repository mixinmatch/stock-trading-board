import Reacts from "react";
import { useState } from 'react'
import WatchList from './WatchList'
import StockGraph from './StockGraph'
import NewsCard  from './NewsCard'
import stockDataApple from './Data'

const SymbolDashBoard = ({d, price=stockDataApple.price, changeAmount=stockDataApple.upDownAmount, timePeriodHandler, activeTab}) => {

    const stocksWatches = [{ symbol: 'AAPL', price: 166.79 }, { symbol: 'MSFT', price: 282.69 }, { symbol: 'GOOGL', price: 2553.01}, { symbol: 'AMZN', price: 3054.41 }, { symbol: 'TSLA', price: 992.46}, { symbol: 'NVDA', price: 216.37}, { symbol: 'BRK.A', price: 518652.88 }, { symbol: 'FB', price: 212.79 }, { symbol: 'UNH', price: 539.65}, { symbol: 'JNJ', price: 180.92}]

    return (
        <div className="dashboard-group">
            <Ticker isAddedToWatchList={false} padding={{right:'20px'}} companyName='Apple inc' price={price} timePeriodHandler={timePeriodHandler} changeAmount={changeAmount} activeTab={activeTab} data={d}/>
            <WatchList watches={stocksWatches}/>
        </div>   
    )
}

const Ticker = ({companyName, tickerSymbol, volume, price, changeAmount, data, timePeriodHandler, activeTab}) => {
    let changeDirection = changeAmount > 0 ? 'UP' : changeAmount < 0 ? 'DOWN' : 'NOCHANGE'

    return (
        <div>
            {/* <div className="company-name">{companyName}</div> */}
            <div>
            <div className="stock-price">${price}</div>
            <p className="ticker"><div className={
                changeDirection === 'UP' ? 'increase-arrow' : changeDirection === 'DOWN' ? 'decrease-arrow' : 'NOCHANGE'  
            }> </div> <span className={changeDirection === 'UP' ? 'price-increase' : changeDirection === 'DOWN' ? 'price-decrease' : ''}>{'$' + changeAmount} ({(changeAmount/price).toFixed(3) +'%'}) </span> <span style={{fontWeight: "normal"}}>Today</span></p>
            </div>
            <StockGraph data1={data}/>
            <CumulativeReturnButtons timePeriodHandler={timePeriodHandler} activeTab={activeTab} />
            <NewsCard imgSrc={"%PUBLIC_URL%/img/newspaper.jpg"}/>
            <NewsCard imgSrc={"%PUBLIC_URL%/img/skyscraper.jpg"}/>
        </div>
    )
}
const CumulativeReturnButtons = ({timePeriodHandler, activeTab}) => {
    return (
        <div className="button-container">
            <ul>
                <li className={"tab" + (activeTab === "today" ? " tabactive" : "") }>
                    <a className="crb" href="#today" onClick={() => timePeriodHandler("today")}>Today</a>
                </li>
                <li className={"tab" + (activeTab === "1w" ? " tabactive" : "" )}>
                    <a className="crb" href="#1w" onClick={() => timePeriodHandler("1w")}> 1W </a>
                </li>
                <li className={"tab" + (activeTab === "1m" ? " tabactive" : "" )}>
                    <a className="crb" href="#1m" onClick={() => timePeriodHandler("1m")}> 1M </a>
                </li>
                <li className={"tab" + (activeTab === "3m" ? " tabactive" : "" )}>
                    <a className="crb" href="#3m" onClick={() => timePeriodHandler("3m")}> 3M </a>
                </li>
                <li className={"tab" + (activeTab === "1y" ? " tabactive" : "" )}>
                    <a className="crb" href="#1y" onClick={() => timePeriodHandler("1y")}> 1Y </a>
                </li>
                <li className={"tab" + (activeTab === "5y" ? " tabactive" : "" )}>
                    <a className="crb" href="#5y" onClick={() => timePeriodHandler("5y")}> 5Y </a>
                </li>
            </ul>
        </div>
    )
}





export default SymbolDashBoard;