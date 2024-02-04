import '../App.css';
import { Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';

function Products() {

    function onClick() {
        console.log(location.pathname)
    }
    const location = useLocation()
    function check(path) {
        if(location.pathname == path) {
            return 'bg-gray-400 ml-2'
        } else {
            return 'ml-2'
        }
    }
return (
    <>
        <Link onClick={onClick} className={check('/products/product1')} to="product1">Product1</Link>
        <Link className={check('/products/product2')} to="product2">Product2</Link>
        <Link className={check('/products/product3')} to="product3">Product3</Link>

        <Outlet />
    </>
);
}

export default Products;
