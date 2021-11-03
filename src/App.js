import './App.css';
import React, { useState, useEffects } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import ImageBoard from './components/ImageBoard';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

const App = () => {
  const [input, setInput] = useState('');
  const [page, setPage] = useState(0);

  const updateInput = (searchInput) => {
    setInput(searchInput);
    setPage(1);
  };

  console.log(input, page);

  return (
    <div className="App">
      <Header />
      <Search onChange={ updateInput } />
      <ImageBoard />
      <Pagination />
      <Footer />
    </div>
  );
}

export default App;
