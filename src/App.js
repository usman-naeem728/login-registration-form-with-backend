import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './components/Login';
import Registration from './components/Registration';
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import UserState from "./context/UserState";

function App() {
  const [token, setToken] = useState(false)
  useEffect(() => {
    // finding token 
    let i;
    for (i = 0; i < localStorage.length; i++) {
      let findingToken = localStorage.key(i);
      if (findingToken === "token") {
        setToken(true)
      }
    }
  })

  useEffect(() => {
    setTimeout(() => {
      <Loader />
    }, 1000);
  })
  return (
    <>
      <UserState>
        <Router>
          <Routes>
            {token && <Route path='/' element={<Home />} />}

            <Route path='/' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
          </Routes>
        </Router>
      </UserState>

    </>
  );
}

export default App;
