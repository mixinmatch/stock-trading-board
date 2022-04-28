import './App.css';
import SymbolDashBoard from './components/SymbolDashBoard'
import HeaderBar from './components/HeaderBar'
import Notifications from "./components/Notificationpage";
import Account from "./components/Account";

import {
  BrowserRouter as Router,
  useLocation,
  Routes,
  Route
} from "react-router-dom";

import ReactDOM from 'react-dom'

import { useState } from 'react';
import {stockDataApple, stockDataMeta, stockDataNvidia} from './components/Data'

function App() {
  const [dataGraph, setDataGraph] = useState(stockDataApple.graphData)
  const [renderSearch, setRenderSearch] = useState(true)
  const [price, setPrice] = useState(stockDataApple.price)


  function handl(event) {
    let symbol = event.target.firstChild.innerText;

    if(symbol ==='AAPL') {
      setDataGraph(stockDataApple.graphData)
      setPrice(stockDataApple.price)
    } else if(symbol ==='FB') {
      setDataGraph(stockDataMeta.graphData)
      setPrice(stockDataMeta.price)
    } else if(symbol ==='NVDA') {
      setDataGraph(stockDataNvidia.graphData)
      setPrice(stockDataNvidia.price)
    }
    setRenderSearch(false);
  }

  return (
    <>
    <HeaderBar handler={handl} renderSearch={renderSearch} setRenderSearch={setRenderSearch}/>
        <Routes>
          <Route path="/dashboard" element={<SymbolDashBoard d={dataGraph} price={price}/>} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/account" element={<Account />} />
        </Routes>

    </>
  );
}

export default App;
