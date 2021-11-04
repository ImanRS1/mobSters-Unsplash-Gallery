import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

  const updateInput = (searchInput) => {
    setInput(searchInput);
  };
  
  const config = {
    unsplashKey: 'lZ-oVPWLFJv-IRXFSqoTPMeyuQAXJ3IscBdCfiqSeIw',
  };

  const getData = async (input, page) => {
    const data = await axios.get(`https://api.unsplash.com/search/photos/?query=${input}&page=${page}&client_id=${config.unsplashKey}`);
    setTotalPages(data.data.total_pages);
    setData(data.data.results);
  };

  const updatePage = (input, num=1) => {
    setPage(num);
    getData(input, num);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header input={input}/>
        <Routes>
          <Route path="/" element={
            <div>
              <Search updateInput={updateInput} input={input} updatePage={updatePage} page={page} />
              <Welcome />
            </div>
          } />
          <Route path="/search" element={
            <Search updateInput={updateInput} input={input} updatePage={updatePage} page={page} />
          }/>
          <Route path="/search/:input" element={
            <div>
              <Search updateInput={updateInput} input={input} updatePage={updatePage} page={page} />
              <ImageBoard data={data} />
              <Pagination page={page} updatePage={updatePage} totalPages={totalPages} input={input} />
            </div>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
