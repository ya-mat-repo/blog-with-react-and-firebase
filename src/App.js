import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path={process.env.REACT_APP_BASE_DIR} element={<Home />}></Route>
        <Route
          path={`${process.env.REACT_APP_BASE_DIR}/createpost`}
          element={<CreatePost isAuth={isAuth} />}
        ></Route>
        <Route
          path={`${process.env.REACT_APP_BASE_DIR}/login`}
          element={<Login setIsAuth={setIsAuth} />}
        ></Route>
        <Route
          path={`${process.env.REACT_APP_BASE_DIR}/logout`}
          element={<Logout setIsAuth={setIsAuth} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
