

import './App.css';
import BaseLayout from "./components/BaseLayout"
// import ProductList from './components/ProductList';
import ProductSearch from "./components/ProductSearch"
import ImageSlider from "./components/ImageSlider"
// import Ratings from "./components/Ratings"
import ProductDetail from "./components/ProductDetail"

function App() {
  return (
    <div className="App">
      {/* <BaseLayout />
      <ImageSlider /> */}
      <ProductSearch />
      <ProductDetail />
      {/* <Ratings /> */}

      {/* <ProductList /> */}
    </div>
  );
}

export default App;
