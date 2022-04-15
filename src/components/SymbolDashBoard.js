import Reacts from "react";
import { useState } from 'react'
import WatchList from './WatchList'
const SymbolDashBoard = () => {

    const stocksWatches = [{ symbol: 'AAPL', price: 166.79 }, { symbol: 'MSFT', price: 282.69 }, { symbol: 'GOOGL', price: 2553.01}, { symbol: 'AMZN', price: 3054.41 }, { symbol: 'TSLA', price: 992.46}, { symbol: 'NVDA', price: 216.37}, { symbol: 'BRK.A', price: 518652.88 }, { symbol: 'FB', price: 212.79 }, { symbol: 'UNH', price: 539.65}, { symbol: 'JNJ', price: 180.92}]


    return (
        <div className="dashboard-group">
            <Ticker isAddedToWatchList={false} companyName='Apple inc' price={171.83} changeAmount={3.23} changeDirection='UP'/>

            <WatchList watches={stocksWatches}/>

        </div>
    )
}

//const downColorHex = '#d93025'
function onClick(e) {

}

const Ticker = ({companyName, tickerSymbol, volume, price, changeAmount, changeDirection}) => {
    return (
        <div>
            {/* <div className="company-name">{companyName}</div> */}
            <div className="stock-price">${price}</div>
            <p class="ticker"><div className={
                changeDirection === 'UP' ? 'increase-arrow' : changeDirection === 'DOWN' ? 'decrease-arrow' : 'NOCHANGE'  
            }> </div> <span className={changeDirection === 'UP' ? 'price-increase' : changeDirection === 'DOWN' ? 'price-increase' : ''}>{'$' + changeAmount} ({(price/(price-changeAmount)).toFixed(2) +'%'}) </span> <span style={{fontWeight: "normal"}}>Today</span></p>
        </div>
    )
}

const FavoriteButton = ({isFavorited2, onClick}) => {
    return (
        <button/>
    )

    // const [isFavorited, setFavorite] = useState(false); //todo move up 

    // if(isFavorited) {
    //     return (
        
    //     <AiFillStar size={16}  onClick={() => {setFavorite(!isFavorited)}}/>
    //     )
    // } else {
    //     return (
    //     <AiOutlineStar size={16}  onClick={() => {setFavorite(!isFavorited)}}/>
    //     )
    // }

}



const Graph = () => {
    return (
        <>
        <div className="graph-period">
        <button>
            1d
        </button>
        <button >
            5d
        </button>
        <button > 
            1y
        </button>
        <button >
            YTD
        </button>
        </div>
        todo graph
        </>
    )
}

export default SymbolDashBoard;