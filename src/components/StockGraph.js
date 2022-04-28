// put rubish data
import { LineChart, Line, Tooltip, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import {stockDataApple, AAPL_PREVIOUS_CLOSE} from './Data'
const data = stockDataApple.graphData

const StockGraph = ({data1=data}) => {
  const a = getDomainAndPreviousClose(data1)
  let upOrDown = data1.slice(-1)[0].price - a[2]

    return (
        <LineChart width={900} height={300} data={data1} >
            <Line type="linear" dataKey="price" stroke={upOrDown > 0 ? "#66ddb8" : "#eb5131"} dot={false} />
            <XAxis dataKey="name" tick={false} />
            <YAxis dataKey="price" type="number" domain={[a[0], a[1]]} tick={false} />

            <ReferenceLine y={a[2]} stroke="gray" strokeDasharray="3 3" />
            <Tooltip />
        </LineChart>
)
}

function getDomainAndPreviousClose(data) {
  if(data[0].symbol === 'AAPL') {
    return [160, 170, AAPL_PREVIOUS_CLOSE]
  }
  if(data[0].symbol === 'NVDA') {
    return [160, 198, 195.15]
  }
  if(data[0].symbol === 'FB') {
    return [180, 210, 184.11]
  }
}


export default StockGraph
