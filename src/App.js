import CardItem from "./components/CardItem";
import ProductList from "./components/ProductsList";
import { ProductsProvider } from "./context/productsContext";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";
import NavigationBar from "./pages/NavigationBar";
import ShopingCartPage from "./pages/ShopingCartPage";


function App() {
 
  return (
    <ProductsProvider>
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/product/:id' element={<ProductPage/>}/>
          <Route path='/cart' element={<ShopingCartPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
