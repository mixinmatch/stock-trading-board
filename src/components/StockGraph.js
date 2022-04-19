// put rubish data
import { LineChart, Line, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,    amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      amt: 2100,
    },
    {
        name: 'Page AA',
        uv: 2390,
        amt: 2500,
      },
      {
        name: 'Page AS',
        uv: 3490,
        amt: 2100,
      },
  ];

const StockGraph = () => {
    return (
        <LineChart width={900} height={300} data={data} >
            <Line type="linear" dataKey="uv" stroke="#66ddb8" dot={false} />
            <ReferenceLine y={2390} stroke="gray" strokeDasharray="3 3" />
            <Tooltip />
        </LineChart>
)
}


export default StockGraph
