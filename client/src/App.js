import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductDetail from './components/ProductDetail/ProductDetail'
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Cart from "./components/Cart/Cart";
import {CartProvider} from "./contexts/CartProvider";
import OrderList from "./components/Order/OrderList";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Products */}
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:productId" element={<ProductDetail/>}/>
        {/* Categories */}
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/categories/:categoryName" element={<Category/>}/>
        {/* Cart */}
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<OrderList/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />  
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
