import './App.css';
import React, { useState, useEffects } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import ImageBoard from './components/ImageBoard';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

const App = () => {
  const [input, setInput] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState([]);

  const updateInput = (searchInput) => {
    setInput(searchInput);
  };

  const updatePage = () => {
    setPage(1);
  };
  
  const config = {
    unsplashKey: 'lZ-oVPWLFJv-IRXFSqoTPMeyuQAXJ3IscBdCfiqSeIw',
  };

  const getData = async input => {
    const data = await axios.get(`https://api.unsplash.com/search/photos/?query=${input}&page=${page}&client_id=${config.unsplashKey}`);
    setTotalPages(data.data.total_pages);
    setData(data.data.results);
  };

  console.log(totalPages, data);

  return (
    <div className="App">
      <Header />
      <Search updateInput={updateInput} input={input} updatePage={updatePage} getData={getData} />
      <ImageBoard data={data}/>
      <Pagination />
      <Footer />
    </div>
  );
}

export default App;
