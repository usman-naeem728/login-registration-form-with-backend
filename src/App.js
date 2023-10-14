import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
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
