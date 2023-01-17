
import './App.css';
import Nav from "./component/nav";
import Home from "./pages/home";
import Features from "./component/features";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignIn from "./Authentication/SignIn/signIn";
import FAQ from "./pages/FAQ";
import Support from "./pages/support";
import RefProgram from "./pages/refProgram";
import {Link, NavLink} from "react-router-dom";
import GiftCard from "./pages/giftCard";
import Register from "./Authentication/Register/register";
import ChatPage from "./pages/chatPage";


function App() {

  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/refProgram" element={<RefProgram />} />
                <Route path="/FaQ" element={<FAQ />} />
                <Route path="/Support" element={<Support />} />
                <Route path="/giftCard" element={<GiftCard />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/chatPage" element={<ChatPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
