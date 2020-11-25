import './App.css';
import BaseLayout from "./components/BaseLayout"
import ProductList from './components/ProductList';
import ProductSearch from "./components/ProductSearch"


function App() {
  return (
    <div className="App">
      <BaseLayout />
      <ProductSearch />
      {/* <ProductList /> */}
    </div>
  );
}

export default App;
