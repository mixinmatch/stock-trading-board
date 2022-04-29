const NewsCard = ({imgSrc}) => {
    return (
        <div className="news-card">
            <img src={imgSrc} className="img-news" />
            <span className="text-news">
            <span className="news-company">Market watch on <span className="price-increase">AAAA (+3.45%)</span></span>
                <span className="news-header">
                Lorem ipsum dolor sit amet
                </span>
            <span className="news-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie nibh vel lectus ullamcorper, et rutrum dolor egestas. Pellentesque quis erat a tellus suscipit fermentum. Donec risus leo, tristique eget elit nec, luctus consequat nisl. Mauris enim libero, cursus a dui quis, porta lobortis elit. Cras sit amet lorem in justo maximus interdum.
            </span>
            </span>
        </div>
    )
}

export default NewsCard;