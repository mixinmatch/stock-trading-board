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
  const [dataGraph, setDataGraph] = useState(stockDataApple)
  const [renderSearch, setRenderSearch] = useState(true)

  function handl(event) {
    let symbol = event.target.firstChild.innerText;

    if(symbol ==='AAPL') {
      setDataGraph(stockDataApple)
    } else if(symbol ==='FB') {
      setDataGraph(stockDataMeta)
    } else if(symbol ==='NVDA') {
      setDataGraph(stockDataNvidia)
    }
    setRenderSearch(false);
  }

  return (
    <>
    <HeaderBar handler={handl} renderSearch={renderSearch} setRenderSearch={setRenderSearch}/>
        <Routes>
          <Route path="/dashboard" element={<SymbolDashBoard d={dataGraph}/>} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/account" element={<Account />} />
        </Routes>

    </>
  );
}

export default App;
