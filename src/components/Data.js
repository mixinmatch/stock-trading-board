// data to create stock graph. referenced by other files. TODO refactor from the other one.
const stockData = [
  { symbol: 'AAPL', price: 166.79 },
  // { symbol: 'MSFT', price: 282.69 },
  // { symbol: 'GOOGL', price: 2553.01},
  // { symbol: 'AMZN', price: 3054.41 },
  // { symbol: 'TSLA', price: 992.46},
  { symbol: 'NVDA', price: 216.37},
  // { symbol: 'BRK.A', price: 518652.88 },
  { symbol: 'FB', price: 212.79 },
  // { symbol: 'UNH', price: 539.65},
  // { symbol: 'JNJ', price: 180.92}
]


class StockTicker {
  constructor(price, upDownAmount, graphData) {
    this.price = price
    this.upDownAmount = upDownAmount
    this.graphData = graphData
  }
}

export const AAPL_PREVIOUS_CLOSE = 166.42
export const META_PREVIOUS_CLOSE = 184.11
export const NVDA_PREVIOUS_CLOSE = 195.15

// graph data for each stock...
export const stockDataApple = new StockTicker(161.79, (161.79-AAPL_PREVIOUS_CLOSE).toFixed(2) , [
  {
    symbol: 'AAPL',
    name: '9:30 AM',
    price: 166.30,
  },
  {
    symbol: 'AAPL',
    name: '10:00 AM',
    price: 166.28,
  },
  {
    symbol: 'AAPL',
    name: '10:30 AM',
    price: 165.48,
  },
  {
    symbol: 'AAPL',
    name: '11:00 AM',
    price: 165.93,
  },
  {
    symbol: 'AAPL',
    name: '11:30 AM',
    price: 165.93,
  },
  {
    symbol: 'AAPL',
    name: '12:00 PM',
    price: 164.52,
  },
  {
    symbol: 'AAPL',
    name: '12:30 PM',
    price: 164.60,
  },
  {
    symbol: 'AAPL',
    name: '1:00 PM',
    price: 164.70,
  },
  {
    symbol: 'AAPL',
    name: '1:30 PM',
    price: 164.04,
  },
  {
    symbol: 'AAPL',
    name: '2:00 PM',
    price: 163.71,
  },
  {
    symbol: 'AAPL',
    name: '2:30 PM',
    price: 163.45,
  },
  {
    symbol: 'AAPL',
    name: '3:00 PM',
    price: 162.98,
  },
  {
    symbol: 'AAPL',
    name: '3:30 PM',
    price: 163.14,
  },
  {
    symbol: 'AAPL',
    name: '4:00 PM',
    price: 161.79,
  },
]);

export const stockDataMeta = new StockTicker(208.95, (208.95-META_PREVIOUS_CLOSE).toFixed(2) , [
  {
    symbol: 'FB',
    name: '9:30 AM',
    price: 207.22,
  },
  {
    symbol: 'FB',
    name: '10:00 AM',
    price: 187.57,
  },
  {
    symbol: 'FB',
    name: '10:30 AM',
    price: 186.70,
  },
  {
    symbol: 'FB',
    name: '11:00 AM',
    price: 186.23,
  },
  {
    symbol: 'FB',

    name: '11:30 AM',
    price: 183.60,
  },
  {
    symbol: 'FB',

    name: '12:00 PM',
    price: 184.68,
  },
  {
    symbol: 'FB',

    name: '12:30 PM',
    price: 183.77,
  },
  {
    symbol: 'FB',

    name: '1:00 PM',
    price: 183.77,
  },
  {
    symbol: 'FB',

    name: '1:30 PM',
    price: 184.49,
  },
  {
    symbol: 'FB',

    name: '2:00 PM',
    price: 184.46,
  },
  {
    symbol: 'FB',

    name: '2:30 PM',
    price: 184.68,
  },
  {
    symbol: 'FB',

    name: '3:00 PM',
    price: 185.66,
  },
  {
    symbol: 'FB',

    name: '3:30 PM',
    price: 190.99,
  },
  {
    symbol: 'FB',

    name: '4:00 PM',
    price: 208.95,
  },
  ]);

export const stockDataNvidia = new StockTicker(195.94, (195.94-NVDA_PREVIOUS_CLOSE).toFixed(2) , [
  {
    symbol: 'NVDA',

    name: '9:30 AM',
    price: 203.05,
  },
  {
    symbol: 'NVDA',

    name: '10:00 AM',
    price: 201.46,
  },
  {
    symbol: 'NVDA',

    name: '10:30 AM',
    price: 199.52,
  },
  {
    symbol: 'NVDA',

    name: '11:00 AM',
    price: 200.59,
  },
  {
    symbol: 'NVDA',

    name: '11:30 AM',
    price: 201.89,
  },
  {
    symbol: 'NVDA',

    name: '12:00 PM',
    price: 198.82,
  },
  {
    symbol: 'NVDA',

    name: '12:30 PM',
    price: 198.44,
  },
  {
    symbol: 'NVDA',

    name: '1:00 PM',
    price: 197.60,
  },
  {
    symbol: 'NVDA',

    name: '1:30 PM',
    price: 196.99,
  },
  {
    symbol: 'NVDA',

    name: '2:00 PM',
    price: 196.33,
  },
  {
    symbol: 'NVDA',

    name: '2:30 PM',
    price: 184.46,
  },
  {
    symbol: 'NVDA',

    name: '3:00 PM',
    price: 196.75,
  },
  {
    symbol: 'NVDA',

    name: '3:30 PM',
    price: 195.67,
  },
  {
    symbol: 'NVDA',

    name: '4:00 PM',
    price: 195.94,
  },
  ]);


export default stockData
