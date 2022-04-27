import { BsThreeDots } from 'react-icons/bs'

const WatchList = ({ watches }) => {
    
    return (
        <div className="watchlist" style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <header className="watchlist-header">
                <h4>Watchlist</h4> 
                <button className="watchList-header-dot-button">
                    <BsThreeDots size={25}/>
                </button>
            </header>
            <CardList array={watches} />
        </div>
    )
}

const CardList = ({array}) => {
    return (
        array.map((el) => <WatchCard key={el.symbol} w={el} />)
    )
}



const WatchCard = ({ w }) => {
    return (
        <div key={w.symbol} className="watchlist-card">
            <span className="symbol-font"> {w.symbol} </span>
            <span className="card-price"> ${w.price} </span>
        </div>
    )
}

export default WatchList;
