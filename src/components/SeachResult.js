const SearchResult = ({symbol, price, handl}) => {
    return (
        <div className="search-result-card" onClick={handl}>
            <span> {symbol} </span> 
            <span> {price}</span>
        </div>
    )
}

export default SearchResult