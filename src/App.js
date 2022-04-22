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

function App() {

  return (
    <>
    <HeaderBar />
        <Routes>
          <Route path="/dashboard" element={<SymbolDashBoard />}/>
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/account" element={<Account />} />
        </Routes>

    </>
  );
}

export default App;
