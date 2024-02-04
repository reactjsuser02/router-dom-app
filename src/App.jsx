import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';

import Layout from './pages/Layout';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import Product1 from './Components/Product1';
import Product2 from './Components/Product2';
import Product3 from './Components/Product3';

function App() {


return (
    <BrowserRouter>
        {/* <Link className={check('/products')} to="products">Home</Link>
        <Link className={check('/products')} to="about">About</Link>
        <Link className={check('/products')} to="contact">Contact</Link>
        <Outlet /> */}
        {/* <br /> */}
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route path="products" element={<Products />}>
                <Route path="product1" element={<Product1 />} />
                <Route path="product2" element={<Product2 />} />
                <Route path="product3" element={<Product3 />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
}

export default App;
