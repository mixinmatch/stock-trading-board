import './App.css';
import SymbolDashBoard from './components/SymbolDashBoard'
import HeaderBar from './components/HeaderBar'
import Notifications from "./components/Notificationpage";
import Account from "./components/Account";
import { fiverYearDataMeta, fiveYearDataNvda, fiveYearDataAapl } from './components/Data';

import {
  BrowserRouter as Router,
  useLocation,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import ReactDOM from 'react-dom'

import { useEffect, useState } from 'react';
import {stockDataApple, stockDataMeta, stockDataNvidia} from './components/Data'

function App() {
  const [activeTab, setActiveTab] = useState("today")
  const [dataGraph, setDataGraph] = useState(stockDataApple.graphData)
  const [renderSearch, setRenderSearch] = useState(true)
  const [price, setPrice] = useState(stockDataApple.price)
  const [changeAmount, setChangeAmount] = useState(stockDataApple.upDownAmount)



  function handl(event) {
    let symbol = event.target.firstChild.innerText;


    if(symbol ==='AAPL') {
      setDataGraph(stockDataApple.graphData)
      setPrice(stockDataApple.price)
      setChangeAmount(stockDataApple.upDownAmount)
    } else if(symbol ==='FB') {
      setDataGraph(stockDataMeta.graphData)
      setPrice(stockDataMeta.price)
      setChangeAmount(stockDataMeta.upDownAmount)
    } else if(symbol ==='NVDA') {
      setDataGraph(stockDataNvidia.graphData)
      setPrice(stockDataNvidia.price)
      setChangeAmount(stockDataNvidia.upDownAmount)
    }
    setRenderSearch(false);
  }

  useEffect(() => {
    //pre-append additional graph data. According to to how long it is.
    let symbol = dataGraph[0].symbol
    let whichData = fiveYearDataAapl
    if (symbol === 'NVDA') {
      whichData = fiveYearDataNvda
    } else if (symbol === 'FB') {
      whichData = fiverYearDataMeta
    }

    setDataGraph(dataGraph.filter(point => {
      return point.name.includes(":")
    }))

    if (activeTab === '1w') {
      setDataGraph(whichData.slice(-2).concat(dataGraph))
    } else if (activeTab === '1m') {
      setDataGraph([...(whichData.slice(-3)), ...dataGraph])
    } else if (activeTab === '3m') {
      setDataGraph([...(whichData.slice(-4)), ...dataGraph])
    } else if (activeTab === '1y') {
      setDataGraph([...(whichData.slice(-8)), ...dataGraph])
    } else if (activeTab === '5y') {
      setDataGraph([...whichData, ...dataGraph])
    }
  },
    [activeTab]
  )

  function timePeriodHandler(tab) {  
    setActiveTab(tab)
  }

  return (
    <>
    <HeaderBar handler={handl} renderSearch={renderSearch} setRenderSearch={setRenderSearch}/>
        <Routes>
          <Route exact path="/stock-trading-board/" element={<Navigate replace to="/stock-trading-board/dashboard" /> } />
          <Route path="/stock-trading-board/dashboard" element={<SymbolDashBoard activeTab={activeTab} timePeriodHandler={timePeriodHandler} d={dataGraph} price={price} changeAmount={changeAmount}/>} />
          <Route path="/stock-trading-board/notifications" element={<Notifications />} />
          <Route path="/stock-trading-board/account" element={<Account />} />
        </Routes>

    </>
  );
}

export default App;
