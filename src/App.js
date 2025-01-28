import './App.css';
import Categories from './components/Categories';
import DogBanner from './components/DogBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import Seller from './components/Seller';
import Shop from './components/Shop';
import Taste from './components/Taste';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <DogBanner />
      <Categories />
      <Seller />
      <Shop />
      <Taste/>
    </>
  );
}

export default App;
