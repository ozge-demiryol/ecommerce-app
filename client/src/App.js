import {Route} from 'react-router-dom';
//Components
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import ProductCard from './components/ProductCard/ProductCard';
import Home from './components/Home/Home';

function App() {
  
  return (
    <>
      {/* <Home/> */}
      <Header/>
      <Home/>
      <Footer/> 
    </>
  );
}

export default App;
