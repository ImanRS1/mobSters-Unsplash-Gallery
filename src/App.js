import './App.css';
import React, { useState } from 'react';
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
    <div className="App">
      <Header />
      <Search updateInput={updateInput} input={input} updatePage={updatePage} page={page} />
      <ImageBoard data={data}/>
      <Pagination page={page} updatePage={updatePage} totalPages={totalPages} input={input} />
      <Footer />
    </div>
  );
}

export default App;
