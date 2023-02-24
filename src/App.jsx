import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route path="/survey/:questionNumber" element={<Survey />} ></Route>
            <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
