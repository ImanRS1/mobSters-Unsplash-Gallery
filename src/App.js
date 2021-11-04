import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import ImageBoard from './components/ImageBoard';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import About from './components/About';

const App = () => {
  const [input, setInput] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState([]);
  
  const config = {
    unsplashKey: 'lZ-oVPWLFJv-IRXFSqoTPMeyuQAXJ3IscBdCfiqSeIw',
  };

  const getData = async (input, page) => {
    const data = await axios.get(`https://api.unsplash.com/search/photos/?query=${input}&page=${page}&client_id=${config.unsplashKey}`);
    setTotalPages(data.data.total_pages);
    setData(data.data.results);
  };

  const navigate = useNavigate();

  const updatePage = (str, num=1) => {
    setInput(str);
    setPage(num);
    getData(str, num);
    navigate(`/search/${str}/${num}`);
  };

  useEffect(() => {
    const handleLocalStorage = () => {
      const searchHistory = JSON.parse(window.localStorage.getItem('searchHistory')) || [];
      if (!searchHistory.includes(input)) {
        searchHistory.push(input);
        window.localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
      }
    } 
    handleLocalStorage();
  }, [input]);

  return (
      <div className="App">
        <Header input={input} page={page}/>
        <Routes>
          <Route path="/" element={
            <div>
              <Search input={input} updatePage={updatePage} page={page} />
              <Welcome />
            </div>
          } />
          <Route path="/search" element={
            <Search input={input} updatePage={updatePage} page={page} />
          }/>
          <Route path="/search/:input/:page" element={
            <div>
              <Search input={input} updatePage={updatePage} page={page} />
              <ImageBoard data={data} />
              <Pagination page={page} updatePage={updatePage} totalPages={totalPages} input={input} />
            </div>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
