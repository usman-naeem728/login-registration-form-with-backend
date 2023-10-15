import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './components/Login';
import Registration from './components/Registration';
import { useEffect } from "react";
import Loader from "./components/Loader";


function App() {
  useEffect(() => {
    setTimeout(() => {
      <Loader />
    }, 1000);
  })
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
