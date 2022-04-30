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

//////mini graph data
const miniGraphAapl = [
  {name:0, price:283.89},
  {name:1,price:178.58}
, {name:2,price:222.21}
, {name:3,price:106.51}
, {name:4,price:164.71}
, {name:5,price:203.98}
, {name:6,price:210.98}
, {name:7,price:294.48}
, {name:8,price:108.65}
, {name:9,price:199.08}
, {name:10,price:333.37}
, {name:11,price:280.73}
, {name:12,price:324.85}
, {name:13,price:278.82}
, {name:14,price:124.13}
, {name:15,price:118.13}
, {name:16,price:174.45}
, {name:17,price:174.00}
, {name:18,price:97.01}
, {name:19,price:98.14}
]

const miniGraphMsft = [
{name:0,price:273.05}
, {name:1,price:181.53}
, {name:2,price:155.57}
, {name:3,price:329.35}
, {name:4,price:510.68}
, {name:5,price:349.46}
, {name:6,price:281.19}
, {name:7,price:397.07}
, {name:8,price:319.08}
, {name:9,price:268.89}
, {name:10,price:268.77}
, {name:11,price:306.05}
, {name:12,price:143.66}
, {name:13,price:449.20}
, {name:14,price:286.78}
, {name:15,price:546.61}
, {name:16,price:186.86}
, {name:17,price:447.41}
, {name:18,price:384.59}
, {name:19, price:434.12}]

const miniGraphGoogl = [
  {name:0,price:3309.66}
  , {name:1,price:2105.48}
  , {name:2,price:2477.40}
  , {name:3,price:2256.43}
  , {name:4,price:2501.80}
  , {name:5,price:4805.88}
  , {name:6,price:4960.26}
  , {name:7,price:3001.65}
  , {name:8,price:2222.65}
  , {name:9,price:3340.51}
  , {name:10,price:1574.88}
  , {name:11,price:4788.02}
  , {name:12,price:2364.21}
  , {name:13,price:4829.73}
  , {name:14,price:2239.55}
  , {name:15,price:1874.39}
  , {name:16,price:3619.27}
  , {name:17,price:2838.93}
  , {name:18,price:1315.47}
  , {name:19,price:2935.63}
]

const miniGraphAmzn = [
  {name:0,price:5736.62}
, {name:1,price:4908.06}
, {name:2,price:3537.72}
, {name:3,price:5395.85}
, {name:4,price:2098.84}
, {name:5,price:2555.65}
, {name:6,price:1733.11}
, {name:7,price:5978.97}
, {name:8,price:4220.38}
, {name:9,price:6002.83}
, {name:10,price:4147.34}
, {name:11,price:2992.39}
, {name:12,price:3222.68}
, {name:13,price:2508.35}
, {name:14,price:4322.34}
, {name:15,price:3083.27}
, {name:16,price:4621.69}
, {name:17,price:3270.59}
, {name:18,price:3036.32}
, {name:19,price:3823.67}
]

const miniGraphTsla = [
  {name:0,price:1290.64}
, {name:1,price:1142.49}
, {name:2,price:1410.18}
, {name:3,price:706.09}
, {name:4,price:1206.63}
, {name:5,price:552.77}
, {name:6,price:805.68}
, {name:7,price:1750.89}
, {name:8,price:1642.24}
, {name:9,price:1950.79}
, {name:10,price:609.63}
, {name:11,price:1779.65}
, {name:12,price:1056.65}
, {name:13,price:1898.59}
, {name:14,price:1084.92}
, {name:15,price:1476.12}
, {name:16,price:1046.11}
, {name:17,price:1126.21}
, {name:18,price:953.97}
, {name:19,price:1305.19}
]

const miniGraphNvda = [
  {name:0,price:130.66}
, {name:1,price:166.15}
, {name:2,price:187.85}
, {name:3,price:194.62}
, {name:4,price:190.14}
, {name:5,price:272.32}
, {name:6,price:250.97}
, {name:7,price:331.62}
, {name:8,price:352.82}
, {name:9,price:258.16}
, {name:10,price:408.33}
, {name:11,price:382.07}
, {name:12,price:179.15}
, {name:13,price:258.50}
, {name:14,price:336.85}
, {name:15,price:395.45}
, {name:16,price:398.48}
, {name:17,price:133.84}
, {name:18,price:237.25}
, {name:19,price:375.08}
]

const miniGraphBrka = [
  {name:0,price:728379.21}
, {name:1,price:501758.50}
, {name:2,price:409428.27}
, {name:3,price:523441.40}
, {name:4,price:816349.48}
, {name:5,price:1008165.01}
, {name:6,price:265977.55}
, {name:7,price:603863.04}
, {name:8,price:1024001.55}
, {name:9,price:262086.50}
, {name:10,price:1015973.35}
, {name:11,price:556134.98}
, {name:12,price:624194.82}
, {name:13,price:766203.86}
, {name:14,price:864157.54}
, {name:15,price:903970.60}
, {name:16,price:288090.77}
, {name:17,price:878043.95}
, {name:18,price:518391.25}
, {name:19,price:830385.23}
]

const miniGraphFB= [
  {name:0,price:340.39}
, {name:1,price:321.79}
, {name:2,price:156.48}
, {name:3,price:296.48}
, {name:4,price:298.85}
, {name:5,price:380.10}
, {name:6,price:356.33}
, {name:7,price:377.50}
, {name:8,price:206.97}
, {name:9,price:366.89}
, {name:10,price:231.89}
, {name:11,price:344.07}
, {name:12,price:367.74}
, {name:13,price:234.03}
, {name:14,price:258.20}
, {name:15,price:243.07}
, {name:16,price:238.43}
, {name:17,price:374.84}
, {name:18,price:281.49}
, {name:19,price:372.31}
]

const miniGraphUnh = [
  {name:0,price:518.72}
  , {name:1,price:447.45}
  , {name:2,price:760.47}
  , {name:3,price:598.72}
  , {name:4,price:574.87}
  , {name:5,price:330.89}
  , {name:6,price:485.79}
  , {name:7,price:540.18}
  , {name:8,price:1046.29}
  , {name:9,price:885.74}
  , {name:10,price:530.63}
  , {name:11,price:590.30}
  , {name:12,price:709.39}
  , {name:13,price:760.50}
  , {name:14,price:859.97}
  , {name:15,price:824.62}
  , {name:16,price:548.33}
  , {name:17,price:573.59}
  , {name:18,price:943.15}
  , {name:19,price:641.31}
]

const miniGraphJnj = [
  {name:0,price:518.72}
, {name:1,price:447.45}
, {name:2,price:760.47}
, {name:3,price:598.72}
, {name:4,price:574.87}
, {name:5,price:330.89}
, {name:6,price:485.79}
, {name:7,price:540.18}
, {name:8,price:1046.29}
, {name:9,price:885.74}
, {name:10,price:530.63}
, {name:11,price:590.30}
, {name:12,price:709.39}
, {name:13,price:760.50}
, {name:14,price:859.97}
, {name:15,price:824.62}
, {name:16,price:548.33}
, {name:17,price:573.59}
, {name:18,price:943.15}
, {name:19,price:641.31}
]

export const miniGraphBySymbol = {
  'AAPL': miniGraphAapl,
  'MSFT': miniGraphMsft,
  'GOOGL': miniGraphGoogl,
  'AMZN': miniGraphAmzn,
  'TSLA': miniGraphTsla,
  'NVDA': miniGraphNvda,
  'BRK.A': miniGraphBrka,
  'FB': miniGraphFB,
  'UNH': miniGraphUnh,
  'JNJ': miniGraphJnj
}

export const fiveYearDataAapl = [
  {
    symbol: 'AAPL',
    name: '1',
    price: 165.30,
  },
  {
    symbol: 'AAPL',
    name: '2',
    price: 165.28,
  },
  {
    symbol: 'AAPL',
    name: '3',
    price: 164.48,
  },
  {
    symbol: 'AAPL',
    name: '4',
    price: 164.93,
  },
  {
    symbol: 'AAPL',
    name: '5',
    price: 164.93,
  },
  {
    symbol: 'AAPL',
    name: '6',
    price: 163.52,
  },
  {
    symbol: 'AAPL',
    name: '7',
    price: 163.60,
  },
  {
    symbol: 'AAPL',
    name: '8',
    price: 163.70,
  },
  {
    symbol: 'AAPL',
    name: '9',
    price: 163.04,
  },
  {
    symbol: 'AAPL',
    name: '10',
    price: 162.71,
  },
  {
    symbol: 'AAPL',
    name: '11',
    price: 162.45,
  },
  {
    symbol: 'AAPL',
    name: '12',
    price: 161.98,
  },
  {
    symbol: 'AAPL',
    name: '13',
    price: 162.14,
  },
  {
    symbol: 'AAPL',
    name: '14',
    price: 162.79,
  },
]

export const fiverYearDataMeta = [
  {
    symbol: 'FB',
    name: '1',
    price: 206.22,
  },
  {
    symbol: 'FB',
    name: '2',
    price: 186.57,
  },
  {
    symbol: 'FB',
    name: '3',
    price: 185.70,
  },
  {
    symbol: 'FB',
    name: '4',
    price: 185.23,
  },
  {
    symbol: 'FB',

    name: '5',
    price: 182.60,
  },
  {
    symbol: 'FB',

    name: '6',
    price: 183.68,
  },
  {
    symbol: 'FB',

    name: '7',
    price: 182.77,
  },
  {
    symbol: 'FB',

    name: '8',
    price: 182.77,
  },
  {
    symbol: 'FB',

    name: '9',
    price: 183.49,
  },
  {
    symbol: 'FB',

    name: '10',
    price: 183.46,
  },
  {
    symbol: 'FB',

    name: '11',
    price: 183.68,
  },
  {
    symbol: 'FB',

    name: '12',
    price: 184.66,
  },
  {
    symbol: 'FB',

    name: '13',
    price: 189.99,
  },
  {
    symbol: 'FB',

    name: '14',
    price: 207.95,
  },
  ]
  export const fiveYearDataNvda = [
    {
      symbol: 'NVDA',
  
      name: '1',
      price: 202.05,
    },
    {
      symbol: 'NVDA',
  
      name: '2',
      price: 200.46,
    },
    {
      symbol: 'NVDA',
  
      name: '3',
      price: 198.52,
    },
    {
      symbol: 'NVDA',
  
      name: '4',
      price: 199.59,
    },
    {
      symbol: 'NVDA',
  
      name: '5',
      price: 200.89,
    },
    {
      symbol: 'NVDA',
  
      name: '6',
      price: 197.82,
    },
    {
      symbol: 'NVDA',
  
      name: '7',
      price: 197.44,
    },
    {
      symbol: 'NVDA',
  
      name: '8',
      price: 196.60,
    },
    {
      symbol: 'NVDA',
  
      name: '9',
      price: 195.99,
    },
    {
      symbol: 'NVDA',
  
      name: '10',
      price: 195.33,
    },
    {
      symbol: 'NVDA',
  
      name: '11',
      price: 183.46,
    },
    {
      symbol: 'NVDA',
  
      name: '12',
      price: 195.75,
    },
    {
      symbol: 'NVDA',
      name: '13',
      price: 194.67,
    },
    {
      symbol: 'NVDA',
  
      name: '14',
      price: 194.94,
    },
    ]