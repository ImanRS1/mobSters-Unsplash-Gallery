import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageBoard from './components/ImageBoard';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <ImageBoard />
      <Pagination />
      <Footer />
    </div>
  );
}

export default App;
