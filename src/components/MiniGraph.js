import { LineChart, Line, Tooltip, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from 'recharts';
export const MiniStockGraph = ({data, upOrDown=1}) => {
      return (
        <ResponsiveContainer width="30%">
          <LineChart data={data} margin={{top:25, bottom: 20}}>
              <Line type="linear" dataKey="price" stroke={upOrDown > 0 ? "#66ddb8" : "#eb5131"} dot={false} /> 
          </LineChart>
        </ResponsiveContainer>
  )
}