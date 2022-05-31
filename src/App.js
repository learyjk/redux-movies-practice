import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import MovieDetail from './components/MovieDetail/MovieDetail.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetail />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
