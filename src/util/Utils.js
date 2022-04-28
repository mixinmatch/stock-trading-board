//Generates random data from a price bounded by half midPirce and 2*midPrice
const generateGraphData = (midPrice, nbDataPoints=20) => {
    let res = []
    let floor = midPrice/2
    let ceil = 2 * midPrice

    for(let i = 0; i < nbDataPoints; i++) {
        let o = {
            name: i,
            price: (Math.random() * (ceil-floor) + floor).toFixed(2)
        }
        res.push(o)
    }

    return res
}

export default generateGraphData