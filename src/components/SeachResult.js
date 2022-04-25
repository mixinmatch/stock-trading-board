const SearchResult = ({symbol, price}) => {
    return (
        <div className="search-result-card">
            <span> {symbol} </span> 
            <span> {price}</span>
        </div>
    )
}

export default SearchResult